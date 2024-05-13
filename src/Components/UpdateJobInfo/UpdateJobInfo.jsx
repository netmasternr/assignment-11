import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import UseAuth from '../UseAuth/UseAuth';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateJobInfo = () => {
    const job = useLoaderData();
    const { Applicants_Number, _id, description, job_title, category, Picture_URL, Salary_range, startDate, email } = job;

    const navigate = useNavigate();
    const { user } = UseAuth();

    const [startDated, setStartDate] = useState(new Date(startDate));

    const handleJobPost = async e => {
        e.preventDefault();
        const form = e.target;
        const Picture_URL = form.elements.Picture_URL.value;
        const job_title = form.elements.job_title.value;
        const email = form.elements.email.value;
        const UserName = user.displayName;
        const category = form.elements.category.value;
        const Salary_range = form.elements.Salary_range.value;
        const Applicants_Number = form.elements.Applicants_Number.value;
        const description = form.elements.description.value;
        const startDatesValue = startDated;

        const JobPost = {
            Picture_URL,
            job_title,
            email,
            category,
            Salary_range,
            Applicants_Number,
            description,
            UserName,
            startDate: startDatesValue
        };

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`, JobPost);
            if (data.modifiedCount === 1) {
                toast.success('Job updated successfully');
                navigate('/My-Jobs');
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };

    return (
        <div className='pt-10 md:pt-20 flex justify-center items-center flex-grow my-12 mb-0 pb-8 bg-cover'>
            <section className='p-2 md:p-6 mx-auto bg-neutral text-white rounded-md shadow-md'>
                <h2 className='text-lg font-semibold text-white capitalize'>
                    Update Your Job Post
                </h2>
                <form onSubmit={handleJobPost}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-white' htmlFor='job_title'>
                                Picture URL
                            </label>
                            <input
                                id='Picture_URL'
                                defaultValue={Picture_URL}
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
                                defaultValue={job_title}
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
                                selected={startDated}
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
                                defaultValue={category}
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
                                defaultValue={Salary_range}
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
                                defaultValue={Applicants_Number}
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
                            defaultValue={description}
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

export default UpdateJobInfo;
