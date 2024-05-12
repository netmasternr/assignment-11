/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TapList = ({ jobs }) => {



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
                            jobs.filter(j => j.jobCategory==='On-Site Job').map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TapList;