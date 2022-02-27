import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { signUpMutation, loginUserMutation } from "../utils/queries";

function SignupForm({ signUpForm, setShowModal }) {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  //Mutation request to crteate a user
  let [createUser, { data: signUpData }] = useMutation(signUpMutation);
  let [loginUser, { data: loginData }] = useMutation(loginUserMutation);
  useEffect(() => {
    if (signUpForm) {
      if (!signUpData) return;
      Auth.login(signUpData.signUp.token);
    } else {
      if (!loginData) return;
      Auth.login(loginData.login.token);
    }
  }, [loginData, signUpForm, signUpData]);
  const handleLoginForm = async (evt) => {
    evt.preventDefault();

    setErrors((errors) => ({ ...validateCredentials(credentials) }));
  };

  const validateCredentials = async (credentials) => {
    let errors = {};

    if (credentials.username === "" && signUpForm) {
      errors = Object.assign(errors, {
        username: "This field is required",
      });
    }
    if (credentials.email === "") {
      errors = Object.assign(errors, {
        email: "This field is required",
      });
    }
    if (credentials.password === "") {
      errors = Object.assign(errors, {
        password: "This field is required",
      });
    }
    console.log(errors);
    if (!errors.username && !errors.email && !errors.password) {
      try {
        if (signUpForm) {
          await createUser({ variables: { ...credentials } });
        } else {
          await loginUser({
            variables: {
              email: credentials.email,
              password: credentials.password,
            },
          });
        }
        setCredentials({
          username: "",
          email: "",
          password: "",
        });
      } catch (err) {
        console.log(err.message);
      }
      // setShowModal(false);
    }
    return errors;
  };

  const handleInputChange = (evt) => {
    evt.persist();
    setCredentials((credentials) => ({
      ...credentials,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <div className="flex flex-col ">
      <form className="flex flex-wrap  " onSubmit={handleLoginForm.bind(this)}>
        {signUpForm ? (
          <section className="pl-6 pr-3 w-100">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              id="username"
              className={
                "border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary " +
                (errors.hasOwnProperty("username") ? "border-red-500" : "")
              }
              name="username"
              type="text"
              placeholder="Paul"
              value={credentials.username}
              onChange={handleInputChange.bind(this)}
            />
            {errors.hasOwnProperty("username") && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
          </section>
        ) : (
          ""
        )}

        <section className="pl-6 pr-3 w-100">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className={
              "border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary " +
              (errors.hasOwnProperty("email") ? "border-red-500" : "")
            }
            name="email"
            type="text"
            placeholder="e.g. some@example"
            value={credentials.email}
            onChange={handleInputChange.bind(this)}
          />
          {errors.hasOwnProperty("email") && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}
        </section>
        <section className="pl-3 pr-6 w-100">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            className={
              "border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary " +
              (errors.hasOwnProperty("password") ? "border-red-500" : "")
            }
            name="password"
            type="password"
            placeholder="* * * * * * * *"
            value={credentials.password}
            onChange={handleInputChange.bind(this)}
          />
          {errors.hasOwnProperty("username") && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}
        </section>

        <button className="w-full m-4  bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:border-none">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
