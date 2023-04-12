import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApplyJob from '../../components/singleApplyJob/SingleApplyJob';
import { getShoppingCart } from '../../utilities/fakedb';
const AppliedJobs = () => {
    const { products } = useLoaderData()
    const [jobs, setJobs] = useState(products)

    const handlefilter = (site) => {
        const data = products.filter(product => product.Remote == site);
        setJobs(data);

    }
    const storedCart = getShoppingCart();


    console.log(storedCart)

    return (
        <div>
            <h1 className='text-center text-5xl mt-14 '>Applied Jobs</h1>
            <ul className="menu menu-horizontal px-1 ml-72 bg-purple-600 rounded-md ">
                <li tabIndex={0}>
                    <a >
                        Filter By
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </a>
                    <ul className="p-2 gap-2">
                        <li onClick={() => handlefilter('onsite')} className='bg-orange-200 rounded-md'><a>Onsite</a></li>
                        <li onClick={() => handlefilter('Remote')} className='bg-blue-200 rounded-md'><a>Remote</a></li>
                    </ul>
                </li>

            </ul>

            <div className='ml-72 mt-48 gap-4 mr-72' >



                {
                    storedCart.map(product => <SingleApplyJob
                        key={product.id}
                        product={product}
                    ></SingleApplyJob>)
                }

            </div>
        </div>
    );
};

export default AppliedJobs;