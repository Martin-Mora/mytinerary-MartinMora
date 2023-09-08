import "../SignUp/signUp.css";
import "../Login/login.css";
import logoSignUp from "../../../img/logoLogin.svg";
import { Link } from "react-router-dom";
import country from "../../../data/dataCountry.json";
import { GoogleLogin, GoogleOAuthProvider,useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";


const SignUp = () => {
  let paises = country.map((pais) => (
    <option key={pais.numericCode} value={pais.name}>
      {pais.name}
    </option>
  ));
  
  // let flag = country.filter((pais)=>console.log(pais.flag))
  // let code = country.filter((pais)=>console.log(pais.numericCode))
 


  paises.unshift(
    <option  disabled key="default" value="">
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
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="lastName"
                placeholder="last name"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="avatar"
                placeholder="photo url"
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
              <select className="input100 countrySelect" name="pais" defaultValue="">
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
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Sign Up
              </button>
            </div>

            <div className="text-center p-t-12">
              {/* <span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a> */}
            </div>

            <GoogleOAuthProvider clientId="186116319104-f0cm7g0hc8srne3j2dr0ttvt7152hvr6.apps.googleusercontent.com">
              <GoogleLogin 
                onSuccess={tokenResponse => {
                  // console.log(credentialResponse);
                  const inofUser = jwtDecode(tokenResponse.access_token)
                  console.log(inofUser);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>

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
