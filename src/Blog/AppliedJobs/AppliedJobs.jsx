import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApplyJob from '../../components/singleApplyJob/SingleApplyJob';

const AppliedJobs = () => {
    const { products } = useLoaderData()
    // console.log(products)
    const handleReviewDetails = feature => {
        navigate(`/details/${feature.id}`)
    }
    return (
        <div className='ml-72 mt-48 gap-4 mr-72' >

            {
                products.map(product => <SingleApplyJob
                    key={product.id}
                    product={product}
                    handleReviewDetails={handleReviewDetails}
                ></SingleApplyJob>)
            }

        </div>
    );
};

export default AppliedJobs;