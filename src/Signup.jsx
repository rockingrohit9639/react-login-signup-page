import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/popper.js";
import "./Main.css";
import { NavLink } from "react-router-dom"

const Signup = () =>
{
    const [data, changeData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    const inputData = (e) =>
    { 
        const { name, value } = e.target;
        changeData((prevData) =>
        { 
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    const submitData = (e) =>
    { 
        e.preventDefault();
        alert(`${ data.name } ${ data.email } ${ data.mobile } ${ data.password }`);
        changeData({
            name: "",
            mobile: "",
            email: "",
            password: "",
        });
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 center_div d-flex align-items-center">
                        <div className="info">
                            <h1 className="hero_heading"> Register Here </h1>
                            <p className="hero_text"> Let yourself grow with <strong> Rohit Saini </strong></p>
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
                                <form onSubmit={ submitData }>
                                    <input type="text" name="name" value={data.name} onChange={inputData} className="inputs" placeholder="Enter Your Full Name" required /> <br />
                                    <input type="mobile" name="mobile" value={data.mobile} onChange={inputData} className="inputs" placeholder="Enter Your Mobile Number" required /> <br />
                                    <input type="email" name="email" value={data.email} onChange={inputData} className="inputs" placeholder="Enter Your Email" required /> <br />
                                    <input type="passsword" name="password" value={data.password} onChange={inputData} className="inputs" placeholder="Enter Your Password" required /> <br />
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

export default Signup;