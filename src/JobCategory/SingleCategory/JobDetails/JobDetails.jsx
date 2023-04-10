import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [details, setDetails] = useState([]);
    const dynamic = useParams();
    const dynamicId = dynamic.jobDetailsId;
    const data = useLoaderData();
    const detailsData = data.find(dt => dt.id == dynamicId);
    setDetails(detailsData);
    console.log(details);
    return (
        <div>
            <h1>This is JobDetails</h1>

        </div>
    );
};

export default JobDetails;