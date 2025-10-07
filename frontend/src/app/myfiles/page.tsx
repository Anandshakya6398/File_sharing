import Navbar from '@/components/Navbar';
import React from 'react'

const page = () => {

  const tempFiles = [
  {
    filename : "test1.pdf",
    fileurl: '',
    filetype: 'pdf',
    sharedAt: new Date()
  },
  {
    filename : "test2.mp4",
    fileurl: '',
    filetype: 'mp4',
    sharedAt: new Date()
  },
  {
    filename : "test3.png",
    fileurl: '',
    filetype: 'png',
    sharedAt: new Date()
  }

  ];
  return (
    <>
    <Navbar/>
    <div className='pt-20 pb-10 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      {
        tempFiles.map((file, index) => {
          return (
            <div key={index} className="bg-black backdrop-blur-md rounded-2xl shadow-xl p-2 mx-6 px-4 my-4 text-white  ">
              <h3 className="text-xl font-semibold mb-2">{file.filename}</h3>
              <p className="text-sm text-gray-300 mb-4">Date & Time: {file.sharedAt.toLocaleString()}</p>
            </div>
          )
        })
        
      }
    </div>
        </>
  )
}

export default page
