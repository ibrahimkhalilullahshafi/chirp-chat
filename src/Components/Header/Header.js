import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from '../Context/AuthProvider/Authprovider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    console.log(user)

    const menuItem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li><Link to="/message">Message</Link></li>
        <li><Link to="/about">About</Link></li>
        {user?.uid ?
            <li><button onClick={handleLogOut}>Log out</button></li> :
            <li><Link to="/login">Login</Link></li>
        }
        {user?.photoURL ?
            <img className="rounded-full h-9 w-9 ml-5 mt-2"
                src={user?.photoURL} alt=""></img> : <FcBusinessman className='text-4xl items-center ml-2'></FcBusinessman>}
    </React.Fragment >
    return (
        <section>
            <div className="navbar bg-base-100 justify-between p-0">
                <Link to="/"><img className="h-20" src={logo} alt="" /></Link>
                <div className="navbar-end">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default Header;