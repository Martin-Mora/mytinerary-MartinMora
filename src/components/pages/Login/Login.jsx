import  '../Login/login.css'
import '../Login/utilities/css/util.css'
import '../Login/utilities/fonts/font-awesome-4.7.0/css/font-awesome.css'
import '../Login/utilities/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import logoLogin from '../../../img/logoLogin.svg'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={logoLogin} alt="IMG" />
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						My tinerary flight
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button type='submit' className="login100-form-btn">
							Sign in
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

					<div className="text-center p-t-136">
						<Link to={`/signUp`} className="txt2">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Login