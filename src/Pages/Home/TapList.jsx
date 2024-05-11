import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TapList = () => {
    return (
        <div className='mb-8'>
            <div className='text-center mt-8 mb-8'>
                <h1 className='text-xl pb-1'>Browse jobs By Categories</h1>
                <p className=''>Three categories available for the time being. They are On-site job, Remote job, Hybrid and Part-time job</p>
            </div>
            <Tabs>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-Time
                        </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <JobCard/>
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