import React from 'react';
import img from '../assets/img/image/762887_Job1-01.jpg'; // Importing image

const AddJobs = () => {
    return (
        <div className='pt-10 md:pt-20 flex justify-center items-center flex-grow my-12 mb-0 pb-8 bg-cover' style={{ backgroundImage: `url(${img})` }}>
            <section className='p-2 md:p-6 mx-auto bg-neutral text-white rounded-md shadow-md'>
                <h2 className='text-lg font-semibold text-white capitalize'>
                    Post a Job
                </h2>
                <form>
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
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white'>Deadline</label>
                            {/* Date Picker Input Field */}
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
                                <option value='Web Development'>on_site</option>
                                <option value='Graphics Design'>remote</option>
                                <option value='Digital Marketing'>part_time</option>
                                <option value='Digital Marketing'>hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-white' htmlFor='min_price'>
                                Salary range
                            </label>
                            <input
                                id='min_price'
                                name='Salary_range'
                                placeholder='Salary range'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-white' htmlFor='max_price'>
                                Job Applicants Number
                            </label>
                            <input
                                id='max_price'
                                defaultValue={0}
                                name='max_price'
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
