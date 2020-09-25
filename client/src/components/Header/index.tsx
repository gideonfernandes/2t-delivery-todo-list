import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Container, Logo, MenuList, LogoutIcon } from './styles';

const Header: React.FC = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <Container>
      <Logo>2T Delivery TL</Logo>
      {!token ? (
        <MenuList>
          <Link to="/login">Fazer Login</Link>
          <Link to="/register">Registrar-se</Link>
        </MenuList>
      ) : (
        <LogoutIcon onClick={handleLogout} />
      )}
    </Container>
  );
};

export default Header;
