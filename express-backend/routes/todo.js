const express = require("express");
const jwt = require("jsonwebtoken");
const Todo = require("../models/Todo");
const {mongo} = require("mongoose");

const privateKey = process.env.JWT_PRIVATE_KEY;

const router = express.Router();

router.use(function( req, res, next ) {
    if (req.header("Authorization")) {
        try {
            req.payload = jwt.verify(req.header("Authorization"), privateKey, { 
                algorithms: ["RS256"],
            });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    } else {
        return res.status(401).json({ error: "Unauthorized"});
    }
    next();
});

router.post("/", async function(req, res){
    const todo = new Todo({
        title: req.body.title,
        content: req.body.content,
        author: req.payload.id,
        dateCreated: req.payload.dateCreated,
        isComplete: req.payload.completed,
        dateCompleted: req.payload.completed,
    });
    return todo.save().then((savedPost) => {
        return res.status(201).json({ 
            _id: savedPost._id,
            title: savedPost.title,
            content: savedPost.content,
            author: savedPost.author,
            dateCreated: savedPost.dateCreated,
            isComplete: savedPost.completed,
            dateCompleted: savedPost.dateCompleted,
        });
    }).catch((error) => {
        return res.status(500).json({ error: "Something went wrong." });
    });
});



router.get("/", async function(req, res, next) {
    // const todos = await Todo.find().where("author").equals(req.payload.id).exec();
    const todos = await Todo.find( { author: new mongo.ObjectId(req.payload.id) } ).populate('author').exec();
    console.log(todos);
    return res.status(200).json({ todos: todos });
});

router.get("/:id", async function (req, res, next) {
    const todo = await Todo.findOne().where("_id").equals(req.params.id).populate('author').exec();
    console.log(todo);
    return res.status(200).json(todo);
});

router.patch("/:id", async function (req, res, next) {
    console.log(req.body.dateCompleted);
    console.log(req.body.isComplete);
    const updateTodo = await Todo.updateOne({_id: new mongo.ObjectId(req.body.id)}, {isComplete: req.body.dateCompleted.isComplete, dateCompleted: req.body.dateCompleted.dateCompleted});
    console.log(updateTodo);
    return res.status(200).json(updateTodo);
});

router.delete("/:id", async function(req, res, next) {
    const deleteTodo = await Todo.deleteOne({_id: new mongo.ObjectId(req.body.id)});
    if (deleteTodo.acknowledged && deleteTodo.deletedCount > 0) {
        return res.status(200).json({ message: "Your post has been deleted sucessfully."});
    } else {
        return res.status(500).json({ error: "Something went wrong." });
    }
});

module.exports = router;