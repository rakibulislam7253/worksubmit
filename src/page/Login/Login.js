import React, { useContext, useState } from 'react';

import { Link, useNavigate, } from 'react-router-dom';
import image from '../../assets/istockphoto-1321277096-612x612 1.png';
import logo from '../../assets/logo.png'
import '../style.css'
const Login = () => {

    const navigate = useNavigate()
    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const currentUser = {
            email,
            password,
        }
        console.log(currentUser);
        //get jwt
        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json '
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('genius-token', data.access_token);
            })
        navigate('/attendence')

            .catch(err => console.error(err));


    }
    return (
        <div>
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row">


                    <img src={image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <div className="card flex-shrink-0  shadow-2xl  py-20">
                            <h1 className="text-5xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin} className="card-body w-96 h-72">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    {/* <p>{error}</p> */}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="w-20 btn button-color" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center mt-10'>Don`t have an account` <Link className='text-orange-600 font-bold' to="/">SIGNUP HERE!</Link> </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


};

export default Login;


