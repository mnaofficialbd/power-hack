import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost5000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
				<figure>
					<img
						src="https://i.ibb.co/dK4hBS7/app-login-security-4897468-4077880.webp"
						alt="Movie"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Create Your Account</h2>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Full Name"
							name="name"
							onChange={handleChange}
							className="input input-bordered w-full max-w-xs mt-2"
							value={data.name}
							required
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							className="input input-bordered w-full max-w-xs mt-4"
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							className="input input-bordered w-full max-w-xs mt-4"
							value={data.password}
							required
						/>
						{error && <div>{error}</div>}
						<button type="submit" className="btn w-full max-w-xs mt-4">
							Register
						</button>
					</form>
					<div className="text-sm">
						If you have account?<Link to="/login" className="ml-1 text-primary">Login</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
