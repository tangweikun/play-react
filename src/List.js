import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPerson from './AddPerson';

export default function List() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // 这是一个GET请求
    // 在 componentDidMount的时候从接口发起请求获取用户列表
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  function handleDelete(id) {
    // 删除接口
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  return (
    <div>
      <AddPerson />
      {persons.map((person, index) => (
        <div key={index}>
          {person.name}
          <span onClick={() => handleDelete(person.id)}>删除</span>
        </div>
      ))}
    </div>
  );
}
