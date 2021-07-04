import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "../assets/jainflix_logo.png";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src={logo}
          alt="loginScreen_background"
        />
        <button
          onClick={() => setSignIn(true)}
          className="loginScreen_signInButton"
        >
          SIGN IN
        </button>
        <div className="loginScreen_gradient"></div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email address" required />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
