import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function LogTimeModal({ time }) {
  const [isOpen, setIsOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const firebase = useOutletContext();

  function handleClose() {
    setIsOpen(false);
  }

  function handleInput(event) {
    setUserName(event.target.value);
  }

  async function handleSubmit() {
    handleClose();
    await addDoc(collection(firebase.db(), "leaderboards"), {
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

export default LogTimeModal;
