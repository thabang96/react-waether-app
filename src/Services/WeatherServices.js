const API_KEY = '73259ed9012a60cd68321982c6f1d6a2';
const BASE_URL = 'http://api.openweathermap.org/data/2.5'


const getWeatherData =(infoType,searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams,appid:API_KEY });

      return fetch(url)
      .then((res) => res.json()) 
      .then((data) =>data); 
};

        export default getWeatherData;