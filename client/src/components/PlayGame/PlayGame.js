import React from "react";
import "./PlayGame.css";

const PlayGame = props =>

  <form className="playgame">
    <div className="form-group">
      <h3> Join a game ? </h3>
      <input
        value={props.playgame}
        type="text"
        className="form-control"
        placeholder="GAME CODE"
        id="joingame-input"
      />

      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="join-btn"
      >
        Play!
      </button>
    </div>
  </form>;

export default PlayGame;
