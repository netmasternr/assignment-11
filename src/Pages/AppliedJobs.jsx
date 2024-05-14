import { useEffect, useState } from "react";
import UseAuth from "../Components/UseAuth/UseAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && (error.response.status === 401 || error.response.status === 404)) {
            // console.log('Log out the user');
            // Add your logout logic here, e.g., redirect to login page
        }
        return Promise.reject(error);
    }
);

const AppliedJobs = () => {

    const { user } = UseAuth();
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axiosInstance.get(`/apJobs/${user.email}`);
                setItems(data);
            } catch (error) {
                // console.error('Error fetching data', error);
                navigate('/login')
               
            }
        };
        if (user) {
            getData();
        }
    }, [user]);

    // Handle category change
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Filter items based on selected category
    const filteredItems = selectedCategory ? items.filter(item => item.category === selectedCategory) : items;

    return (
        <div className="pt-10 md:pt-20">
            <div className="flex justify-around mt-4">
                <select
                    name='category'
                    id='category'
                    className='border p-4 rounded-lg'
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value=''>Filter By Category</option>
                    <option value='On-Site Job'>On-Site Job</option>
                    <option value='Remote Job'>Remote Job</option>
                    <option value='Hybrid'>Hybrid</option>
                    <option value='Part-Time'>Part-Time</option>
                </select>
                <button className="btn">Download Summary</button>
            </div>

            <div>
                <section className='container px-4 mx-auto pt-12'>
                    <div className='flex items-center gap-x-3'>
                        <h2 className='text-lg font-medium text-blue-400'>Applied Jobs</h2>
                        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
                            {filteredItems.length} jobs
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
                                                    <span>Deadline</span>
                                                </th>
                                                <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                    <span>Salary</span>
                                                </th>
                                                <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                    Category
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-base-100 divide-y pl-2 divide-gray-200'>
                                            {filteredItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td className='px-4 py-4 pl-10 text-lg text-gray-500 whitespace-nowrap'>
                                                        {item.job_title}
                                                    </td>
                                                    <td className='px-4 py-4 text-lg text-gray-500 whitespace-nowrap'>
                                                        {item.applyStartDateValue}
                                                    </td>
                                                    <td className='px-4 py-4 text-lg text-gray-500 whitespace-nowrap'>
                                                        $ {item.Salary_range}
                                                    </td>
                                                    <td className='px-4 py-4 text-lg whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p className='px-3 py-1 rounded-full text-gray-400 text-lg'>
                                                                {item.category}
                                                            </p>
                                                        </div>
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
        </div>
    );
};

export default AppliedJobs;
