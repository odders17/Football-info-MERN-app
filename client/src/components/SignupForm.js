import React from "react";

function SignupForm({ signUpForm }) {
  return <>{signUpForm ? "Signup" : "Login"}</>;
}

export default SignupForm;
