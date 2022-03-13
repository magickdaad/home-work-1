import React from 'react';
import { Navigate } from 'react-router-dom';

export const Profile = () => {
  if (!window.localStorage.getItem('token')) {
    return <Navigate to="/" />;
  }
  return <h1>Страница авторизованного пользователя</h1>;
};
