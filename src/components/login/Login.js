import React from 'react';
import './login.css';
import Logo from '../../images/1.png';

export const Login = () => {
  return (
    <div class="login-margin">
      <main class="d-flex align-items-center justify-content-center">
        <form
          action="#"
          id="login_form"
          class="d-flex align-items-center justify-content-center"
        >
          <div class="mx-auto text-center">
            <div class="logo mb-4">
              <img src={Logo} class="img-fluid" alt="" />
            </div>

            <div class="title mb-4">
              <h5 class="mb- text-uppercase">Welcome Back!</h5>
              <p class="mb-0 text-capitalize">
                Please fill the login details below
              </p>
            </div>
            <div class="inputs">
              <div class="i-g d-flex align-items-center w-100 mb-3">
                <input
                  type="email"
                  class="w-100"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="i-g d-flex align-items-center w-100 mb-3">
                <input
                  type="password"
                  class="w-100"
                  placeholder="Password"
                  required
                />
              </div>

              <div class="custom-control custom-checkbox mb-3 pl-0 text-center">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  <span class="remember-text"> Remember Me</span>
                </label>
              </div>

              <div class="btns d-flex align-items-center justify-content-center w-100 mb-3">
                <button
                  type="submit"
                  class="th-btn th-btn-lg th-btn-fill-primary text-uppercase w-100 d-flex"
                >
                  login
                </button>
              </div>

              <div class="text-center mb-3">
                <a href="#forgot" class="link">
                  Forgot your password?
                </a>
              </div>

              <span class="line position-relative d-flex align-items-center justify-content-center text-center w-100 mb-4">
                or login with
              </span>

              <div class="social w-100 d-flex align-items-center justify-content-between mb-5">
                <a
                  href="#social"
                  class="th-btn th-btn-lg th-btn-fill-light w-50 mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    class="mr-2"
                  >
                    <title>Google</title>
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#4285F4"
                        d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
                      ></path>
                      <path
                        fill="#EA4335"
                        d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
                      ></path>
                    </g>
                  </svg>
                  <span class="remember-text">Google</span>
                </a>
                <a
                  href="#fb"
                  class="th-btn th-btn-lg social-btn-2 w-50 social-margin"
                >
                  <i class="fa fa-facebook mr-2"></i>
                  <span class="remember-text">Facebook</span>
                </a>
              </div>

              <div class="text-center">
                <a href="#account" class="link">
                  Don't have an account? <span>Create an account.</span>
                </a>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
