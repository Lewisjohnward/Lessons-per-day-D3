export const BottomAxis = ({
  xScale,
  innerHeight,
  tickFormat,
  innerWidth,
  tickOffset,
}) =>
  xScale.ticks().map((tickValue) => {
    const year = new Date().getFullYear();
    const tickYear = tickValue.getFullYear();
    if (tickYear > year) return null;
    return (
      <g
        key={tickValue}
      >
        <line
          stroke="red"
          stroke-dasharray="5,5"
          transform={`translate(${xScale(tickValue)}, 0)`}
          y2={innerHeight}
        />
        <text
          style={{ textAnchor: "middle" }}
          x={xScale(tickValue) + innerWidth / (xScale.ticks().length - 1) / 2}
          y={innerHeight + tickOffset}
        >
          {tickFormat(tickValue)}
        </text>
      </g>
    );
  });
