import "../SignUp/signUp.css";
import "../Login/login.css";
import logoSignUp from "../../../img/logoLogin.svg";
import { Link, useNavigate } from "react-router-dom";
import countries from "../../../data/dataCountry.json";
import { GoogleLogin } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/actions/userAction.js";
import jwtDecode from "jwt-decode";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const nameUser = useRef(null);
  const avatar = useRef(null);
  const country = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  let hasError = false;

  const SignUpCorrect = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for register!",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const errorEmpty = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (nameUser.current.value === "") {
      setNameError("Name is required");

      hasError = true;
    } else if (nameUser.current.value.length < 3) {
      setNameError("Name must be at least 3 characters long");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!emailRegex.test(email.current.value)) {
      // Utiliza test() para verificar el correo electrónico
      setEmailError("Enter valid email (ex: pepito@email.com)");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (password.current.value === "") {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.current.value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      hasError = true;
    } else if (
      !/[A-Z]/.test(password.current.value) ||
      !/[a-z]/.test(password.current.value) ||
      !/[^A-Za-z0-9]/.test(password.current.value)
    ) {
      setPasswordError(
        "Password must include at least one uppercase letter, one lowercase letter, and one symbol"
      );
      hasError = true;
    } else {
      setPasswordError("");
    }

    return hasError;
  };

  const handlePrevent = (e) => {
    e.preventDefault();

    const hasError = errorEmpty();

    if (!hasError) {
      const registerDataBody = {
        nameUser: nameUser.current.value,
        email: email.current.value.toLowerCase(),
        avatar: avatar.current.value,
        password: password.current.value,
        country: country.current.value,
      };

      if (avatar.current.value.trim() !== "") {
        registerDataBody.avatar = avatar.current.value;
      }

      dispatch(signUp(registerDataBody));

      SignUpCorrect();
    }
  };

  const signUpGoogle = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    const DataGoogleBody = {
      nameUser: userData.name,
      email: userData.email,
      avatar: userData.picture,
      password: userData.given_name + userData.sub,
    };
    dispatch(signUp(DataGoogleBody));
  };

  let paises = countries.map((pais) => (
    <option key={pais.numericCode} value={pais.name}>
      {pais.name}
    </option>
  ));

  paises.unshift(
    <option disabled key="default" value="">
      Select your country
    </option>
  );

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={logoSignUp} alt="IMG" />
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
                name="name"
                placeholder="name"
                ref={nameUser}
                onChange={errorEmpty}
              />
              <span className="fieldRequiered">*</span>
              <span className="focus-input100"></span>
            </div>
            <p
              className={`error-message ${
                nameError ? "error-message-block" : "error-message-hidden"
              }`}
            >
              {nameError}
            </p>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="avatar"
                placeholder="photo url"
                ref={avatar}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user-plus"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <select
                className="input100 countrySelect"
                name="pais"
                defaultValue=""
                ref={country}
              >
                {paises}
              </select>

              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-globe"></i>
              </span>
            </div>

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
                onChange={errorEmpty}
              />
              <span className="fieldRequiered">*</span>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            <p
              className={`error-message ${
                emailError ? "error-message-block" : "error-message-hidden"
              }`}
            >
              {emailError}
            </p>

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
                onChange={errorEmpty}
              />
              <span className="fieldRequiered">*</span>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <p
              className={`error-message ${
                passwordError ? "error-message-block" : "error-message-hidden"
              }`}
            >
              {`Password is required (at least one uppercase, lowercase and symbol)`}
            </p>

            <div className="container-login100-form-btn">
              <button
                type="submit"
                className="login100-form-btn"
                onClick={handlePrevent}
              >
                Sign Up
              </button>
            </div>

            <div className="btn-google">
              <GoogleLogin
                text="signup_with"
                onSuccess={signUpGoogle}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>

            <div className="text-center p-t-136">
              <Link to={`/login`} className="txt2">
                Back to login
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

export default SignUp;
