import React from 'react'
import{
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons';

function temperatureAndDetails() {
  return (
    <div>
<div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
<p>cloudy weather</p>
</div>

<div className='flex flex-row items-center justify-center text-white py-3'>
    <img src="http://openweathermap.org/img/wn/01d@2x.png " 
    alt="" className='w-20 mr-12 ' />
    <p size={40} className='text-5xl'>25</p>
    <div className="flex flex-col space-y-2">


    <div className='flex font-light text-sm items-center justify-center ml-11'  >
      <UilTemperature size={18} className="mr-2" />
      Feels 
      <span className='font-medium ml-2'>25</span>
    </div>
 
    <div className='flex font-light text-sm items-center justify-center ml-14' >
      <UilTear size={18} className="mr-2" />
      Humidity
      <span className='font-medium ml-2'>60%</span>
    </div>

      <div className='flex font-light text-sm items-center justify-center ml-11' >
      <UilWind size={18} className="mr-2" />
      Wind 
      <span className='font-medium ml-2'>19 km/h</span>
    </div>

        </div>


    </div>
          <div className='flex flex-row items-center justify-center space-x-2
          text-white text-sm py-3'>
            
            <UilSun/>
              <p className='font-light'>Rise : <span className='font-medium ml-1'>06:39 AM</span></p>
              <p className='font-light'>|</p>

              <UilSunset/>
              <p className='font-light'>Set : <span className='font-medium ml-1'>07:40 PM</span></p>
              <p className='font-light'>|</p>

              
              <UilArrowUp/>
              <p className='font-light'>high : <span className='font-medium ml-1'>40</span></p>
              <p className='font-light'>|</p>
              
              <UilArrowDown/>
              <p className='font-light'>low : <span className='font-medium ml-1'>17</span></p>
              <p className='font-light'>|</p>
          </div>
    </div>
  );
}

export default temperatureAndDetails