import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
    const allJobs = useLoaderData();
    // console.log(allJobs);

    return (
        <div className="pt-10 md:pt-16 mb-4 ">
            <section className='container px-4 mx-auto pt-12'>
                <div className="text-center mb-5">
                    search bar
                </div>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-blue-400 '>All Jobs</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {allJobs.length} jobs
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-base-100'>
                                        <tr>
                                            <th scope='col' className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Title</span>
                                                </div>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                <span>Job Posting Date</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                <span>Application Deadline</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                Salary range
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>

                                            </th>
                                            <th className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                Details Button
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-base-100 divide-y divide-gray-200 '>
                                        {allJobs.map((job, index) => (
                                            <tr key={index}>
                                                <td className='px-4 py-4 pl-10 text-lg text-gray-500  whitespace-nowrap'>
                                                    {job.job_title}
                                                </td>
                                                <td className='px-4 py-4 text-lg text-gray-500  whitespace-nowrap'>
                                                    {/* Static date */}
                                                    <p>10/04/2024</p>
                                                </td>
                                                <td className='px-4 py-4 text-lg text-gray-500  whitespace-nowrap'>
                                                    {/* Dynamic deadline */}
                                                    {new Date(job.startDate).toLocaleDateString()}
                                                </td>
                                                <td className='px-4 py-4 text-lg whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <p className='px-3 py-1 rounded-full text-gray-400 text-lg'>
                                                            $ {job.Salary_range}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>

                                                </td>
                                                <td className='px-4 py-4 text-lg whitespace-nowrap'>
                                                    <Link to={`/singleJob/${job._id}`} className='btn'>View Details</Link>
                                                </td>
                                            </tr>
                                        ))}
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

export default AllJobs;
