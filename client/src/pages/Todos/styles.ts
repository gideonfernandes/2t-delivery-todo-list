import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 40px 50px 40px;

  & > input {
    height: 46px;
    border-radius: 4px;
    background: var(--white);
    margin-right: 20px;
    padding-left: 12px;

    &::placeholder {
      color: var(--dark-gray);
      font-size: 15px;
    }
  }

  & > button {
    width: 180px;
    height: 46px;
    border-radius: 4px;
    color: var(--white);
    background: var(--secondary);
    font-size: 17px;
    cursor: pointer;
  }
`;
