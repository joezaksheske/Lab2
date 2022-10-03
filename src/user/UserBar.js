import { useState } from "react";

import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar({ user, dispatch }) {
  const [existingUser, setExistingUser] = useState(true);
  if (user) {
    return (
      <div className="wrapper_UserBar">
        <Logout user={user} dispatch={dispatch} />
      </div>
    );
  } else {
    return (
      <div className="wrapper_UserBar">
        {existingUser ? (
          <Login dispatch={dispatch} />
        ) : (
          <Register dispatch={dispatch} />
        )}
        <button
          className="userBar_Button_Container"
          onClick={(e) => {
            e.preventDefault();
            setExistingUser(!existingUser);
          }}
        >
          {existingUser ? "Need an Account?" : "Have an Account?"}
        </button>
      </div>
    );
  }
}
