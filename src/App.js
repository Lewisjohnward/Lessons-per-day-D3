import React, { useState, useEffect } from "react";
import {
  csv,
  scaleTime,
  scaleBand,
  scaleLinear,
  max,
  extent,
  timeFormat,
  format,
} from "d3";
import randomColor from "randomcolor"

import { csvUrl } from "./csvUrl"

import "./style.css";


const width = window.innerWidth ;
const height = window.innerHeight / 2;

const margin = {
  top: 20,
  right: 40,
  bottom: 65,
  left: 40,
};

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.length = +d['length'];
      d.date = new Date(+d['date'])
      d.id = +d.id
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  data.sort(function(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c-d;
  });

  console.log(data[0]);

  const tickFormat = timeFormat("%Y");

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.date;
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()



  const yValue = d => d.length
  const yScale = scaleLinear()
    .domain([0, max(data, yValue) * 2])
    .range([0, innerHeight])
    .nice()

  const tickOffset = 0;

  console.log(yScale.ticks());
  //console.log(yScale.bandwidth())
  //console.log(xScale(data[0].date))
  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>


          {/*X axis*/}
          {xScale.ticks().map(tickValue => (
            <g>
              <line stroke="red" stroke-dasharray="5,5" transform={`translate(${xScale(tickValue)}, 0)`} y2={innerHeight}/>
            <text
              style={{textAnchor: "middle"}}
              x={xScale(tickValue)}
              y={innerHeight + 15}
            >{tickFormat(tickValue)}</text>
            </g>
          ))}



          {/*Y axis*/}
          {yScale.ticks().map(tickValue => (
            <g transform={`translate(0, ${innerHeight - yScale(tickValue)})`}> 
              <text
                style={{ textAnchor: 'end' }}
                dy=".32em"
                x={-2}
              >
                {format(".2s")(tickValue)}
              </text>
            </g>
          ))}


          
          {/*marks*/}
          {drawMarks(data, xScale, innerHeight, yScale)}

          </g>
      </svg>
    </>
  );
};

const drawMarks = (data, xScale, innerHeight, yScale) => {
  let previousDate = new Date()
  let yCoords = innerHeight
  let quantity = 0

  const marks = data.map(d => {
    quantity ++
    const currentDate = d.date.getTime()

    const rectangleY = innerHeight - yScale(d.length)

    if (currentDate == previousDate){
      console.log("Yes they match")
      yCoords -= yScale(d.length)

      return (
        <g>
          <text
            style={{textAnchor: "middle"}}
            x={xScale(d.date)}
            y={-5}
          >
            {quantity % 100 === 0 ? quantity : null}
          </text>
          
          <rect 
            key={d.id} 
            hello={d.id} 
            x={xScale(d.date)} 
            y={yCoords} 
            width={1} 
            height={yScale(d.length)}
            fill={"black"}
            />
        </g>
      )
    }

    previousDate = currentDate
    yCoords = rectangleY

      return (
      <g>
        <text
          style={{textAnchor: "middle"}}
          x={xScale(d.date)}
          y={-5}
        >
          {quantity % 100 === 0 ? quantity : null}
        </text>
        <rect 
          key={d.id} 
          x={xScale(d.date)} 
          y={rectangleY} 
          width={1} 
          height={yScale(d.length)}
          fill={"black"}
          />
      </g>
    )
  
  })

    return marks
}
