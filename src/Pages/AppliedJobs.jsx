import { useEffect, useState } from "react";
import UseAuth from "../Components/UseAuth/UseAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const AppliedJobs = () => {

    const { user } = UseAuth()
    const [items, setItems] = useState([])
    console.log(items)


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/apJobs/${user.email}`)
            setItems(data)
        }
        getData()

    }, [user])


    return (
        <div className="pt-10 md:pt-20 ">
            <div>
                <select
                    name='category'
                    id='category'
                    className='border p-4 rounded-lg'
                >
                    <option value=''>Filter By Category</option>

                    <option value='On-Site Job'>On-Site Job</option>

                    <option value='Remote Job'>Remote Job</option>

                    <option value='Hybrid'>Hybrid
                    </option>

                    <option value='Part-Time'>Part-Time
                    </option>
                </select>
            </div>

            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-blue-400 '>Applied Jobs</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {items.length} jobs
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-base-100'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Title</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Deadline</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>salary</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Category
                                            </th>

                                        </tr>
                                    </thead>


                                    <tbody className='bg-base-100 divide-y pl-2 divide-gray-200 '>
                                        {
                                            items.map((item, index) => (
                                                <tr key={index}>

                                                    <td className='px-4 py-4 pl-10 text-lg text-gray-500  whitespace-nowrap'>
                                                        {item.job_title}
                                                    </td>

                                                    <td className='px-4 py-4  text-lg text-gray-500  whitespace-nowrap'>
                                                        {item.applyStartDateValue}
                                                        {/* {new Date(item.startDate).toLocaleDateString()} */}
                                                    </td>

                                                    <td className='px-4 py-4 text-lg text-gray-500  whitespace-nowrap'>
                                                       $ {item.Salary_range}
                                                    </td>
                                                    <td className='px-4 py-4 text-lg whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p
                                                                className='px-3 py-1 rounded-full text-gray-400 text-lg'
                                                            >
                                                                {item.category}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    {/* update and delete button */}
                                                   

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

export default AppliedJobs;