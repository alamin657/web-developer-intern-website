import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
const SingleApplyJob = ({ product }) => {
    const { id, Jobtitle, CompanyLogo, CompanyName, Remote, Onsite, Location, Salary } = product
    return (
        <div className='flex gap-4 border border-purple-500 m-2 bg-slate-300'>
            <div className='w-36 h-12 p-4 rounded-md mt-2'>
                <img src={CompanyLogo} alt="" />
            </div>
            <div className='mt-6'>
                <p>{Jobtitle}</p>
                <p>{CompanyName}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-2 mt-2'>
                        <p className='border border-blue-400 p-2'>{Remote}</p>
                        <p className='border border-blue-400 p-2'>{Onsite}</p>
                    </div>

                    <div>
                        <Link to={`../details/${id}`}><button className=' btn btn-primary'>View Details</button></Link>
                    </div>

                </div>
                <div className='flex gap-2 p-2'>

                    <MapPinIcon className="h-4 w-4 mt-1" /> <p>{Location}</p>
                    <CurrencyDollarIcon className="h-4 w-4 mt-1" /> <p>{Salary}</p>
                </div>

            </div>

        </div>
    );
};

export default SingleApplyJob;