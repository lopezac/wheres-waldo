import styled from "styled-components";

import { Btn } from "../../shared/Button";

const ButtonsPara = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 9px 0 5px 0;
`;

function FormBtns({ handleSubmit, handleClose }) {
  return (
    <ButtonsPara>
      <Btn type="submit" onClick={handleSubmit}>
        Send
      </Btn>
      <Btn type="button" onClick={handleClose}>
        Close
      </Btn>
    </ButtonsPara>
  );
}

export default FormBtns;
