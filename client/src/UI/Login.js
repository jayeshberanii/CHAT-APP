import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../API/api";


function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')


    const onLoginFormSubmitHandler=async(e)=>{
        e.preventDefault()
        const obj={email:Email,password:Password}   
        loginUser(obj)    
    }
    return (
        <div className="card login-form border rounded d-flex align-items-center justify-content-center">
            <div>
                <form className="p-3 bg-light" onSubmit={(e)=>onLoginFormSubmitHandler(e)}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={Email} className="form-control" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={Password} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-warning">Login</button>
                    <div className="mt-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Not user <Link to='/Register'><p className="text-primary">Register user</p></Link></label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;