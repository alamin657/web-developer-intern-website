import React from 'react';
const Header = () => {
    return (
        <div className='grid grid-cols-2 mt-36'>
            <div className='ml-72'>
                <h1 className='text-7xl'>One Step Closer To Your <br />
                    <p className="text-cyan-700">Dream Job</p></h1>
                <p className='mt-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <p className='btn btn-primary mt-8'>Get Started</p>
            </div>
            <div className='ml-36 mt-4' >
                <img className='w-6/12 h-96' src="https://bareillycollege.org/wp-content/uploads/2022/07/elon-musk-773x1024.jpg" alt="" />
            </div>
        </div>
    );
};

export default Header;