import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-4">
            <div className='grid grid-cols-3 px-14  justify-center items-center'>
                <div>
                    <h2 className='text-xl font-bold mx-8 m-6  '>
                        Share <span className='text-amber-400'>
                            Everywhere
                        </span>
                    </h2>
                    <p className='text-sm mx-8 mt-2 text-gray-400 mb-8'>
                        It is fully End to End encrypted and free to use Platform.
                    </p>
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>Links</h4>
                    <ul>
                        <li className='text-gray-400 hover:text-white cursor-pointer'>Home</li>
                        <li className='text-gray-400 hover:text-white cursor-pointer'>About</li>
                        <li className='text-gray-400 hover:text-white cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>Follow Us</h4>
                    <div className='flex space-x-4 justify-center items-center mt-2'>
                        <span className='text-gray-400 hover:text-white cursor-pointer'>Facebook</span>
                        <span className='text-gray-400 hover:text-white cursor-pointer'>Twitter</span>
                        <span className='text-gray-400 hover:text-white cursor-pointer'>Instagram</span>
                    </div>
                </div>
            </div>

            <hr />
            <div className="container mx-auto text-center mt-2">
                <p>&copy; {new Date().getFullYear()} File Sharing Web. Made By -&gt; Anand Shakya.</p>
            </div>
        </div>
    )
}

export default Footer
