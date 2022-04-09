import { getAuth } from "firebase/auth";
import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";


const auth = getAuth(app)

const Login = () => {

  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const nevigete = useNavigate();

  const from = location?.state?.form?.pathName || '/';
  const handelGoogleSignIn = () => {
    signInWithGoogle()
    .then(()=> {
      nevigete(from, {replace: true})
    })
  }

  return (
    <div>
      <h3>Plese Login now</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={handelGoogleSignIn}>Google Sing In</button>
      </div>
      <form>
        <input type="email" name="" id="" placeholder="Youe Emali" />
        <br />
        <input
          style={{ margin: "10px" }}
          type="password"
          name=""
          id=""
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
