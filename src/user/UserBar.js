// import { useState } from "react";

import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar({ user, dispatch }) {
  // const [existingUser, setExistingUser] = useState(true);
  if (user) {
    return (
      <div className="wrapper_UserBar">
        <Logout user={user} dispatch={dispatch} />
      </div>
    );
  } else {
    return (
      <div className="wrapper_UserBar">
        <Login dispatch={dispatch} />
        <br></br>
        <Register dispatch={dispatch} />
      </div>
    );
  }
}
