export const RightAxis = ({ yScale2, innerHeight, innerWidth, tickOffset }) =>
  yScale2.ticks().map((tickValue) => (
    <g
      transform={`translate(${innerWidth}, ${
        innerHeight - yScale2(tickValue)
      })`}
    >
      <text style={{ textAnchor: "start" }} dy=".4em" dx="0.5em" x={tickOffset}>
        {tickValue}
      </text>
    </g>
  ));
