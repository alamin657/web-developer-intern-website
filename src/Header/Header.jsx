import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar  md:mt-14 bg-gray-400">
            <div className="navbar-start md:ml-72">
                <a className="text-xl">EmployNet</a>
            </div>
            <div className="md:navbar-center md:hidden lg:flex  space-x-4">
                <Link to="/">Home</Link>
                <Link to="/Statistics">Statistics</Link>
                <Link to="/AppliedJobs">AppliedJobs</Link>
                <Link to="/Blog">Blog</Link>

            </div>
            <div className="navbar-end md:mr-72">
                <a className="btn btn-primary">Star Applying</a>
            </div>
        </div>
    );
};

export default Header;