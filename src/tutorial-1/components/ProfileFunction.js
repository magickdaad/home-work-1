import React from 'react';

const ProfileFunction = ({name,registredAt}) => {
  return (
    <div className="profile">
      <p>Привет, {name.split(' ')[0]}!</p>
      <p>Дата регистрации: {registredAt}</p>
    </div>
  );
};

export default ProfileFunction;
