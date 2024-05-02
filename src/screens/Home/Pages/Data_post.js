import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Data_post = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [item, setitem] = useState([]);

  function saveUser() {
    let data = { name, email, number };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((response) => {
        setitem(response);
      });
    });
  }

  return (
    <>
      <h1>Post Method</h1>
      <input className='border-2 border-black' type="text" value={name} onChange={(e) => { setname(e.target.value) }} name="name" id='Name' />
      <input className='border-2 border-black' type="text" value={email} onChange={(e) => { setemail(e.target.value) }} name="email" id='Email' />
      <input className='border-2 border-black' type="text" value={number} onChange={(e) => { setnumber(e.target.value) }} name="number" id='Number' />
      <button type="button" onClick={saveUser}>Save</button>
    </>
  );
};

export default Data_post;
