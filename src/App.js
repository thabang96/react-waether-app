//import UilReact from '@iconscout/react-unicons/icons/uil-react'

import './App.css';
import TopButtons from "./components/topButtons";
import Inputs from './components/inputs';
import TimeAndLocation from './components/timeAndLocation';
import TemperatureAndDetails from './components/temperatureAndDetails';
import Forecast from './components/forecast';
import getWeatherData from './Services/WeatherServices';

function App() {

  const fetchWeather = async () => {
   const data = await getWeatherData('waether', {q: 'Kimberly'})
   console.log(data);
  };
  fetchWeather();
  return  (
  <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400">
   
    <TopButtons />
    <Inputs />

    <TimeAndLocation/>
    <TemperatureAndDetails/>
    <Forecast title="hourly forecast"/>
    <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
