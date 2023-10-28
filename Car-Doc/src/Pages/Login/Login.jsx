import React, { useContext } from 'react';

import loginLogo from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogIn = e=>{
        e.preventDefault();

        const form = e.target;
     
        const email = form.email.value;
        const password = form.currentPassword.value;
       
        console.log(email, password);
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
    })
    .catch(error=>console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="text-center lg:text-left mr-6">

                    <img src={loginLogo} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='currentPassword' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Car Doctor? <Link to='/signup' className='text-blue-800 font-semibold'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;