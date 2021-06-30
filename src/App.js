import React, { useState, useEffect } from "react";
import {
  csv,
  scaleTime,
  scaleBand,
  max,
  extent,
  timeFormat,
  tickFormat,
} from "d3";

import "./style.css";

const csvUrl =
  "https://gist.githubusercontent.com/Lewisjohnward/7a8eb5a17366a2cc83e1c414e06c492b/raw/7fd767ebf67cf63b64ef92496978bd816820e48d/Lessons.csv";

const width = 960;
const height = 500;

const margin = {
  top: 20,
  right: 30,
  bottom: 65,
  left: 90,
};

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.length = +d.length;
      d.date = new Date(+d.date);
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  console.log(data);
  console.log(data[0]);

  const xTicksFormat = timeFormat("%Y");

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.date;
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);



  const yValue = d => d.length
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])

  const tickOffset = 0;

  //console.log(xScale.ticks());
  console.log(yScale.bandwidth())
  console.log(xScale(data[9].date))
  return (
    <>
      <svg width={width} height={height}>
        <g>



            {/*X axis*/}
          {xScale.ticks().map((tickValue) => (
            <g
              transform={`translate(${xScale(tickValue)}, 0)`}
              className="tick"
            >
              <line y2={innerHeight} />
              <text
                style={{ textAnchor: "middle" }}
                dy=".71em"
                y={innerHeight + 3}
              >
                {xTicksFormat(tickValue)}
              </text>
            </g>
          ))}

          {/*marks*/}
          {data.map(d => (
              <rect
                x={xScale(d.date)}
                y={yScale(d.length)}
                width={yScale.bandwidth()}
                height={xScale(d.length)} />
            ))
            }






        </g>
      </svg>
      <svg width={width} height={height}>
      <rect x="50" y="20" width="150" height="150"/>

      </svg>
    </>
  );
};
