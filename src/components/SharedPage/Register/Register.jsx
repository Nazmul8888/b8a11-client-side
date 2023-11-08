import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Routes/Provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handelRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;


        // create user

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })

            .catch(error => {
                console.log(error)
            })
        console.log(name, email, photo, password)
    }
    return (
      
        <div className="">
            <h1 className='text-5xl font-bold text-pink-700 text-center'>Register Now !</h1>

            <form onSubmit={handelRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Photo URL</a>
                    </label>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Have a Account? please<Link className="text-green-600 font-bold" to='/login'> Login
            </Link>
            </p>
        </div>

    );
};

export default Register;