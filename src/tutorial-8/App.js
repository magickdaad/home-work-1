import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const App = () => {
  const [filds, setFilds] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleChangeInput = (evt) => {
    setFilds({ ...filds, [evt.target.name]: evt.target.value });
  };

  const handleClickRegistr = () => {
    if (!filds.email.includes('@')) {
      alert('Некорректный email');
      return;
    }
    if (filds.firstName.length < 3 || filds.lastName.length < 3) {
      alert('Некорректное имя или фамилия');
      return;
    }
    if (filds.password.length <= 6) {
      alert('Некорректный пароль');
      return;
    }
    console.log(filds);
    handleClickClear();
  };

  const handleClickClear = () => {
    setFilds({ firstName: '', lastName: '', email: '', password: '' });
  };

  const isValid = !!filds.firstName && !!filds.lastName && !!filds.email && !!filds.password;

  return (
    <div className="app">
      <div className="row">
        <TextField
          onChange={handleChangeInput}
          value={filds.firstName}
          className="text"
          name="firstName"
          label="Имя"
        />
        <TextField
          onChange={handleChangeInput}
          value={filds.lastName}
          className="text"
          name="lastName"
          label="Фамилия"
        />
      </div>
      <div className="row">
        <TextField
          onChange={handleChangeInput}
          value={filds.email}
          className="text"
          name="email"
          label="E-Mail"
        />
        <TextField
          onChange={handleChangeInput}
          value={filds.password}
          className="text"
          name="password"
          label="Пароль"
        />
      </div>
      <div className="row">
        <Button
          disabled={!isValid}
          onClick={handleClickRegistr}
          className="btn"
          variant="contained"
        >
          Зарегистрироваться
        </Button>
        <Button onClick={handleClickClear} className="btn" variant="contained" color="error">
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default App;
