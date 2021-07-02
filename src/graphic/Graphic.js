import {
  csv,
  scaleTime,
  scaleBand,
  scaleLinear,
  max,
  extent,
  timeFormat,
  format,
  line,
  curveNatural,
  curveBasis,
} from "d3";

import { YearSelector } from "./YearSelector";
import { year, setYear, view, setView } from "./UseViewSelector"

const width = window.innerWidth - 30;
const height = window.innerHeight / 2;

const margin = {
  top: 20,
  right: 40,
  bottom: 65,
  left: 40,
};

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Graphic = ({
  data,
  view,
  year,
  setModifiedData,
  setYear,
  setView,
}) => {


  const tickFormat = timeFormat("%Y");

  const xValue = (d) => d.date;
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yValue = (d) => d.length;
  const yScale = scaleLinear()
    .domain([0, max(data, yValue) * 2])
    .range([0, innerHeight])
    .nice();

  const yValue2 = (d) => d.id;
  const yScale2 = scaleLinear()
    .domain(extent(data, yValue2))
    .range([0, innerHeight])
    .nice();

  const tickOffset = 0;

  console.log(year, setYear, view, setView)
  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          {/*View selector*/}
          <div style={{ marginLeft: margin.left }}>
            <label htmlfor="view">View:</label>
            <select name="view" id="view">
              <option value="alltime">All-time</option>
              <option value="year">Year</option>
              <option value="month">Month</option>
            </select>
          </div>


          {/*Year banner*/}
        </div>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/*X axis*/}
            {xScale.ticks().map((tickValue) => {
              const year = new Date().getFullYear();
              const tickYear = tickValue.getFullYear();
              if (tickYear > year) return null;
              return (
                <g>
                  <line
                    stroke="red"
                    stroke-dasharray="5,5"
                    transform={`translate(${xScale(tickValue)}, 0)`}
                    y2={innerHeight}
                  />
                  <text
                    style={{ textAnchor: "middle" }}
                    x={
                      xScale(tickValue) +
                      innerWidth / (xScale.ticks().length - 1) / 2
                    }
                    y={innerHeight + 15}
                  >
                    {tickFormat(tickValue)}
                  </text>
                </g>
              );
            })}

            {/*Y axis 1*/}
            {yScale.ticks().map((tickValue) => (
              <g transform={`translate(0, ${innerHeight - yScale(tickValue)})`}>
                <text style={{ textAnchor: "end" }} dy=".32em" x={-2}>
                  {format(".2s")(tickValue)}
                </text>
              </g>
            ))}

            {/*Y axis 2*/}
            {yScale2.ticks().map((tickValue) => (
              <g
                transform={`translate(${innerWidth}, ${
                  innerHeight - yScale2(tickValue)
                })`}
              >
                <text
                  style={{ textAnchor: "start" }}
                  dy=".4em"
                  dx="0.5em"
                  x={-2}
                >
                  {tickValue}
                </text>
              </g>
            ))}

            {/*marks*/}
            {drawMarks(data, xScale, innerHeight, yScale)}

            {/*Line marks*/}
            {
              <g>
                <text
                  x={xScale(xValue(data[data.length - 1]))}
                  y={yScale2(yValue2(data[data.length - 1])) - 5}
                >
                  {data.length}
                </text>
                <path
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                  d={line()
                    .curve(curveBasis)
                    .x((d) => xScale(xValue(d)))
                    .y((d) => yScale2(yValue2(d)))(data)}
                />
              </g>
            }
          </g>
        </svg>
      </div>
    </>
  );
};

const drawMarks = (data, xScale, innerHeight, yScale) => {
  let previousDate = new Date();
  let yCoords = innerHeight;
  let quantity = 0;

  const marks = data.map((d) => {
    quantity++;
    const currentDate = d.date.getTime();

    const rectangleY = innerHeight - yScale(d.length);

    if (currentDate == previousDate) {
      yCoords -= yScale(d.length);

      return (
        <g>
          <text style={{ textAnchor: "middle" }} x={xScale(d.date)} y={-5}>
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
      );
    }

    previousDate = currentDate;
    yCoords = rectangleY;

    return (
      <g>
        <text style={{ textAnchor: "middle" }} x={xScale(d.date)} y={-5}>
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
    );
  });

  return marks;
};
