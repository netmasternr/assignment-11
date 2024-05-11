import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/img/logo/logo.png'
import img1 from '../../assets/img/image/762887_Job1-01.jpg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';
import GoogleLogin from "../GoogleLogin/GoogleLogin";



const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    //  navigate
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';


    // react hook
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, photo, fullName } = data;

        // Validate password
        const uppercaseRegex = /(?=.*[A-Z])/;
        const lowercaseRegex = /(?=.*[a-z])/;

        if (!uppercaseRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return;
        }
        if (!lowercaseRegex.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {

                //user update profile
                updateUserProfile(fullName, photo)
                    .then(() => {
                        // toast and navigate
                        toast.success('User Registered Successfully')
                        navigate(form)

                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] pt-10 md:pt-20  pb-4'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-base-100 rounded-lg shadow-md  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-10 sm:h-10'
                            src={logo}
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Create Your Account Now
                    </p>

                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Name
                            </label>
                            <input
                                id='name'
                                placeholder="full Name"
                                autoComplete='name'
                                name='fullName'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                {...register("fullName", { required: true })} />
                            {errors.fullName && <span>This field is required</span>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                placeholder="photo"
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                {...register("photo", { required: true })}
                            />
                            {errors.photo && <span>This field is required</span>}

                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                placeholder="Email"
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}

                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                placeholder="password"
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span>This field is required</span>}

                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-10'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            <button className='btn bg-slate-800  text-white '> or sign in</button>

                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block rounded-xl lg:w-1/2'
                    style={{
                        backgroundImage: `url(${img1})`,
                    }}
                ></div>
            </div>

        </div>
    );
};

export default Register;