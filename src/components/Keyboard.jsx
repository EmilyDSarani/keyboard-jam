import React from "react";
import {
  playAb4,
  playC4,
  playD4,
  playE4,
  playF4,
  playG4,
  playBb4,
  playC5,
  playGb4,
  playB4,
  playDb4,
} from "../utils/keys";

export default function Keyboard() {
  function handleKeyPress(event) {
    //javascript keydown was having a bit of issue
    if (event.key === 'a' || 'A') {
      playC4();
    }
    if (event.key === "s" || 'S') {
      playD4();
    }
    if (event.key === "d") {
      playAb4();
    }
    if (event.key === "f") {
      playF4();
    }
    if (event.key === "g") {
      playE4();
    }
    if (event.key === "h") {
      playG4();
    }
    if (event.key === "j") {
      playB4();
    }
    if (event.key === "l") {
      playGb4();
    }
    if (event.key === ";") {
      playBb4();
    }
    if (event.key === "'") {
      playDb4();
    }
    if (event.key === "q") {
      playC5();
    }
  }

  return (
    <div>
      <h1>Keyboard Jam</h1>
      <div onKeyDown={handleKeyPress}></div>
      <fieldset>
        <legend> Testing </legend>
        <label>Keyboard Form </label>
        <input type="text" onKeyPress={handleKeyPress} />
      </fieldset>
    </div>
  );
}
