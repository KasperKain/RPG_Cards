import { useRef, useState } from "react";
import "./app.css";
import Header from "./components/header/Header";
import Board from "./components/board/Board";

//props to pass data down (prop drilling)
//context provider
//useState

function App() {
  const [cards, setCards] = useState([]);

  // const [cardName, setCardName] = useState("asdf");
  // const [cardRace, setCardRace] = useState("NA");
  // const [cardSkills, setCardSkills] = useState("ERROR");
  const cardNameRef = useRef(null);
  const cardRaceRef = useRef(null);
  const cardSkillsRef = useRef(null);

  // const handleNameChange = (e) => {
  //   //setCardName(e.target.value);
  // };

  // const handleRaceChange = (e) => {
  //   //setCardRace(e.target.value);
  // };

  // const handleSkillsChange = (e) => {
  //   //setCardSkills(e.target.value);
  // };

  const handleSubmit = () => {
    const newCard = {
      name: cardNameRef.current.value,
      race: cardRaceRef.current.value,
      skills: cardSkillsRef.current.value,
    };

    const oldArr = [...cards, newCard];
    setCards(oldArr);

    console.log(cards);
  };

  return (
    <div className='App'>
      <button onClick={handleSubmit}>SUBMIT</button>
      <div className='Inputs'>
        <input placeholder='Character Name' ref={cardNameRef} />
        <input placeholder='Character Race' ref={cardRaceRef} />
        <input placeholder='Character Skills' ref={cardSkillsRef} />
      </div>
      <Board cards={cards} />
    </div>
  );
}

export default App;
