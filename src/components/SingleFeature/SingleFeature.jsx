import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
const SingleFeature = ({ feature, handleReviewDetails }) => {
    const { CompanyLogo, Jobtitle, Remote, Onsite, Location, Salary, CompanyName } = feature
    return (
        <div className='border border-purple-500 p-10  bg-slate-200 rounded-md'>
            <div>
                <img className='w-28' src={CompanyLogo} alt="" />
                <p className='mt-2'>{Jobtitle}</p>
                <p>{CompanyName}</p>
                <div className='flex gap-4 mt-2'>
                    <p className='border border-red-200  bg-red-600 rounded-md p-2'>{Remote}</p>
                    <p className='border border-red-200  bg-green-600 rounded-md p-2'>{Onsite}</p>
                </div>
                <div className='flex gap-4 mt-4'>

                    <MapPinIcon className="h-4 w-4 mt-1" /><p> {Location}</p>
                    <CurrencyDollarIcon className="h-4 w-4 mt-1" /> <p>{Salary}</p>
                </div>
            </div>
            <button onClick={() => handleReviewDetails(feature)} className='btn btn-primary mt-6'>View Details </button>

        </div>
    );
};

export default SingleFeature;