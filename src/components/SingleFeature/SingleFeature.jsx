import React from 'react';
const SingleFeature = ({ feature, handleReviewDetails }) => {
    const { CompanyLogo, Jobtitle, Remote, Onsite, Location, Salary, CompanyName } = feature
    return (
        <div className='border border-inherit p-10'>
            <div>
                <img className='w-28' src={CompanyLogo} alt="" />
                <p>{Jobtitle}</p>
                <p>{CompanyName}</p>
                <div className='flex gap-4'>
                    <p>{Remote}</p>
                    <p>{Onsite}</p>
                </div>
                <div className='flex gap-4'>
                    <p>{Location}</p>
                    <p>{Salary}</p>
                </div>
            </div>
            <button onClick={() => handleReviewDetails(feature)} className='btn btn-primary mt-6'>View Details </button>

        </div>
    );
};

export default SingleFeature;