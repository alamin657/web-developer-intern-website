import React from 'react';

const JobDreams = () => {
    return (
        <div className='grid md:grid-cols-2 gap-28 bg-gray-400'>
            <div className='ml-72 mt-12'>
                <h1 className='text-7xl'>One Step Closer To Your <br /> <span className='text-orange-300'>Dream Job</span></h1>
                <p className='mt-14'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <div className='mb-4'>
                    <button className='btn btn-primary mt-8'>Get Started</button>
                </div>
            </div>
            <div className='w-6/12 h-96 mr-40 mt-10'>
                <img src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg" alt="" />
            </div>

        </div>

    );
};

export default JobDreams;