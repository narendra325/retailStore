import React from 'react'
import Orderdetails from './Orderdetails'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='flex-grow container mx-auto p-4 md:p-6'>
            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-6'>

                <div className='text-start w-full md:w-1/3 lg:w-1/4 shadow-md p-4 text-center space-y-4'>
                    <h2 className='text-2xl font-bold '>Narendra singampalli</h2>
                    <p className='text-md'>Narendrasingampalli@gmail.com</p>
                    <button className='bg-red-500  px-5 py-2 w-full rounded-lg text-white'>Logout</button>
                </div>
                <div className='w-full md:w-2/3 lg:w-3/4'>
                    <Orderdetails/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile