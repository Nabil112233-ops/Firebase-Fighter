import React, { useContext } from 'react';
import MyContainer from '../MyContainer';
import logo from '../../assets/firebase-logo.png'
import MyLink from '../MyLink';
import { Link } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, setUser, singOutFunc, loading } = useContext(AuthContext);
    console.log(user);

    const handleSignout = () => {
        singOutFunc()
            .then(res => {
                console.log(res)
                setUser(null)
                toast.success('signout succesfully')
            }).catch(e => {
                toast.error(e.message)
            })
    }
    console.log(loading)

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
                    {user && <li>
                        <MyLink to={"/profile"}>Profile</MyLink>
                    </li>}
                </ul>

                {loading? ('Loading...') : user ? (
                    <div>
                        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                        {/* For TSX uncomment the commented types below */}
                        <button popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                            <img
                                src={user?.photoURL || "https://via.placeholder.com/88"}
                                className="h-10 w-10 rounded-full mx-auto"
                                alt=""
                            />
                        </button>
                        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>

                        <div className="text-center space-y-3">

                            <h2 className="text-sm font-medium">{user.displayName}</h2>
                            <button onClick={handleSignout} className="my-btn px-3">
                                Sign Out
                            </button>
                        </div>
                        </ul>
                    </div>
                ) : (
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                        <Link to={"/signin"}>Sign in</Link>
                    </button>
                )
                }
            </MyContainer >
        </div >
    );
};

export default Navbar;