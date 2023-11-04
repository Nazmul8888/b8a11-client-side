import { NavLink } from "react-router-dom";


const NavBar = () => {
    const navLinks = <>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li><a>Nazmul</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Nazmul</a></li> */}
                        {navLinks}
                        </ul>
                    </div>
                    <div className="w-10">
                    <img src= "https://i.ibb.co/2gbgYpy/success-coach-logo-elegant-concept-of-success-marketing-logo-png-268618.jpg" alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li><a>Home</a></li> */}
                        <li tabIndex={0}>
                            <details>
                                <summary>Course</summary>
                                <ul className="p-2">
                                    <li><a>EASY</a></li>
                                    <li><a>MEDIUM</a></li>
                                    <li><a>HARD</a></li>
                                </ul>
                            </details>
                        </li>
                        {/* <li><a>Login</a></li>
                        <li><a>Register</a></li> */}
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;