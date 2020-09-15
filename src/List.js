import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function List() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // 在 componentDidMount的时候从接口发起请求获取用户列表
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>{person.name}</div>
      ))}
    </div>
  );
}
