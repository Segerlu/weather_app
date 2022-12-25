import React from 'react'

const Hour = ({hourInfo, icons}) => {
  let time = Number(hourInfo.time.split('').splice(11, 2).join(''));
  if (time > 12) {
    time = (time - 12) + ' PM';
  } else if (time === 0){
    time = '12 AM'
  } else {
    time += ' AM'
  }

  return (
    <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">{hourInfo.day}</div>
              <div>{time}</div>
            </div>
          </td>
          <td>
            <img src={icons[hourInfo.wmoCodes]} alt="" className="weather-icon" />
          </td>
          <td>
            <div className="info-group">
              <div className="label">TEMP</div>
              <div>{hourInfo.temp}&deg;</div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">FL TEMP</div>
              <div>{hourInfo.flTemp}&deg;</div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">WIND</div>
              <div>{hourInfo.wind}<span className="value-sub-info">mph</span ></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>{hourInfo.precip}<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
  )
}

export default Hour
