import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";

const Login = () => {
  //const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let items = { username, password };
    if (username !== "" && password !== "") {
      let result = await fetch(AppUrl.base_url + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      });
      result = await result.json();

      //console.log(result);

      if (result.error) {
        toast.error("Incorrect username or password");
      } else {
        localStorage.setItem("admin-info", JSON.stringify(result.success));
        //localStorage.removeItem("top-info");
        // navigate("/", {
        //   replace: true,
        // });
        toast.success("Login successful");
        window.location.href = "/";
      }
    } else {
      toast.error("Please enter both username and password");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <a href="index.html">
                          <img
                            className="login_logo"
                            src="images/logo.webp"
                            alt="logo"
                          />
                        </a>
                      </div>
                      <h4 className="text-center mb-4 text-white">
                        Login to your account
                      </h4>
                      <form action="/">
                        <div className="form-group">
                          <label className="mb-1 text-white">
                            <strong>Username</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-1 text-white">
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        {/* <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <div className="custom-control custom-checkbox ml-1 text-white">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="basic_checkbox_1"
                              />
                              <label
                                className="custom-control-label"
                                for="basic_checkbox_1"
                              >
                                Remember my preference
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <a
                              className="text-white"
                              href="page-forgot-password.html"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div> */}
                        <div className="text-center login_btn_div">
                          <button
                            type="button"
                            className="btn bg-white text-primary btn-block"
                            onClick={() => login()}
                          >
                            Sign Me In
                          </button>
                        </div>
                      </form>
                      {/* <div className="new-account mt-3">
                        <p className="text-white">
                          Don't have an account?{" "}
                          <a className="text-white" href="page-register.html">
                            Sign up
                          </a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
