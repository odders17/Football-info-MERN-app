import React from "react";
import Auth from "../utils/auth";
import SignUpForm from "./SignupForm";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [formType, setFormType] = React.useState(false);
  return (
    <>
      {Auth.loggedIn() ? (
        <button
          className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={Auth.logout}
        >
          LogOut
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Login/SignUp
        </button>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Login/SignUp</h3>
                  <span
                    className=" text-red-500 text-sm  cursor-pointer"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    ❌
                  </span>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <SignUpForm
                    signUpForm={formType}
                    handleModalClose={() => setShowModal(false)}
                  />
                </div>
                {/*footer*/}

                <button
                  className="m-4 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Submit
                </button>
              </div>{" "}
              <div className=" m-4 p-2 w-[300px] rounded-xl bg-yellow-400">
                <span className="m-2">
                  {formType ? "Already Registered?" : "Not regitered?"}
                </span>
                <a
                  className="bg-gray-500 text-white active:bg-red-600 cursor-pointer font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setFormType(!formType)}
                >
                  {formType ? "Login" : "SignUp"}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
