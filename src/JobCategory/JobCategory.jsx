import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='md:mt-32'>
            <div className='text-center'>
                <h1 className='text-5xl'>Job Category List</h1>
                <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-4 mt-8 md:ml-72 ml-2 mr-2 md:mr-72 gap-4'>
                {
                    categories.map(categorie => <SingleCategory
                        key={categorie.id}
                        categorie={categorie}>

                    </SingleCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;