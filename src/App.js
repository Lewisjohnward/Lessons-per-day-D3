import React from "react";

import { Graphic } from "./graphic/Graphic"
import { GetData } from "./getData"

import {Totals} from "./totals/Totals"

import "./style.css";

export const App = () => {
  const data = GetData()

  if (!data) {
    return <pre>Loading...</pre>;
  }


  data.sort((a, b) => {
    const c = new Date(a.date)
    const d = new Date(b.date)
    return c-d
  });

  console.log(data[0])
  data && console.log(data)

  return (
    <>
      <Graphic data={data}/>
      <Totals data={data}/>
    </>

  )

}
