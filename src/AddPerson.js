import React, { useState } from 'react';
import axios from 'axios';

export default function AddPerson() {
  const [name, setName] = useState([]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user: { name } })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  return (
    <div>
      <span>PersonName</span>
      <input value={name} onChange={handleChange} />
      <div onClick={handleSubmit}> 保存</div>
    </div>
  );
}
