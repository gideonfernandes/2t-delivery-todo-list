import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  width: 480px;
  border-radius: 8px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  > input {
    font-size: 16px;
    width: 100%;
    height: 60px;
    border-radius: 4px;
    margin: 8px 4px;
    padding: 8px;
    color: var(--gray-dark);
    background: var(--light-gray);
  }

  > button {
    width: 100%;
    height: 60px;
    margin: 24px 4px 0 4px;
    border-radius: 4px;
    color: var(--white);
    background: var(--secondary);
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
