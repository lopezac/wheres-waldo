import { addDoc, collection } from "firebase/firestore";
import { useState, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { number } from "prop-types";

import { MapNameContext } from "../contexts/mapName";

function LogTimeModal({ time }) {
  const firebase = useOutletContext();
  const mapName = useContext(MapNameContext);

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
    <form>
      <label htmlFor="userName">
        Enter your name to save your score to leaderboards
      </label>
      <input type="text" name="name" id="userName" onInput={handleInput} />
      <button type="submit" onClick={handleSubmit}>
        Send
      </button>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </form>
  );
}

LogTimeModal.propTypes = {
  time: number,
};

export default LogTimeModal;
