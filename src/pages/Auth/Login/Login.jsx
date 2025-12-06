import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register } = useForm();





    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email')} className="input" placeholder="Email" />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password')} className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;