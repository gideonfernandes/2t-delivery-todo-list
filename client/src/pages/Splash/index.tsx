import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Loading } from './styles';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/todos');
    } else {
      navigate('/login')
    }
  }, [navigate]);

  return (
    <Container>
      <h1>Carregando...</h1>
      <Loading />
    </Container>
  );
};

export default Splash;
