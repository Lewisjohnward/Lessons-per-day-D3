import React, { useState, useEffect } from "react";

import { Graphic } from "./graphic/Graphic"
import { GetData } from "./getData"
import { csvUrl } from "./getData"

import {Totals} from "./totals/Totals"

import "./style.css";






export const App = () => {
  const data = GetData()
  const [modifiedData, setModifiedData] = useState()
  const [year, setYear] = useState('')
  const [view, setView] = useState('')
 
  if (!data) {
    return <pre>Loading...</pre>;
  }
  console.log(data)

  data.sort(function(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c-d;
  });

  

  return (
    <>
      <Graphic data={!modifiedData ? data: modifiedData} setModifiedData={setModifiedData} view={view} year={year} setYear={setYear} setView={setView}/>
      <Totals data={data}/>
    </>

  )

}
