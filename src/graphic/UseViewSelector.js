import React, {useState, useEffect} from "react"

export const UseViewSelector =(data) => {
    const [year, setYear] = useState(2016)
    const [view, setView] = useState(1)

    return {year, setYear, view, setView}


}
