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
    if (event.key === "A") {
      playC4();
    }
    if (event.key === "S") {
      playD4();
    }
    if (event.key === "D") {
      playAb4();
    }
    if (event.key === "F") {
      playF4();
    }
    if (event.key === "G") {
      playE4();
    }
    if (event.key === "H") {
      playG4();
    }
    if (event.key === "K") {
      playB4();
    }
    if (event.key === "T") {
      playGb4();
    }
    if (event.key === "J") {
      playBb4();
    }
    if (event.key === "E") {
      playDb4();
    }
    if (event.key === "W") {
      playC5();
    }
  }

  return (
    <div>
      <fieldset>
        <legend> Testing </legend>
        <label>Keyboard Form </label>
        <input type="text" onKeyPress={handleKeyPress} />
      </fieldset>
    </div>
  );
}
