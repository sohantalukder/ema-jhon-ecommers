import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="logIn-form">
			<div>
				<h2>Create Account</h2>
				<form onSubmit="">
					<input type="email" name="" id="" placeholder="Your Email" />
					<br />
					<br />
					<input type="password" name="" id="" placeholder="Your Password" />
					<br />
					<br />
					<input
						type="password"
						name=""
						id=""
						placeholder="Re-enter Password"
					/>
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
				<p>
					Already have an account? <Link to="/login">Log In</Link>
				</p>
				<div>------------------ or ----------------</div>
				<button className="order">Google Sign In</button>
			</div>
		</div>
	);
};

export default Register;
