

import React, { useEffect, useReducer } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [startTim, setStartTim] = useState(false)

  const startTimer = () => {
    setStartTim(true)
  }
  const stopTimer = () => {
    setStartTim(false)
  }
  const resetTimer = () => {
    setStartTim(false)
    setCount(0)
  }

  useEffect(() => {
    let isTimer;
    if (startTim) {
      isTimer= setInterval(() => {
        setCount((pre)=>pre+1)
      },1000)
    }
   return ()=>clearInterval(isTimer)
  }, [startTim])

  return (
    <>
      <h1>Timer : {count}</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>

    </>
  )
}
export default App;