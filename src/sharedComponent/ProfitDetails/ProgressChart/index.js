import React, { useState } from "react";
import Chart from 'react-apexcharts'
const ProgressChat =()=>{

      const [states,setStates]=useState({
          
        series: [70],
        options: {
          chart: {
            height: 220,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '60%',
              }
            },
          },
          labels: ['Goal'],
        },
      
      
      })
    return(

        <Chart options={states.options} series={states.series} type="radialBar" height={170} />
    )

}
export {ProgressChat}
   