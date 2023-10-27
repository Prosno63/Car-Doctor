import React, { useContext } from 'react';
import loginLogo from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.CurrentPassword.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="text-center lg:text-left mr-6">

                    <img src={loginLogo} alt="" />     
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold text-center">SignUp Now!</h1>
                        <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='username' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" name='CurrentPassword' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        </form>
                    </div>
                    <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-800 font-semibold'>SignIn</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;