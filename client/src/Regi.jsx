import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import  { useSelector,useDispatch } from "react-redux";
import "./App.css";

import axios from "axios";

const Regi = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  let [error, setError] = useState({
    name: "",
    email: "",
    pass: "",
  });
  let [iCon, setIcon] = useState(false);

  let navigate = useNavigate();
  //let dispatch = useDispatch();
  //let reduxReturnData = useSelector((state) => state);

  // validation use ****

  // validation use ****

  let handleChange = (e) => {
    let { name, value } = e.target;

    const noDig = /^[^\d]*$/;
    const noSp = /^[a-zA-Z0-9\s]*$/;

    // const regex = /^.{6,20}$/;   // problem
    // if (name === "pass") {
    //   if (!regex.test(value)) {
    //     setError({ ...error, name: " At least 6 units required " });
    //   }
    // }

    if (name === "name") {
      if (!noDig.test(value)) {
        setError({ ...error, name: "  Digit not allowed " });
        return;
      }

      if (!noSp.test(value)) {
        setError({ ...error, name: "  Special Char not allowed " });
        return;
      }
    }

    setData({ ...data, [name]: value });
    setError({ ...error, [name]: "" });

    console.log(data);
  };

  let postFun = async (e) => {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data.name === "") {
      setError({ ...error, name: "Valid Name Require" });
    } else if (!emailRegex.test(data.email)) {
      setError({ ...error, email: "Valid Email Require" });
    } else if (data.pass.length < 6) {
      setError({ ...error, pass: "Minimum 6 units require" });
      console.log(data.pass.length);
    } else {
      await axios
        .post("http://localhost:5000/todo/auth", {
          name: data.name,
          email: data.email,
          pass: data.pass,
        })
        .then((res) => {
          console.log("Done");
          console.log(res.data);
          setData("");
          navigate("/home");
        });
    }
  };
  let handelIcon=()=>{
    setIcon(!iCon)
  }
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 w-[420px] rounded-lg">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="vite.svg" alt="logo" />
            Todo Vite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {error.name ? <p>{error.name}</p> : <p>Your Name</p>}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {error.email ? <p>{error.email}</p> : <p>Your Email</p>}
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {error.pass ? <p>{error.pass}</p> : <p>Password</p>}
                  </label>
                  <input
                    type={!iCon ? "password":"text"}
                    name="pass"
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {iCon ? (
                    <img
                      onClick={handelIcon}
                      className="w-4 h-4  absolute top-[40px] right-[20px] cursor-pointer"
                      src="eyeOp.svg"
                      alt="logo"
                    />
                  ) : (
                    <img
                      onClick={handelIcon}
                      className="w-4 h-4  absolute top-[40px] right-[20px] cursor-pointer"
                      src="eyeCl.svg"
                      alt="logo"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  onClick={postFun}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  MERN project
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Regi;
