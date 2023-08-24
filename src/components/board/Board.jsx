// imports

import "./board.css";
import Card from "../card/Card";
import { useEffect, useState } from "react";

// main body
export default (props) => {
  console.log(props);
  return (
    <div className='Board'>
      <ul>
        {props.cards.map((cardInfo) => {
          return <Card name={cardInfo.name} race={cardInfo.race} />;
        })}
      </ul>
    </div>
  );
};

// function Board() {
//     return <div className='Board'></div>
// }
// export default Board;
