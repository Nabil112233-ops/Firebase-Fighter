import React, { useContext } from 'react';
import MyContainer from '../MyContainer';
import logo from '../../assets/firebase-logo.png'
import MyLink from '../MyLink';
import { Link } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {

    const result = useContext(AuthContext);
    console.log(result);

    return (
        <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
            <MyContainer className="flex items-center justify-between">
                <figure>
                    <img src={logo} className="w-[55px]" />
                </figure>
                <ul className="flex items-center gap-2">
                    <li>
                        <MyLink to={"/"}>Home</MyLink>
                    </li>
                    <li>
                        <MyLink to={"/about"}>About</MyLink>
                    </li>
                    <li>
                        <MyLink to={"/profile"}>Profile</MyLink>
                    </li>
                </ul>

                <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                    <Link to={"/signin"}>Sign in</Link>
                </button>
            </MyContainer>
        </div>
    );
};

export default Navbar;