import React from 'react';

const JobDreams = () => {
    return (
        <div className='grid md:grid-cols-2 gap-28 bg-gray-400'>
            <div className='ml-72 mt-12'>
                <h1 className='text-7xl'>One Step Closer To Your <br /> <span className='text-orange-300'>Dream Job</span></h1>
                <p className='mt-14'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn btn-primary mt-8'>Get Started</button>
            </div>
            <div className='w-6/12 h-96 mr-40 mt-10'>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" /> */}
                {/* <img className='bg-gray-400' src="https://hairstylecamp.com/wp-content/uploads/black-gentleman-haircut.jpg.webp" alt="" /> */}

            </div>

        </div>

    );
};

export default JobDreams;