/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TapList = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs)

    useEffect(() => {
        const getDta = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)

        }
        getDta()
    }, [])

    return (
        <div className='pb-8 px-3'>
            <div className='text-center pt-8 px-3 pb-8'>
                <h1 className='text-xl font-bold pb-1'>Browse jobs By Categories</h1>
                <p className='font-semibold'>Three categories available for the time being. They are On-site job, Remote job, Hybrid and Part-time job</p>
            </div>
            <Tabs>
                <div className='flex items-center justify-center font-semibold'>
                    <TabList>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-Time
                        </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>

                        {
                            jobs.filter(j => j.category === 'On-Site Job').map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                        {
                            jobs.filter(j => j.category === 'Remote Job').map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                        {
                            jobs.filter(j => j.category === 'Hybrid').map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                        {
                            jobs.filter(j => j.category === 'Part-Time').map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TapList;