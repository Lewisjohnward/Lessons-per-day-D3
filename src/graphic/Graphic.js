import {
  scaleTime,
  scaleLinear,
  max,
  extent,
  timeFormat
} from "d3";

import { LeftAxis } from "./LeftAxis"
import { BottomAxis } from "./BottomAxis"
import { RightAxis } from "./RightAxis"
import {Marks} from "./Marks"
import {CumulativeLine} from "./CumulativeLine"

const width = window.innerWidth - 30;
const height = window.innerHeight / 2;

const margin = {
  top: 20,
  right: 65,
  bottom: 65,
  left: 65,
};

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Graphic = ({
  data
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

    console.log(yScale2.domain(), yScale2.range())
  const tickOffset = 20;

  return (
    <>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/*X axis*/}
            <BottomAxis xScale={xScale} innerWidth={innerWidth} innerHeight={innerHeight} tickFormat={tickFormat} tickOffset={tickOffset}/>
            {/*Y axis 1*/}
            <LeftAxis yScale={yScale} innerHeight={innerHeight} tickOffset={tickOffset}/>

            {/*Y axis 2*/}
            <RightAxis yScale2={yScale2} innerHeight={innerHeight} innerWidth={innerWidth} tickOffset={tickOffset}/>

            {/*marks*/}
            <Marks data={data} xScale={xScale} innerHeight={innerHeight} yScale={yScale} />

            {/*Line marks*/}
            <CumulativeLine xScale={xScale} xValue={xValue} yScale2={yScale2} yValue2={yValue2} data={data}/>
          </g>
        </svg>
    </>
  );
};


