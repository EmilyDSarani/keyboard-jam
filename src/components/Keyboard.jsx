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
    if (event.key === "w") {
      highLightKey('db4');
    }
    if (event.key === "s" ) {
      highLightKey('d4');
    }
    if (event.key === "d") {
    highLightKey('e4');
    }
    if (event.key === "e") {
      highLightKey('eb4');
    }
    if (event.key === "f") {
    highLightKey('f4');
    }
 
    if (event.key === "j") {
    highLightKey('a4');
    }
    if (event.key === "k") {
    highLightKey('ab4');
    }
    if (event.key === "u") {
      highLightKey('gb4');
    }
    if (event.key === "l") {
    highLightKey('b4');
    }
    if (event.key === "o") {
    highLightKey('bb4');
    }
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
    element.style.boxShadow = '0 0 60px 30px #fff,  0 0 100px 60px #f0f, 0 0 140px 90px #0ff'
    const noteFreq = Tone.Frequency(note)
    synth.triggerAttackRelease(noteFreq, "8n");
    setTimeout(() => {
      element.style.opacity = '1'
      element.style.borderRadius = '0px'
      element.style.boxShadow = 'none'
    }, 1000)
    

  }

  return (
     
    <div className={styles.piano}>
      <div className={styles.whiteKey} id="c4">A</div>
      <div className={styles.blackKey} id="db4">W</div>
      <div className={styles.whiteKey} id="d4">S</div>
      <div className={styles.blackKey} id="e4">D</div>
      <div className={styles.whiteKey} id="eb4">E</div>
      <div className={styles.blackKey} id="f4">F</div>
      <div className={styles.whiteKey} id="gb4">U</div>
      <div className={styles.whiteKey} id="ab4">K</div>
      <div className={styles.blackKey} id="a4">J</div>
      <div className={styles.whiteKey} id="b4">L</div>
      <div className={styles.blackKey} id="bb4">O</div>
    </div>
  );
}
