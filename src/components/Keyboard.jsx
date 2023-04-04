import React from "react";
import { useEffect } from "react";
// import {
//   playAb4,
//   playA4,
//   playC4,
//   playD4,
//   playE4,
//   playEb4,
//   playF4,
//   playG4,
//   playBb4,
//   playC5,
//   playGb4,
//   playB4,
//   playDb4,
//   playCb5,
//   playD5,
//   playE5,
// } from "../utils/keys";
import * as Tone from "tone";
import styles from './keyboard.module.css'

export default function Keyboard() {
  const synth = new Tone.Synth().toDestination();

  function handleKeyPress(event) {
    //javascript keyCode number was having a bit of issue
    if (event.key === 'a' ) {
      highLightKey('c4');
    }
    // if (event.key === "w") {
    //   playDb4();
    // }
    // if (event.key === "s" ) {
    //   playD4();
    // }
    // if (event.key === "d") {
    //   playE4();
    // }
    // if (event.key === "e") {
    //   playEb4();
    // }
    // if (event.key === "f") {
    //   playF4();
    // }
    // if (event.key === "t") {
    //   playGb4();
    // }
    // if (event.key === "g") {
    //   playG4();
    // }
    // if (event.key === "y") {
    //   playAb4();
    // }
    // if (event.key === "j") {
    //   playA4();
    // }
    // if (event.key === "h") {
    //   playB4();
    // }
    // if (event.key === "u") {
    //   playBb4();
    // }
    // if (event.key === "k") {
    //   playC5();
    // }
    // if (event.key === "i") {
    //   playCb5();
    // }
    // if (event.key === "l") {
    //   playD5();
    // }
    // if (event.key === ";") {
    //   playE5();
    // }
  }

  //problem 1, how to get keydown to work without the input
  // problem 2, how to connect the keydown to the style so that one the keypress everything glows
  // nothing is connected now, might need to refactor how everything looks in order to get it working....

  useEffect( () => {
  window.addEventListener('keydown', handleKeyPress)
  return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  function highLightKey(note) {
    console.log('I AM A NOTE', note)
    const element = document.getElementById(note)
    console.log('I AM AN ELEMENT', element)
    element.style.opacity = '.2'
    element.style.borderRadius = '15px'
    element.style.backgroundColor = 'red'
    const noteFreq = Tone.Frequency(note)
    synth.triggerAttackRelease(noteFreq, "8n");
    setTimeout(() => {
      element.style.opacity = '1'
      element.style.borderRadius = '0px'
      element.style.backgroundColor = 'white'
    }, 1000)
    

  }

  return (
     
    <div className={styles.piano}>
      <div className={styles.whiteKey} onKeyDown={handleKeyPress} tabIndex={0} id="c4">A</div>
      {/* <div className={styles.blackKey} onClick={playDb4}>W</div> */}


      {/* {/* <fieldset>
        <legend> Testing </legend>
        <label>Keyboard Form </label>
        <input type="text" onKeyPress={handleKeyPress} />
      </fieldset> */}
    </div>
  );
}
