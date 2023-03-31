import React from 'react';
import {motion} from 'framer-motion'

const Weather = ({weather}) => {
    // console.log(weather)
  return (
    <motion.div
      className="weather-container"
      drag
      dragConstraints={{
        top: 0,
        right: 220,
      }}
    >
      <img src={weather.condition.icon} alt="weather icon" />
      <h3> {weather.condition.text} </h3>
      <p 
      style={{color: weather.temp_f >= 50 ? "brown" : "blue"}}>
        {`${weather.temp_f} °F`}</p>
    </motion.div>
  );
}

export default Weather