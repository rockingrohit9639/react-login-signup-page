import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/popper.js";
import "./Main.css";
import { NavLink } from "react-router-dom"

const Login = () =>
{
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");

    const submitForm = (e) =>
    { 
        e.preventDefault();
        alert(`Email : ${ email } \n Password : ${ password }`);
        changeEmail("");
        changePassword("");
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 center_div d-flex align-items-center">
                        <div className="info">
                            <h1 className="hero_heading"> Welcome </h1>
                            <p className="hero_text"> Let yourself grow with <strong> Rohit Saini </strong></p>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
                        </div>
                    </div>
                    <div className="col-md-6 center_div d-flex flex-column">
                        <div className="d-flex justify-content-end">
                            <div className="links">
                                <NavLink exact={ true } to="/" activeClassName="active" className="Btn">Login</NavLink>
                                <NavLink exact={ true } to="/signup" className="Btn">SignUp</NavLink>
                            </div>
                        </div>
                        <div className="login_form">
                            <div className="input_fields">
                                <form onSubmit={submitForm}>
                                    <input type="email" value={email} onChange={(e)=> changeEmail(e.target.value)} className="inputs" placeholder="Enter Your Email" required /> <br />
                                    <input type="password" value={password} onChange={(e) => changePassword(e.target.value)} className="inputs" placeholder="Enter Your Password" required /> <br />
                                    <button type="submit" className="btn-block login_btn">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;