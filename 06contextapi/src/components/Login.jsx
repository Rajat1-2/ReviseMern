import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
	const [uname, setuname] = useState('');
	const [pass, setpass] = useState('');
    const{setuser}=useContext(UserContext);
    // setuser mujhe Usercontext se mil rha H  

// data bhjna h ese
	const handlesubmit = (e) => {
        // e.preventDefault()
        setuser({uname,pass});

    };
	return (
		<div>
			<h2>Login</h2>
			<input
				type="Text"
				value={uname}
				onChange={e => {
					setuname(e.target.value);
				}}
				placeholder="username"
			/>

			<input
				type="Text"
				value={pass}
				onChange={e => {
					setpass(e.target.value);
				}}
				placeholder="password"
			/>
			<button onClick={handlesubmit}>Login Here</button>
		</div>
	);
}

export default Login;
