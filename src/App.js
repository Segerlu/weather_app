import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Day from './Day';
import Hour from './Hour';
import Initial from './Initial';
import convertHourly from './convertHourly.js';

function App() {
  let wmoCodes = {
    0:'icons/sun-solid.svg',
    1:'icons/cloud-sun-solid.svg',
    2:'icons/cloud-sun-solid.svg',
    3:'icons/cloud-sun-solid.svg',
    45:'icons/smog-solid.svg',
    48:'icons/smog-solid.svg',
    51:'icons/cloud-solid.svg',
    53:'icons/cloud-solid.svg',
    55:'icons/cloud-solid.svg',
    56:'icons/cloud-solid.svg',
    57:'icons/cloud-solid.svg',
    61:'icons/cloud-showers-heavy-solid.svg',
    63:'icons/cloud-showers-heavy-solid.svg',
    65:'icons/cloud-showers-heavy-solid.svg',
    66:'icons/cloud-showers-heavy-solid.svg',
    67:'icons/cloud-showers-heavy-solid.svg',
    71:'icons/snowflake-solid.svg',
    73:'icons/snowflake-solid.svg',
    75:'icons/snowflake-solid.svg',
    77:'icons/snowflake-solid.svg',
    80:'icons/cloud-showers-heavy-solid.svg',
    81:'icons/cloud-showers-heavy-solid.svg',
    82:'icons/cloud-showers-heavy-solid.svg',
    85:'icons/snowflake-solid.svg',
    86:'icons/snowflake-solid.svg',
    95:'icons/cloud-showers-heavy-solid.svg',
    96:'icons/cloud-showers-heavy-solid.svg', 
    99:'icons/cloud-showers-heavy-solid.svg'
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;

  let weekStart = new Date()
  weekStart.setTime(weekStart.getTime() + 2 * 86400000)
  dd = weekStart.getDate();
  mm = weekStart.getMonth() + 1;
  yyyy = weekStart.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  weekStart = yyyy + '-' + mm + '-' + dd;

  let weekEnd = new Date();
  weekEnd.setTime(weekEnd.getTime() + 16 * 86400000)
  dd = weekEnd.getDate();
  mm = weekEnd.getMonth() + 1;
  yyyy = weekEnd.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  weekEnd = yyyy + '-' + mm + '-' + dd;
  console.log('today', today)
  console.log('week start', weekStart)
  console.log('week end', weekEnd)


  let lat = "30.832703";
  let long = "-83.278488";
  let dailyUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=America%2FNew_York&daily=temperature_2m_max,temperature_2m_min,weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&start_date=${weekStart}&end_date=${weekEnd}`;
  let headerHourlyUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode,precipitation,apparent_temperature,windgusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&start_date=${today}&end_date=${today}`;

  let [dayInfo, setDayInfo] = useState();
  let [hourInfo, setHourInfo] = useState([]);
  let [headerInfo, setHeaderInfo] = useState();

  useEffect(() => {
    //Get daily info
    fetch(dailyUrl)
      .then(data => data.json())
      .then(info => {
        setDayInfo(info)
      })
      .catch(console.error)
    //Get header & hourly info
    fetch(headerHourlyUrl)
      .then(data => data.json())
      .then(info => {
        setHeaderInfo({
          high: info.daily.temperature_2m_max[0],
          low: info.daily.temperature_2m_min[0],
          flHigh: info.daily.apparent_temperature_max[0],
          flLow: info.daily.apparent_temperature_min[0],
          wind: info.daily.windspeed_10m_max[0],
          precip: info.daily.precipitation_sum[0],
          wmoCode: info.daily.weathercode[0],
          current:info.hourly.temperature_2m[0]
        })
        setHourInfo(convertHourly(info.hourly));
      })
      .catch(console.error)
  }, [])

  if (dayInfo && hourInfo.length > 0 && headerInfo){

    return (
      <div className="App">
      <Header headerInfo={headerInfo} wmoCodes={wmoCodes} />
      <Day dayInfo={dayInfo} wmoCodes={wmoCodes} />

      <table className="hour-section">
        <tbody data-hour-section>

          {hourInfo.map(hour => {
            return <Hour key={hour.id} hourInfo={hour} icons={wmoCodes}/>
          })}

        </tbody>
      </table>

    </div>
  );
} 
else {
  return (
    <Initial>

    </Initial>
  )
}
}

export default App;
