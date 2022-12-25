import React from 'react'

const Hour = ({hourInfo}) => {
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
            <img src="icons/cloud-solid.svg" alt="" className="weather-icon" />
          </td>
          <td>
            <div className="info-group">
              <div className="label">TEMP</div>
              <div>31&deg;</div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">FL TEMP</div>
              <div>25&deg;</div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">WIND</div>
              <div>6<span className="value-sub-info">mph</span ></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
  )
}

export default Hour
