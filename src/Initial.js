import React from 'react'

const Initial = () => {
  return (
    <div className='blurred'> {/* Add ClassName blurred*/}
        <header className="header">
      <div className="header-left">
        <img className="weather-icon large" src="./icons/sun-solid.svg" data-current-icon />
        <div className="header-current-temp">
          <span data-current-temp>31</span>&deg;
        </div>
      </div>
      <div className="header-right">
        <div className="info-group">
          <div className="label">High</div>
            <div><span data-current-high>32</span>&deg;</div>
        </div>
        <div className="info-group">
          <div className="label">FL High</div>
            <div><span data-current-fl-high>27</span>&deg;</div>
        </div>
        <div className="info-group">
          <div className="label">Wind</div>
            <div><span data-current-wind>9</span><span className="value-sub-info">mph</span></div>
        </div>
        <div className="info-group">
          <div className="label">Low</div>
            <div><span data-current-low>19</span>&deg;</div>
        </div>
        <div className="info-group">
          <div className="label">FL Low</div>
            <div><span data-current-fl-low>12</span>&deg;</div>
        </div>
        <div className="info-group">
          <div className="label">Precip</div>
            <div><span data-current-precip>0.1</span><span className="value-sub-info">in</span></div>
        </div>
      </div>
    </header>

    <section className="day-section" data-day-section>
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Monday</div>
        <div>32&deg;</div>
      </div>   
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Tuesday</div>
        <div>32&deg;</div>
      </div> 
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Wednesday</div>
        <div>32&deg;</div>
      </div> 
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Thursday</div>
        <div>32&deg;</div>
      </div> 
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Friday</div>
        <div>32&deg;</div>
      </div> 
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Saturday</div>
        <div>32&deg;</div>
      </div> 
      <div className="day-card">
        <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
        <div className="day-card-day">Sunday</div>
        <div>32&deg;</div>
      </div>    
    </section>

    <table className="hour-section">
      <tbody data-hour-section>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>3 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>4 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>5 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>6 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>7 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>8 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>9 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>10 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>11 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Thursday</div>
              <div>12 PM</div>
            </div>
          </td>
          <td>
            <img src="icons/cloud-solid.svg" alt='' className="weather-icon" />
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
        <tr className="hour-row">
          <td>
            <div className="info-group">
              <div className="label">Friday</div>
              <div>1 AM</div>
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
              <div>6<span className="value-sub-info">mph</span></div>
            </div>
          </td>
          <td>
            <div className="info-group">
              <div className="label">PRECIP</div>
              <div>0<span className="value-sub-info">in</span></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>      
    </div>
  )
}

export default Initial
