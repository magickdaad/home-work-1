import React from 'react';

const Result = ({ formFilds }) => {
  return (
    <div>
      <h2>Итогавая инфа</h2>
      <ul>
        <li>
          <b>Имя:</b>
          {formFilds.firstName}
        </li>
        <li>
          <b>Фамилия:</b>
          {formFilds.lastName}
        </li>
        <li>
          <b>Почта:</b>
          {formFilds.email}
        </li>
        <li>
          <b>Пароль:</b>
          {formFilds.email}
        </li>
        <li>
          <b>Город:</b>
          {formFilds.cyti}
        </li>
        <li>
          <b>Улица:</b>
          {formFilds.street}
        </li>
        <li>
          <b>Дома:</b>
          {formFilds.appartament}
        </li>
      </ul>
    </div>
  );
};

export default Result;
