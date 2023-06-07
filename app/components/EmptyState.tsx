import React from 'react'

const EmptyState = () => {
  return (
    <div className='px-4 py-10 sm:px-6 h-full lg:px-8 flex justify-center items-center bg-gray-100'>
      <div className="text-center flex flex-col items-center">
        <h3 className='mt-2 text-2xl font-semibold text-gray-900'>Select a Chat or Start a New Conversation</h3>
      </div>
    </div>
  )
}

export default EmptyState
