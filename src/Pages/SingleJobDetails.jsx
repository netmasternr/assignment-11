import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import UseAuth from "../Components/UseAuth/UseAuth";
import axios from "axios";

const SingleJobDetails = () => {
    const [ApplystartDate, setStartDate] = useState(new Date());
    const { user } = UseAuth();
    const job = useLoaderData();

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [emails, setemails] = useState("");
    const [resumeLink, setResumeLink] = useState("");

    // view details
    const { Applicants_Number, _id, description, UserName, job_title, category, Picture_URL, Salary_range, startDate, email } = job;
    const formattedStartDate = new Date(startDate).toLocaleDateString();



    // modal
    const handleApplyBtn = () => {
        setShowModal(true);
    };

    // submit btn in modal
    const handleSubmit =async (e) => {
        e.preventDefault();
        const resumeLink = e.target.elements.resume.value;
        const name = user.displayName;
        const userEmail = user.email;
        const applyStartDateValue = new Date(ApplystartDate).toLocaleDateString();


        // condition
        if (userEmail === email) {
            toast.error('You can not apply your job')
            return
        }
        if (applyStartDateValue < formattedStartDate) {
            toast.error(' deadline is over.')
            return
        }

        // finale data
        const applyData = {
            name,
            userEmail,
            resumeLink,
            applyStartDateValue,

            Applicants_Number, description, job_title, category, Picture_URL, Salary_range,

        };
        // console.log(applicantsData)


        // fetch here
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/applicant`, applyData)
            // console.log(data)
        }
        catch(err){
            console.log(err)
        }



        // modal closed and toast and reset
        toast.success("Application submitted successfully!");
        setName("");
        setemails("");
        setResumeLink("");

        // Close modal
        setShowModal(false);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="w-2/3 mx-auto mb-2 pt-10 md:pt-20 px-4 py-3 bg-white rounded-md shadow-md">
            <div>
                <img className="w-2/3 mx-auto rounded-lg pb-2" src={Picture_URL} alt="" />
            </div>

            <div className="flex items-center justify-between">
                <span className="text-xs font-light text-gray-800">
                    Deadline: {formattedStartDate}
                </span>
                <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full">
                    {category}
                </span>
            </div>
            <div className="pt-1 space-y-1">

                <h1 className="text-lg font-semibold text-gray-800">name: {UserName} </h1>
            </div>

            <div className="flex items-center justify-between space-y-1">
                <div className="space-y-2">
                    <h1 className="mt-2 text-lg font-semibold text-gray-800">
                        {job_title}
                    </h1>

                    <p className="mt-2 text-sm font-bold text-gray-600">
                        Salary Range: {Salary_range}
                    </p>
                    <p className="pt-1">Applicants Number: {Applicants_Number}</p>
                    <p>Description: {description}</p>
                </div>
                <div>
                    <button onClick={handleApplyBtn} className="btn">
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Apply for Job</h2>

                        <form onSubmit={handleSubmit} className="w-80">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={user.displayName}
                                    disabled
                                    onChange={(e) => setName(e.target.value)}
                                    className="border-gray-300 focus:ring-indigo-500  p-2 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emails" className=" block text-sm font-medium text-gray-700">
                                    email
                                </label>
                                <input
                                    type="email"
                                    id="emails"
                                    name="emails"
                                    defaultValue={user.email}
                                    disabled
                                    onChange={(e) => setemails(e.target.value)}
                                    className="p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
                                />
                            </div>
                            <div className='flex flex-col '>
                                <label className='text-gray-600'>Deadline</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    className='block w-full px-4 py-2 text-black bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                                />
                            </div>
                            <div className="mb-4 mt-2">
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                    Resume Link
                                </label>
                                <input
                                    type="text"
                                    name="resume"
                                    placeholder="Resume Link"
                                    id="resume"
                                    value={resumeLink}
                                    onChange={(e) => setResumeLink(e.target.value)}
                                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md p-2"
                                />
                            </div>
                            <div className=" flex justify-between">
                                <button type="submit" className="btn bg-green-300">
                                    Submit
                                </button>
                                <button onClick={closeModal} type="button" className="btn bg-gray-600 text-white ml-2">
                                    Close
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}

            {/* Toast Container */}
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default SingleJobDetails;
