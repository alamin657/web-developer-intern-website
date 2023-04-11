import React from 'react';

const SingleApplyJob = ({ feature, product, handleReviewDetails }) => {
    const { Jobtitle, CompanyLogo, CompanyName, Remote, Onsite, Location, Salary } = product
    return (
        <div className='flex gap-4 border border-inherit m-2'>
            <div className='w-60'>
                <img src={CompanyLogo} alt="" />
            </div>
            <div className='mt-6'>
                <p>{Jobtitle}</p>
                <p>{CompanyName}</p>
                <div className=' flex justify-between'>
                    <div className='flex gap-2'>
                        <p className='border border-blue-400 p-1'>{Remote}</p>
                        <p className='border border-blue-400 p-1'>{Onsite}</p>
                    </div>

                    <div>
                        <button onClick={() => handleReviewDetails(feature)} className='btn btn-primary'>View Details</button>
                    </div>

                </div>
                <div className='flex gap-2 '>
                    <p>{Location}</p>
                    <p>{Salary}</p>

                </div>

            </div>

        </div>
    );
};

export default SingleApplyJob;