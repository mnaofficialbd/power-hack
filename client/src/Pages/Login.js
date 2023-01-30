import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="mx-auto w-full max-w-lg mt-5">
			<div className="card card-side bg-base-100 shadow-xl">
				<figure><img src="https://i.ibb.co/Yy1kT9w/login-page-4468581-3783954.webp" alt="Movie" /></figure>
				<div className="card-body">
					<h2 className="card-title">Please Log In</h2>
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="input input-bordered w-full max-w-xs mt-2"
							onChange={handleChange}
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className="input input-bordered w-full max-w-xs mt-4"
							onChange={handleChange}
							value={data.password}
							required
						/>
						{error && <div>{error}</div>}
						<button type="submit" className="btn w-full max-w-xs mt-4">
							Login
						</button>
					</form>
					<div className="text-sm">
						{/* <p className="border">New here?</p> */}
						New here? <Link to="/registration" className="ml-1 text-primary">Please Registration</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
