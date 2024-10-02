import React, { useState } from 'react'
import LatestJobCard from './LatestJobCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#255691]'>Latest and Top&nbsp;</span>Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    allJobs && allJobs?.slice(0,6).map(job => <Link key={job._id} to={`/description/${job?._id}`}><LatestJobCard job={job}/></Link> )
                }
            </div>
            <div class="developers">
        
                <div>
                    <h2 class="title_of_image">Under the Guidance of</h2>
                </div>
                <div>
                    <img src="/creators.png" alt="Developers and creators image"/>
                </div>
                
            </div>
        </div>

        
    )

}

export default LatestJobs
