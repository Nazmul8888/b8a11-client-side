import { useContext } from 'react';
import { BsGoogle  } from 'react-icons/bs';
import { AuthContext } from '../../../Routes/Provider/AuthProvider';
import { Link } from "react-router-dom";

const Login = () => {

    const {signIn,signWithGoogle} = useContext(AuthContext);


    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handelGoogleSignIn = () => {
        signWithGoogle()
            .then(result => {
                console.log(result.user)
            })

            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className=" flex justify-center space-x-4 items-center py-5 ">
                            <p className=" text-center">Dont have an Account? please<Link className="text-blue-600" to='/register'> Register
                            </Link>

                            </p>
                            <div onClick={handelGoogleSignIn} role="button" className="flex justify-center text-green-500">
                                < BsGoogle size={30}></BsGoogle>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         </div>
      );
          
};

            export default Login;