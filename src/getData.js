import React, { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/Lewisjohnward/7a8eb5a17366a2cc83e1c414e06c492b/raw/7fd767ebf67cf63b64ef92496978bd816820e48d/Lessons.csv";

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
//export const csvUrl = "https://gist.githubusercontent.com/Lewisjohnward/b5c8419ff2047c2671a70ae77dc03c6c/raw/3eb17e26634d007f087de7b37a4514ad1bddd5b4/WPP2019.csv"
