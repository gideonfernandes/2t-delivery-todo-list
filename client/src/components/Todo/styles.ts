import styled from 'styled-components';
import {MdEdit, MdDeleteForever} from 'react-icons/md';

export const Container = styled.div`
  border-radius: 4px;
  color: var(--white);
  background: var(--primary);
  margin: 18px;
  padding: 18px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid var(--secondary);
`;

export const EditForm = styled.form`
  & > input {
    width: 100%;
    height: 36px;
    margin: 6px 0;
    border-radius: 4px;
    padding-left: 8px;
  }

  & > button {
    width: 100%;
    height: 36px;
    border-radius: 4px;
    color: var(--white);
    background: var(--dark-gray);
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  color: var(--white);
  font-weight: 400;
  margin-bottom: 28px;
`;

export const TodoFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin: 0 8px;
    background: transparent;
  }
`;

export const Label = styled.div`
  height: 26px;
  border-radius: 4px;
  color: var(--white);
  background: var(--dark-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  padding: 6px 12px;
`;

export const EditIcon = styled(MdEdit)`
  fill: var(--white);
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const RemoveIcon = styled(MdDeleteForever)`
  fill: var(--white);
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  cursor: pointer;
`;