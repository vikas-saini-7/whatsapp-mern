import React from 'react'
import LoginWithGoogleBtn from './auth/LoginWithGoogleBtn';
import { useSelector } from 'react-redux';

const LoginDialog = () => {
    const error = useSelector(state => state.auth.error);
    const loading = useSelector(state => state.auth.loading);
    return (
        <div className=''>
            <header className='bg-primary px-4'>
                <div className='container mx-auto text-white text-3xl pb-32 pt-12'>
                    WhatsApp Web
                </div>
            </header>
            <main className='container mx-auto bg-white border -mt-20 p-[5%] flex flex-col lg:flex-row justify-between rounded-lg min-h-[500px]'>
                <ol className='w-full lg:w-1/2'>
                    <h1 className='font-bold text-3xl mb-4'>Use WhatsApp on your computer</h1>
                    <li className='text-lg mb-2'>1. Open WhatsApp on your phone</li>
                    <li className='text-lg mb-2'>2. Tap Menu on Android, or Settings on iPhone</li>
                    <li className='text-lg mb-2'>3. Tap Linked devices and then Link a device</li>
                    <li className='text-lg mb-2'>4. Point your phone at this screen to capture the QR code</li>
                </ol>
                <div className='w-full mt-2 lg:w-1/2 lg:mt-0 flex justify-center relative border rounded-lg'>
                    
                    <img className='max-w-[320px] w-full h-fit object-contain opacity-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="fa_qr" />
                    {/* <div className='absolute top-[43%] flex bg-gray-100 px-4 py-2 border cursor-pointer'>
                        <img className='w-8 object-contain' src="https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg" alt="" />
                        <button className=''>Sign In with Google</button>
                    </div> */}
                    <div className='absolute top-[42%] flex cursor-pointer'>
                        <LoginWithGoogleBtn/>
                    </div>
                </div>
            </main>
            {!loading && error && <p className='mt-8 text-red-600 text-center'>Error Logging In: {error}</p>}
            {loading && <p className='mt-8 text-green-600 text-center'>Loading...</p>}
        </div>
    )
}

export default LoginDialog