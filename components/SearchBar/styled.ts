import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${({ theme }) => theme.color.backgroundBeige};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 16px;
  padding: 0 20px;
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  padding-right: 10px;
`;
