import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApplyJob from '../../components/singleApplyJob/SingleApplyJob';

const AppliedJobs = () => {
    const { products } = useLoaderData()
    return (
        <div className='ml-72 mt-48 gap-4 mr-72' >
            {/* <ul className="menu menu-horizontal px-1">
                <li tabIndex={0}>
                    <a>
                        Filter By
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </a>
                    <ul className="p-2 bg-base-100">
                        <li><a>Onsite</a></li>
                        <li><a>Remote</a></li>
                    </ul>
                </li>

            </ul> */}

            {
                products.map(product => <SingleApplyJob
                    key={product.id}
                    product={product}
                ></SingleApplyJob>)
            }

        </div>
    );
};

export default AppliedJobs;