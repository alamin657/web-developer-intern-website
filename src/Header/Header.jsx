import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">


                </div>
                <a className=" text-xl ml-72">Web Developer Intern</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Statistics</a></li>
                    <li>
                        <a>
                            Applied Jobs
                        </a>

                    </li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary mr-72">Star Applying</a>
            </div>
        </div>
    );
};

export default Header;