import React, { useEffect, useState } from 'react';

function Data_delete() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getlist();
  }, []);

  function getlist() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((response) => {
        setdata(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function delUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        if (result.ok) {
          // If deletion is successful, update the data state by filtering out the deleted item
          setdata(data.filter((item) => item.id !== id));
        } else {
          console.error("Failed to delete:", result.status);
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  return (
    <>
      <div>
        <h1>GET API CALL</h1>
        <table>
          <thead>
            <tr>
              <th>userID</th>
              <th>ID</th>
              <th>title</th>
              <th>completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed.toString()}</td>
                <td>
                  <button onClick={() => delUser(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Data_delete;
