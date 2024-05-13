import { useState } from 'react';
import img from '../assets/img/image/762887_Job1-01.jpg'; // Importing image
import DatePicker from "react-datepicker";
import { toast } from 'react-hot-toast';
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from '../Components/UseAuth/UseAuth';
import axios from 'axios';

const AddJobs = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = UseAuth()

    const handleJobPost = async (e) => {
        e.preventDefault();
        const form = e.target;

        const Picture_URL = form.elements.Picture_URL.value;
        const job_title = form.elements.job_title.value;
        const email = form.elements.email.value;
        const category = form.elements.category.value;
        const Salary_range = form.elements.Salary_range.value;
        const Applicants_Number = form.elements.Applicants_Number.value;
        const description = form.elements.description.value;

        const startDateValue = startDate;

        if (!job_title || !Salary_range) {
            if (!job_title) toast.error('Please add job title');
            if (!Salary_range) toast.error('Please add salary range');
            return;
        }

        const JobPost = {
            Picture_URL,
            job_title,
            email,
            category,
            Salary_range,
            Applicants_Number,
            description,
            startDate: startDateValue
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, JobPost);
            toast.success('Job added successfully');
            form.reset(); 
            setStartDate(new Date()); 
        } catch (err) {
            console.log(err);
            toast.error('Failed to add job');
        }
    };

    return (
        <div className='pt-10 md:pt-20 flex justify-center items-center flex-grow my-12 mb-0 pb-8 bg-cover' style={{ backgroundImage: `url(${img})` }}>
            <section className='p-2 md:p-6 mx-auto bg-neutral text-white rounded-md shadow-md'>
                <h2 className='text-lg font-semibold text-white capitalize'>
                    Post a Job
                </h2>
                <form onSubmit={handleJobPost}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-white' htmlFor='job_title'>
                                Picture URL
                            </label>
                            <input
                                id='Picture_URL'
                                placeholder='Picture URL'
                                name='Picture_URL'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-white' htmlFor='job_title'>
                                Job Title
                            </label>
                            <input
                                id='job_title'
                                placeholder='job title'
                                name='job_title'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-white' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                defaultValue={user.email}
                                disabled
                                className='block w-full px-8 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white'>Deadline</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy-MM-dd"
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white' htmlFor='category'>
                                Job Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md bg-slate-700'
                            >
                                <option value='On-Site Job'>On-Site Job</option>
                                <option value='Remote Job'>Remote Job</option>
                                <option value='Hybrid'>Hybrid</option>
                                <option value='Part-Time'>Part-Time</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-white' htmlFor='Salary_range'>
                                Salary range
                            </label>
                            <input
                                id='Salary_range'
                                name='Salary_range'
                                placeholder='Salary range'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-white' htmlFor='Applicants_Number'>
                                Job Applicants Number
                            </label>
                            <input
                                id='Applicants_Number'
                                defaultValue={0}
                                name='Applicants_Number'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-white' htmlFor='description'>
                            Job Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            name='description'
                            id='description'
                            placeholder='Job Description'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddJobs;
