import { useRef } from "react";
import "./signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <div className="signup">
      <form>
        <h1 className="signup_form">Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="gray">New to Netflix?</span>
          <span className="link" onClick={register}>
            {" "}
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
