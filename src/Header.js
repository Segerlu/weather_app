import React from 'react'

const Header = ({ headerInfo, wmoCodes }) => {

  if (headerInfo) {

    return (
      <header className="header">
        <div className="header-left">
          <img className="weather-icon large" src={wmoCodes[headerInfo.wmoCode]} alt="" data-current-icon />
          <div className="header-current-temp">
            <span data-current-temp>{headerInfo.current}</span>&deg;
          </div>
        </div>
        <div className="header-right">
          <div className="info-group">
            <div className="label">High</div>
            <div><span data-current-high>{headerInfo.high}</span>&deg;</div>
          </div>
          <div className="info-group">
            <div className="label">FL High</div>
            <div><span data-current-fl-high>{headerInfo.flHigh}</span>&deg;</div>
          </div>
          <div className="info-group">
            <div className="label">Wind</div>
            <div><span data-current-wind>{headerInfo.wind}</span><span className="value-sub-info">mph</span></div>
          </div>
          <div className="info-group">
            <div className="label">Low</div>
            <div><span data-current-low>{headerInfo.low}</span>&deg;</div>
          </div>
          <div className="info-group">
            <div className="label">FL Low</div>
            <div><span data-current-fl-low>{headerInfo.flLow}</span>&deg;</div>
          </div>
          <div className="info-group">
            <div className="label">Precip</div>
            <div><span data-current-precip>{headerInfo.precip}</span><span className="value-sub-info">in</span></div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
