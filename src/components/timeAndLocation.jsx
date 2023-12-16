import React from 'react'

function timeAndLocation() {
  return (
    <div>

        <div className='flex items-center justify-center my-6'>

            <p className='text-white text-xl font-extralight'>
                Tuesday, 31 May 2022 | local time: 12:55 PM
            </p>
        </div>

        <div class='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Berlin, DE
            </p>
        </div>
    </div>
  )
}

export default timeAndLocation