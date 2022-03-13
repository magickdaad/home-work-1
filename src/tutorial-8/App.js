import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

function App() {
  const { handleSubmit, register, formState, reset } = useForm();

  const onSubmit = (values) => console.log('ФОРМА!', values);

  const handleClickClear = () => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="App">
      <div className="row">
        <TextField
          className="text"
          name="firstName"
          label="Имя"
          {...register('firstName', {
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
          helperText={formState.errors.firstName && formState.errors.firstName.message}
          error={!!formState.errors.firstName}
        />
        <TextField
          className="text"
          name="lastName"
          label="Фамилия"
          {...register('lastName', {
            required: 'Это обязательное поле!',
          })}
          helperText={formState.errors.lastName && formState.errors.lastName.message}
          error={!!formState.errors.lastName}
        />
      </div>
      <div className="row">
        <TextField
          className="text"
          {...register('email', {
            required: 'Это обязательное поле!',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: 'Это неверная почта!',
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="E-Mail"
          defaultValue=""
        />
        <TextField
          className="text"
          {...register('password', {
            required: 'Это обязательное поле!',
          })}
          helperText={formState.errors.password && formState.errors.password.message}
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="Пароль"
        />
      </div>
      <br />
      <div className="row">
        <Button
          className="btn"
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
        >
          Зарегистрироваться
        </Button>
        <Button onClick={handleClickClear} className="btn" variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
}

export default App;
