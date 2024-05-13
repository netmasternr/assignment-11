import { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../Components/UseAuth/UseAuth';

const MyJobs = () => {
    const { user } = UseAuth()
    const [items, setItems] = useState([]);
    // console.log(items)

    useEffect(() => {
        const getDta = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/myJobs/${user?.email}`)
            setItems(data)

        }
        getDta()
    }, [user])

    return (
        <div className="pt-10 md:pt-16 mb-3">
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>My Jobs</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {items.length}
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Title</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Deadline</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>salary</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Category
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Update
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            items.map((item, index) => (
                                                <tr key={index}>

                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {item.job_title}
                                                    </td>

                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {new Date(item.startDate).toLocaleDateString()}
                                                    </td>

                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {item.Salary_range}
                                                    </td>
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p
                                                                className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60                text-xs'
                                                            >
                                                                {item.category}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    {/* update and delete button */}
                                                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>

                                                        <button className="btn">Update</button>
                                                    </td>

                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <button className="btn">Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyJobs;