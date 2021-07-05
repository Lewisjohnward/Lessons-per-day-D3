export const Totals = ({ data }) => {
  const calculateLessonsPerYear = (data) => {
    const range = data[data.length - 1].date - data[0].date;
    const secondsInYear = 60 * 60 * 24 * 365 * 1000;
    const years = Math.ceil(range / secondsInYear);

    let lessonsPerYear = [];

    for (let i = 0; i < years; i++) {
      const year = data[0].date.getFullYear() + i;
      const startYear = new Date(`${year}, 0, 0`);
      const endYear = new Date(`${year}, 12, 31`);

      const dataToDisplay = data.filter((datum) => {
        const lessonDate = new Date(datum.date);
        return lessonDate >= startYear && lessonDate <= endYear;
      });

      const quantity = dataToDisplay.length;
      const weeks = (year) => {
        if (new Date().getFullYear() === year) {
          var now = new Date();
          var start = new Date(now.getFullYear(), 0, 0);
          var diff =
            now -
            start +
            (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
          var oneDay = 1000 * 60 * 60 * 24;
          var day = Math.floor(diff / oneDay);
          return day / 7
        }
        return 52

      };

      const average = (quantity / weeks(year)).toFixed(1);

      const totalTime = dataToDisplay => {
          let time = 0
          for (let i = 0; i < dataToDisplay.length; i++){
            time += parseInt(dataToDisplay[i]["length"])
          }
          return time / 60
      }

      const obj = {
        year,
        quantity,
        average,
        time: totalTime(dataToDisplay)
      };

      lessonsPerYear.push(obj);
    }

    return lessonsPerYear;
  };

  const lessonsPerYear = calculateLessonsPerYear(data);

  return (
    <div>
      <div>
        <p>Total lessons</p>
        <p>{data.length}</p>
      </div>
      <div>
        {lessonsPerYear.map(({ year, quantity, average, time}) => (
          <div style={{ display: "flex" }}>
            <div>
              <p>
                {year} - {quantity} lessons- {average} a week average - Total time: {time} hours
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
