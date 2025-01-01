import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h5 className='text-lg font-semibold text-white mb-4'>About Us</h5>
                <p className='text-sm mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>  

            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
                <ul className='text-sm mt-4'>
                    <li className=''>
                        <a href="#" className='hover:text-white transition-colors duration-300'>Home </a>
                        </li>
                        <li>
                        <a href="#" className='hover:text-white transition-colors duration-300'>About </a>
                        </li>
                        <li>
                        <a href="#" className='hover:text-white transition-colors duration-300'> Courses</a>
                        </li>
                        <li>
                        <a href="#" className='hover:text-white transition-colors duration-300'>Contact </a>
                        </li>    
                </ul>
            </div>
            
            <div>
                <h5 className='text-lg font-bold text-white mb-4'>Social Media</h5>
                <ul className='flex items-center'>
                    <li className='mr-4'><a href="#" className='hover:text-white transition-colors
                    duration-300'>Facebook</a></li>
                    <li className='mr-4'><a href="#" className='hover:text-white transition-colors
                    duration-300'>Instegram</a></li>
                    <li className='mr-4'><a href="#" className='hover:text-white transition-colors
                    duration-300'>Twitter</a></li>
                </ul>
            </div>
            <div>
                <h5 className='text-lg font-bold text-white mb-4'>Contact Us</h5>
                <p className='text-gray-300 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

            </div>
        </div>
        <p className='text-white text-center text-sm pt-8'>2024 Music School. All rights reserved.</p>
    </footer>
  )
}

export default Footer