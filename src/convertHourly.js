import React from 'react'

const convertHourly = (obj) => {
    let results = [];
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let days = [];

    if(obj) {

        
        days = obj.time.map(day => {
            let weekDay = new Date(day);
            return daysOfWeek[weekDay.getDay()];
        })
        
        for (let i = 0; i < obj.time.length; i++) {
            results.push({
                time: obj.time[i],
                day: days[i],
                temp: obj.temperature_2m[i],
                flTemp: obj.apparent_temperature[i],
                precip: obj.precipitation[i],
                wind: obj.windgusts_10m[i],
                wmoCodes: obj.weathercode[i]
            });
        }
        return results;
    }
    return [];
}

export default convertHourly
