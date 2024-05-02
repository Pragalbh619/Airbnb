import React, { useEffect, useState } from 'react';

function Data_put() {
  const [data, setData] = useState([]);
  const [updatedTitles, setUpdatedTitles] = useState({});

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((response) => {
        setData(response);
        // Initialize updatedTitles with empty strings for each item ID
        const titles = response.reduce((acc, item) => {
          acc[item.id] = '';
          return acc;
        }, {});
        setUpdatedTitles(titles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function updateUser(id) {
    const updatedTitle = updatedTitles[id];
    if (!updatedTitle) {
      alert("Please enter an updated title.");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTitle,
      }),
    })
      .then((result) => {
        if (result.ok) {
          // If update is successful, update the data state by mapping through the array and updating the specific item
          setData(data.map((item) => item.id === id ? { ...item, title: updatedTitle } : item));
          // Reset the updated title for the specific item
          setUpdatedTitles({...updatedTitles, [id]: ''});
        } else {
          console.error("Failed to update:", result.status);
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }

  const handleInputChange = (event, id) => {
    const { value } = event.target;
    setUpdatedTitles({...updatedTitles, [id]: value});
  };

  return (
    <>
      <div>
        <h1>PUT API CALL</h1>
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
                  <input
                    type="text"
                    value={updatedTitles[item.id]}
                    onChange={(e) => handleInputChange(e, item.id)}
                    placeholder="Enter updated title"
                  />
                  <button onClick={() => updateUser(item.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Data_put;
