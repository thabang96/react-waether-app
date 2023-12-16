import React from 'react'

function forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start mt6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'/>

            <div className='flex flex-row items-center justify-between text-white'>
1
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-12 my-1'/>
                    <p className='font-medium'>22</p>

                </div>
2
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-12 my-1'/>
                    <p className='font-medium'>22</p>

                </div>

3
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-12 my-1'/>
                    <p className='font-medium'>22</p>

                </div>
4
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-12 my-1'/>
                    <p className='font-medium'>22</p>

                </div>
5
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" 
                    className='w-12 my-1'/>
                    <p className='font-medium'>22</p>

                </div>
            </div>
    </div>
  )
}

export default forecast