import React from 'react'

const Day = ({dayInfo, wmoCodes}) => {

  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  let days = [];

  if (dayInfo) {
      days = dayInfo.daily.time.map(day => {
      let weekDay = new Date(day);
      return daysOfWeek[weekDay.getDay()];
    })

  return (
    <section className="day-section" data-day-section>

        <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[0]]} alt ="" className="weather-icon" />
        <div className="day-card-day">{days[0]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[0]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[0]}&deg;</div>
        </div>   
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[1]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[1]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[1]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[1]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[2]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[2]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[2]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[2]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[3]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[3]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[3]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[3]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[4]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[4]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[4]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[4]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[5]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[5]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[5]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[5]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[6]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[6]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[6]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[6]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[7]]} alt ="" className="weather-icon" />
        <div className="day-card-day">{days[0]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[7]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[7]}&deg;</div>
        </div>   
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[8]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[1]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[8]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[8]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[9]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[2]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[9]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[9]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[10]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[3]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[10]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[10]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[11]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[4]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[11]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[11]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[12]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[5]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[12]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[12]}&deg;</div>
      </div> 
      <div className="day-card">
        <img src={wmoCodes[dayInfo.daily.weathercode[13]]} alt ="" className="weather-icon"/>
        <div className="day-card-day">{days[6]}</div>
        <div className='day-card-max-min'>HI: {dayInfo.daily.temperature_2m_max[13]}&deg;</div>
        <div className='day-card-max-min'>LOW: {dayInfo.daily.temperature_2m_min[13]}&deg;</div>
      </div>   
    </section>
  )
  }
}

export default Day
