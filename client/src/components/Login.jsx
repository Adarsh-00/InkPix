import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import {motion} from 'framer-motion';

const Login = () => {
    const [formState, setFormState] = useState('Login');
    const { setShowLogin } = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        console.log('component mounted');

        return () => {
            document.body.style.overflow = 'unset';
            console.log('component unmounted');
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <motion.form className='relative bg-white p-10 rounded-xl'
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{formState}</h1>
                <p className='text-sm'>Welcome Back! Please sign in to continue</p>

                {formState !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img width={23} src={assets.profile_icon} alt="" />
                    <input className='outline-none text-sm' type="text" placeholder='Full Name' required />
                </div>}
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.email_icon} alt="" />
                    <input className='outline-none text-sm' type="email" placeholder='Email' required />
                </div>
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 mb-5'>
                    <img src={assets.lock_icon} alt="" />
                    <input className='outline-none text-sm' type="password" placeholder='Password' required />
                </div>

                {formState === 'Login' && <p className='text-sm text-blue-600 my-5 cursor-pointer'>
                    Forget Password?
                </p>}

                <button className='bg-blue-600 w-full rounded-full text-white py-2'>
                    {formState === 'Login' ? 'Login' : 'create account'}
                </button>

                {formState === 'Login'
                    ? <p className='mt-5 text-center'>
                        Don't have an account? { }
                        <span className='text-blue-600 cursor-pointer' onClick={() => setFormState('Sign Up')}>sign up</span>
                    </p>
                    :
                    <p className='mt-5 text-center'>
                        Already have an account? { }
                        <span className='text-blue-600 cursor-pointer' onClick={() => setFormState('Login')}>Login</span>
                    </p>}

                <img src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' onClick={() => setShowLogin(false)} />
            </motion.form>
        </div>
    );
}

export default Login;
