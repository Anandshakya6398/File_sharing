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
    <div>
      {
        tempFiles.map((file, index) => {
          return (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-2 mx-6 px-4  text-white my-4 ">
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
