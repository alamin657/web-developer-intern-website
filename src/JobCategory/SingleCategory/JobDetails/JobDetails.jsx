
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <h1 className='text-center text-5xl mt-4'>Job Details</h1>
            <div className='grid grid-cols-2 ml-72 mr-72 gap-8 mt-16'>
                <div>
                    <p><span className='font-semibold'>Job Description</span>:{data.JobDescription}</p>
                    <p><span className='font-semibold'>Job Responsibility:</span>{data.JobResponsibility}</p>
                    <p><span className='font-semibold'>Educational Requirements:</span><br />
                        {data.EducationalRequirements}</p>
                    <h1><span className='font-semibold'>Experiences:</span><br />
                        {data.Experiences}</h1>
                </div>
                <div>
                    <h1 className='text-3xl'>Job Details</h1>
                    <p className='mt-3'><span className='font-semibold'>Salary: </span>{data.Salary}</p>
                    <p><span className='font-semibold'>Job Title: </span>{data.Jobtitle}</p>
                    <h1 className='font-semibold'>Contact Information:</h1><br />
                    <h2><span className='font-semibold'>Phone</span>:{data.Phone}</h2>
                    <p><span className='font-semibold'>Email:</span>{data.Email}</p>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;