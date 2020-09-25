import styled from 'styled-components';
import { Md3DRotation } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 180px 12px 0 12px;

  & > h1 {
    font-size: 2.2rem;
    color: var(--dark-gray);
  }
`;

export const Loading = styled(Md3DRotation)`
  margin-left: 46px;
  fill: var(--secondary);
  width: 46px;
  height: 46px;
  flex-shrink: 0;
`;