import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthProvider/Authprovider';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { signIn, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const [error, setError] = useState('');

    const handleLogin = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                toast.success('logged in successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
        reset();
    }

    const googleSignInHandler = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="form-control w-full max-w-xs  border-double border border-slate-100 shadow-2xl p-10 rounded-lg">
                <span className="label-text font-bold">Email</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="email" placeholder="Email" {...register("email", { required: "Email Address is required", pattern: /^\S+@\S+$/i })} />
                {errors.Email && <span role="alert" className='text-red-500'>{errors.Email?.message}</span>}

                <span className="label-text font-bold mt-6">Password</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
                {errors.Password && <span role="alert" className='text-red-500'>{errors.Password?.message}</span>}

                <span role="alert" className='text-red-500'>{error}</span>

                <span className="label-text mb-2 ">Forget password?</span>

                <input type="submit" value="Login" className="btn rounded-lg w-full" />
                <span className="label-text mt-2">Don't have an account? <Link className='text-[#ff6507]' to={'/signup'}>Sign up</Link></span>

                <div className="divider">or</div>

                <button onClick={googleSignInHandler} className="btn rounded-lg w-full">GOOGLE</button>

            </form>

        </div>
    );
};

export default Login;