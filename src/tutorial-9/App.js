import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = 'https://6230bc3bf113bfceed5a0eb2.mockapi.io/users';
    try {
      const responce = await fetch(url);
      const data = await responce.json()
      setUsers(data)
    } catch (err) {
      alert(err)
    }
  };
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <button onClick={getUsers}>Получить данные</button>
    </div>
  );
};

export default App;
