import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApplyJob from '../../components/singleApplyJob/SingleApplyJob';

const AppliedJobs = () => {
    const { products } = useLoaderData()
    console.log(products)

    return (
        <div className='ml-72 mt-48 gap-4'>

            {
                products.map(product => <SingleApplyJob
                    key={product.id}
                    product={product}></SingleApplyJob>)
            }

        </div>
    );
};

export default AppliedJobs;