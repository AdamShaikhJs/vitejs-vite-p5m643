import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';


function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
    res = await res.json()
    setData(res)
    console.log(res[0])
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>fetch data</h1>
      <div style={{ width: "500px", height: "200px" }}>
        {
          data.map((val) => (
            <div>
              <label>{val.title}</label>
              <input type="checkbox" checked={val.completed} />
            </div>

          ))
        }
      </div>

    </>
  )
}

export default App
