import React from "react";

function SignupForm({ signUpForm }) {
  return <>{signUpForm ? "SignUp" : "Login"}</>;
}

export default SignupForm;
