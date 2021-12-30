import React from 'react';

const App = () => {
  let email = '';
  let password = '';

  const checkParams = (evt) => {
    if (evt.target.type == 'text') {
      email = evt.target.value;
    } else if (evt.target.type == 'password') {
      password = evt.target.value;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email.trim() && password.trim()) {
      console.log({ email, password });
      evt.target.reset();
      email = '';
      password = '';
    } else {
      alert('Заполните все поля');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input className="form__input" onChange={checkParams} type="text" placeholder="E-Mail" />
        <input
          className="form__input"
          onChange={checkParams}
          type="password"
          placeholder="Пароль"
        />
        <button className="form__btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default App;
