import React from 'react';

const SingleCategory = ({ categorie }) => {
    const { categorylogo, categoryname, jobsavailable } = categorie
    return (
        <div className='border border-inherit p-4 bg-slate-400 rounded-md'>
            <img className='w-20 rounded-md' src={categorylogo} alt="" />
            <div className='mt-8'>
                <p>{categoryname}</p>
                <p>{jobsavailable}</p>
            </div>

        </div>
    );
};

export default SingleCategory;