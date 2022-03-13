import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [filds, setFilds] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${filds.email}&password=${filds.password}`,
    );

    if (resp.ok) {
      const { token } = await resp.json();
      localStorage.setItem('token', token);
      navigate('/profile');
    } else {
      alert('Неверный логин или пароль');
    }
  };

  const handleChangeInput = (evt) => {
    setFilds({
      ...filds,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChangeInput}
          type="email"
          placeholder="Enter email"
          value={filds.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          onChange={handleChangeInput}
          type="password"
          placeholder="Password"
          value={filds.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
