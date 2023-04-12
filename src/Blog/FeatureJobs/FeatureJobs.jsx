import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleFeature from '../../components/SingleFeature/SingleFeature';
import { useNavigate } from 'react-router-dom';

const FeatureJobs = () => {
    const navigate = useNavigate();
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    const handleReviewDetails = feature => {
        navigate(`/details/${feature.id}`)
    }
    const [dataSlice, setdataSlice] = useState(false);
    // console.log(dataSlice);
    return (
        <div>
            <h1 className='text-center mt-32 text-5xl'>Featured Jobs</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2  gap-6 mt-8 md:ml-72 mr-72'>
                {
                    features.slice(0, dataSlice ? 6 : 4).map(feature => <SingleFeature
                        key={feature.id}
                        feature={feature}
                        handleReviewDetails={handleReviewDetails}
                    ></SingleFeature>)

                }

            </div>
            <div onClick={() => setdataSlice(true)}>
                <button className='btn btn-primary ml-72 mt-10 mr-72'>See All Jobs</button>
            </div>

        </div >
    );
};

export default FeatureJobs;