import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

import api from '../../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/todos');
    }
  }, [navigate]);
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (name === '' || lastName === '' || email === '' || password === '') {
      return alert('Preencha todos os campos!');
    };

    if (password !== password2) {
      alert('As senhas digitadas não correspondem!');
    } else {
      const response = await api.post('/users', {
        name,
        email,
        password,
      });
  
      if (response.status === 200) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        alert('Login realizado com sucesso!');
        
        window.location.reload();
      } else {
        alert('Erro no login!');
      };
    };
  };

  return (
    <Container>
      <Form>
        <input
          name="name"
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Seu sobrenome"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          name="password2"
          type="password"
          placeholder="Confirme sua senha"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />

        <button type="button" onClick={handleSubmit}>Criar conta</button>
      </Form>
    </Container>
  );
};

export default Register;
