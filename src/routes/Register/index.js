import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => (
  <div>
    <h2>Register</h2>
    <p>Already have an account? <Link to="/login">Login instead</Link></p>
    <form>
		<div className="form-group">
			<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
			<div className="cols-sm-10">
				<div className="input-group">
					<span className="input-group-addon"><i className="fa fa-envelope fa-fw" aria-hidden="true"></i></span>
					<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
				</div>
			</div>
		</div>

		<div className="form-group">
			<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
			<div className="cols-sm-10">
				<div className="input-group">
					<span className="input-group-addon"><i className="fa fa-lock fa-fw" aria-hidden="true"></i></span>
					<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
				</div>
			</div>
		</div>

		<div className="form-group">
			<label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
			<div className="cols-sm-10">
				<div className="input-group">
					<span className="input-group-addon"><i className="fa fa-lock fa-fw" aria-hidden="true"></i></span>
					<input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
				</div>
			</div>
		</div>

		<div className="form-group ">
			<button type="button" className="btn btn-primary login-button">Register</button>
		</div>
    </form>
  </div>
)

export default Register;