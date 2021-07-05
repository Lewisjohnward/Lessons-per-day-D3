import { format } from "d3";

export const LeftAxis = ({ yScale, innerHeight, tickOffset }) =>
  yScale.ticks().map((tickValue) => (
    <g transform={`translate(0, ${innerHeight - yScale(tickValue)})`}>
      <text style={{ textAnchor: "end" }} dy=".32em" x={-tickOffset}>
        {format(".2s")(tickValue)}
      </text>
    </g>
  ));
