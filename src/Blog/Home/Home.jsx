import React from 'react';
import JobDreams from '../JobDreams/JobDreams';
import JobCategory from '../../JobCategory/JobCategory';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <JobDreams></JobDreams>
            <JobCategory></JobCategory>
            <FeatureJobs></FeatureJobs>

        </div>
    );
};

export default Home;