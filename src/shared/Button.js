import styled from "styled-components";

export const Btn = styled.button(
  ({ theme }) => `
  border: none;
  background-color: ${theme.darkBlue};
  color: ${theme.white};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
`
);
