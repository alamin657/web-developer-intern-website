import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=" flex justify-center items-center gap-2  md:bg-gray-400 bg-gray-400">
            <div className="navbar-start  md:ml-72 ml-4 ">
                <a className="text-xl mt-2 ">EmployNet</a>
            </div>
            <div className="md:navbar-center hidden  md:flex  space-x-4">

                <Link to="/">Home</Link>
                <Link to="/Statistics">Statistics</Link>
                <Link to="/AppliedJobs">AppliedJobs</Link>
                <Link to="/Blog">Blog</Link>
            </div>

            <div className="md:hidden dropdown">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li>  <Link to="/Statistics">Statistics</Link></li>
                    <li> <Link to="/AppliedJobs">AppliedJobs</Link></li>
                    <li> <Link to="/Blog">Blog</Link></li>
                </ul>
            </div>

            <div className='md:navbar-end  md:mr-72 mr-4 mt-2'>
                <a className="btn btn-primary ">Star Applying</a>
            </div>
        </div >
    );
};

export default Header;
