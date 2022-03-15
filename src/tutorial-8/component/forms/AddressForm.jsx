import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const schema = yup.object({
  city: yup.string().required('Укажите город!'),
  street: yup.string().required('Укажите улицу!'),
  appartament: yup.string().required('Укажите номер квартиры!'),
});

const AddressForm = ({ setFilds, nextStep }) => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: { city: '', street: '', appartament: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    setFilds((prev) => ({ ...prev, ...values }));
    nextStep('result');
  };

  const handleClickClear = () => {
    reset();
  };
  return (
    <div>
      <div className="row">
        <TextField
          className="text"
          name="city"
          label="Город"
          {...register('city')}
          fullWidth
          helperText={formState.errors.city && formState.errors.city.message}
          error={!!formState.errors.city}
        />
      </div>
      <div className="row">
        <TextField
          className="text"
          name="street"
          label="Улица"
          {...register('street')}
          fullWidth
          helperText={formState.errors.street && formState.errors.street.message}
          error={!!formState.errors.street}
        />
      </div>
      <div className="row">
        <TextField
          className="text"
          name="appartament"
          label="Квартира"
          {...register('appartament')}
          fullWidth
          helperText={formState.errors.appartament && formState.errors.appartament.message}
          error={!!formState.errors.appartament}
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

export default AddressForm;
