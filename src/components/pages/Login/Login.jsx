import "../Login/login.css";
import "../Login/utilities/css/util.css";
import "../Login/utilities/fonts/font-awesome-4.7.0/css/font-awesome.css";
import "../Login/utilities/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import logoLogin from "../../../img/logoLogin.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { signIn } from "../../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordEmailError, passwordEmailErrorState] = useState();

  const password = useRef();
  const email = useRef();

  let hasError = false;

  const errorLogin = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (password.current.value === "") {
      passwordEmailErrorState("Email or password incorrect");
      hasError = true;
    } else {
      passwordEmailErrorState("");
    }

    if (!emailRegex.test(email.current.value)) {
      passwordEmailErrorState("Email or password incorrect");
      hasError = true;
    } else {
      passwordEmailErrorState("");
    }

    return hasError;
  };

  const handlePrevent = (e) => {
    e.preventDefault();
    const hasError = errorLogin();

    if (!hasError) {
      const signInDataBody = {
        email: email.current.value.toLowerCase(),
        password: password.current.value,
      };

      Toastify({
        text: "verifying...",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background:
            " linear-gradient(175deg, #fff67e 0, #ffe56d 16.67%, #ffcd56 33.33%, #ffae38 50%, #f08f19 66.67%, #e77502 83.33%, #e46002 100%)",
        },
      }).showToast();
      setTimeout(() => {
        dispatch(signIn(signInDataBody)).then((algo) => {
          if (algo.payload.message || algo.payload.details) {
            passwordEmailErrorState("Email or password incorrect");
          } else {
            navigate("/");
          }
        });
      }, 2000);
    }
  };

  const signInGoogle = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);

    const signInDataBody = {
      email: userData.email,
      password: userData.given_name + userData.sub,
      avatar: userData.picture,
    };

    console.log(signInDataBody);

    dispatch(signIn(signInDataBody));

    navigate("/");
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={logoLogin} alt="IMG" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">My tinerary flight</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                ref={email}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                ref={password}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <p
              className={`error-message ${
                passwordEmailError
                  ? "error-message-block"
                  : "error-message-hidden"
              }`}
            >
              {passwordEmailError}
            </p>

            <div className="container-login100-form-btn">
              <button
                type="submit"
                className="login100-form-btn"
                onClick={handlePrevent}
              >
                Sign in
              </button>

              <div className="btn-google">
                <GoogleLogin
                  text="signin_with"
                  onSuccess={signInGoogle}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </div>

            <div className="text-center p-t-136">
              <Link to={`/signUp`} className="txt2">
                Create your Account
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
