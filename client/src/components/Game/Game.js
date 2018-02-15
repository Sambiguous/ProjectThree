import React from "react";
import "./Game.css";

const Game = props => {
  	return <div onClick={() => props.setClicked(props.id)} className="game" {...props} />;
};

export default Game;