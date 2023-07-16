import React from 'react'

const Skillsets = () => {
  return (
    <div className='min-h-screen'>
        <div className='container grid'> 
            <div className="md:col-start-2 md:col-span-2 items-center justify-center">
              <div className="bg-blue-900 inline-block px-6 text-xl xl:text-2xl">
                <p className="text-yellow-400 font-medium text-center py-5">
                  Skillsets
                </p>
              </div>
            </div>
            <div className='py-8 px-6 md:px-16 grid md:grid-cols-2 gap-16'>
              <div>Coding</div>
              <div>Data Analytics</div>
            </div>
        </div>
    </div>
  )
}

export default Skillsets