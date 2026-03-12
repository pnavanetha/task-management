import React, { useState } from "react";
import axios from "axios";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e)=>{
e.preventDefault();

try{

const res = await axios.post("http://localhost:5000/login",{
email,
password
});

localStorage.setItem("token",res.data.token);
localStorage.setItem("role",res.data.role);

if(res.data.role === "admin"){
window.location.href="/admin";
}
else if(res.data.role === "employee"){
window.location.href="/employee";
}
else{
window.location.href="/customer";
}

}catch(err){
alert("Login Failed");
}

};

return(

<div style={{width:"300px",margin:"100px auto"}}>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Login</button>

</form>

</div>

);

}

export default Login;