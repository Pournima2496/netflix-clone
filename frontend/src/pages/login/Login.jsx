import React, { useState } from "react";
import "./login.scss";
import SignUp from "../signup/SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_bg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
          alt="netflix_logo"
          className="logo"
        />

        <button className="login_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="login_contents">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form>
              <input type="email" className="login_email" placeholder="Email address" />
              <button className="getStarted" onClick={() => setSignIn(true)}>
                GET STARTED 
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
