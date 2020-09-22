import styled from 'styled-components';
import { MdLockOutline } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  color: var(--light-gray);
  background: var(--primary);
  border-bottom: 1px solid var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding: 20px 30px;
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
`;

export const MenuList = styled.ul`
  display: flex;

  & > a {
    color: var(--white);
    margin: 0 14px;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }
`;

export const LogoutIcon = styled(MdLockOutline)`
  fill: var(--white);
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
