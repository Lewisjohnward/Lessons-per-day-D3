export const Marks = ({ data, xScale, innerHeight, yScale }) => {
  let previousDate = new Date();
  let yCoords = innerHeight;
  let quantity = 0;

  const marks = data.map((d) => {
    quantity++;
    const currentDate = d.date.getTime();

    const rectangleY = innerHeight - yScale(d.length);

    if (currentDate === previousDate) {
      yCoords -= yScale(d.length);

      return (
        <g
        >
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
