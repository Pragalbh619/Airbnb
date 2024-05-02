import React from 'react'
import { useEffect, useState } from 'react';

function Data_get() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((response) => {
        setdata(response)
      })
    })
  }, [])
  
  return (

    <>
      <div>
        <h1>GET API CALL</h1>
        <table>
          <thead>
          <tr >
            <td>userID</td>
            <td>ID</td>
            <td>title</td>
            <td>completed</td>
          </tr>
          </thead>
          <div  >
            <tbody>
            {data.map((item) =>
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed.toString()}</td>
              </tr>
            )}
            </tbody>
          </div>

        </table>


      </div>

    </>
  );
}

export default Data_get