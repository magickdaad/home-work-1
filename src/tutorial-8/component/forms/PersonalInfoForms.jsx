import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const schema = yup.object({
  firstName: yup.string().min(2, 'Слишком кароткое имя'),
  lastName: yup.string().required('Это обязательное поле!'),
  email: yup.string().email('Неверная почта!').required('Это обязательное поле!'),
  password: yup.string().when('email', {
    is: (value) => value.includes('@'),
    then: yup.string().min(5, 'Yt vtytt'),
  }),
});

const PersonalInfoForms = ({ nextStep, setFilds }) => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    setFilds(values);
    nextStep('address');
  };

  const handleClickClear = () => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };
  return (
    <div>
      <div className="row">
        <TextField
          className="text"
          name="firstName"
          label="Имя"
          {...register('firstName')}
          fullWidth
          helperText={formState.errors.firstName && formState.errors.firstName.message}
          error={!!formState.errors.firstName}
        />
        <TextField
          className="text"
          name="lastName"
          label="Фамилия"
          {...register('lastName')}
          fullWidth
          helperText={formState.errors.lastName && formState.errors.lastName.message}
          error={!!formState.errors.lastName}
        />
      </div>
      <div className="row">
        <TextField
          className="text"
          {...register('email')}
          name="email"
          label="E-Mail"
          defaultValue=""
          fullWidth
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
        />
        <TextField
          className="text"
          {...register('password')}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
          helperText={formState.errors.password && formState.errors.password.message}
          error={!!formState.errors.password}
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
          Далее
        </Button>
        <Button onClick={handleClickClear} className="btn" variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForms;
