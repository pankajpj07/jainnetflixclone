import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="signupScreen_emailInput"
        />
        <input
          className="signupScreen_emailInput"
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
