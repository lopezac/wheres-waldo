import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { number } from "prop-types";
import styled from "styled-components";

import FormBtns from "./FormBtns";
import FormInput from "./FormInput";

const StyledForm = styled.form(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  background-color: ${theme.lightRed};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5px;
`
);

const Title = styled.h3`
  align-self: center;
  font-size: 1.5rem;
  margin: 0 0 0 0;
`;

function LogTimeModal({ time }) {
  const firebase = useOutletContext();
  const mapName = useParams().mapName;

  const [isOpen, setIsOpen] = useState(true);
  const [userName, setUserName] = useState("");

  function handleClose() {
    setIsOpen(false);
  }

  function handleInput(event) {
    setUserName(event.target.value);
  }

  async function handleSubmit() {
    handleClose();
    await addDoc(collection(firebase.db(), `albums/${mapName}/leaderboards`), {
      name: userName,
      time: time,
    });
  }

  if (!isOpen) return null;

  return (
    <StyledForm>
      <Title htmlFor="userName">Save score</Title>
      <FormInput handleInput={handleInput} />
      <FormBtns handleClose={handleClose} handleSubmit={handleSubmit} />
    </StyledForm>
  );
}

LogTimeModal.propTypes = {
  time: number,
};

export default LogTimeModal;
