import { line, curveBasis } from "d3";

export const CumulativeLine = ({ data, xScale, xValue, yScale2, yValue2 }) => (
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
      strokeWidth={1}
      d={line()
        .curve(curveBasis)
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale2(yValue2(d)))(data)}
    />
  </g>
);
