import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/Lewisjohnward/7a8eb5a17366a2cc83e1c414e06c492b/raw/a11113c534d41110d2bc40104c866d186179db92/Lessons.csv";

export const GetData = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const row = (d) => {
      d.length = +d["length"];
      d.date = new Date(+d["date"]);
      d.id = +d.id;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
