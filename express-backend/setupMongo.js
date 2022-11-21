const mongoose = require("mongoose");

const uri = "";

function connect() {
    const options = { useNewUrlParser: true };
    mongoose.connect(uri, options).then(
        () => {
            console.log("Database connection established");
        },
        (err) => {
            console.log("Error connectiong Database instance due to: ", err);
        }
    );
}

module.exports = connect;