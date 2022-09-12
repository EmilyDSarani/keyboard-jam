import React from "react";
import {
  playAb4,
  playA4,
  playC4,
  playD4,
  playE4,
  playEb4,
  playF4,
  playG4,
  playBb4,
  playC5,
  playGb4,
  playB4,
  playDb4,
  playCb5,
  playD5,
  playE5,
} from "../utils/keys";

export default function Keyboard() {
  function handleKeyPress(event) {
    //javascript keyCode number was having a bit of issue
    if (event.key === 'a' ) {
      playC4();
    }
    if (event.key === "w") {
      playDb4();
    }
    if (event.key === "s" ) {
      playD4();
    }
    if (event.key === "d") {
      playE4();
    }
    if (event.key === "e") {
      playEb4();
    }
    //EB4
    if (event.key === "f") {
      playF4();
    }
    if (event.key === "t") {
      playGb4();
    }
    if (event.key === "g") {
      playG4();
    }
    if (event.key === "y") {
      playAb4();
    }
    if (event.key === "j") {
      playA4();
    }
    if (event.key === "h") {
      playB4();
    }
    if (event.key === "u") {
      playBb4();
    }
    if (event.key === "k") {
      playC5();
    }
    if (event.key === "i") {
      playCb5();
    }
    if (event.key === "l") {
      playD5();
    }
    if (event.key === ";") {
      playE5();
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
