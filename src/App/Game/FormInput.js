import styled from "styled-components";

const Input = styled.input`
  border: none;
  padding: 10px 0px 10px 10px;
  border-radius: 5px;
  font-size: 1.3rem;
  width: 225px;
`;

const Para = styled.p`
  display: flex;
  column-gap: 10px;
  align-items: start;
  font-size: 1.1rem;
  flex-direction: column;
`;

function FormInput({ handleInput }) {
  return (
    <Para>
      <label htmlFor="userName">Name</label>
      <Input type="text" name="name" id="userName" onInput={handleInput} />
    </Para>
  );
}

export default FormInput;
