
const MyJobs = () => {

    return (
        <div className="pt-10 md:pt-20 ">
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>My Jobs</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        05 Jobs
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
                                        <tr>
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                Build Dynamic Website
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                10/04/2024
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                $200
                                            </td>
                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <div className='flex items-center gap-x-2'>
                                                    <p
                                                        className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60                text-xs'
                                                    >
                                                        Web Development
                                                    </p>
                                                </div>
                                            </td>
                                           
                                            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>

                                                <button className="btn">Update</button>
                                               
                                                {/* <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                                                    <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                                                    <h2 className='text-sm font-normal '>Update</h2>
                                                </div>    */}
                                            </td>

                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <button className="btn">Delete</button>
                                            </td>
                                        </tr>
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