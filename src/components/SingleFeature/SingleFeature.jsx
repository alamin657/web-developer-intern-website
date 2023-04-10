import React from 'react';

const SingleFeature = ({ feature }) => {
    const { CompanyLogo, Jobtitle, Remote, Onsite, Location, Salary, CompanyName } = feature
    return (
        <div className=' border border-inherit  p-10' >
            <img className='w-28 ' src={CompanyLogo} alt="" />
            <h1>{Jobtitle}</h1>
            <p>{CompanyName}</p>
            <div className='flex gap-4 '>
                <p className='border border-emerald-200 p-2'>{Remote}</p>
                <p className='border border-emerald-200 p-2'>{Onsite}</p>
            </div>
            <div className='flex gap-6'>
                <p>{Location}</p>
                <p>{Salary}</p>
            </div>
            <button className='btn btn-primary mt-6'>View Details</button>
        </div>
    );
};

export default SingleFeature;