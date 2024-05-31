'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';

export default function Title() {
  const [text, setText] = useState(''); // Defining a useState for the texts
  const phrases = [
    'Hello World!',
    "I'm Leonard",            // This is a constant variable containing array 
    'Welcome To My Website!',
  ];
  useEffect(() => {       // Defining a useEffect to make the animation
    let currentIndex = 0; // To keep a track of which letters should be displayed
    let currentText = ''; // To display the text
    let intervalID;
    let isDeleting = false;

    const type = () => {
      if (currentIndex < phrases.length) { // currentIndex is currently holding 0 as a value, if currentIndex is below 3 (in which is the total elements of the phrases array) it will execute the code
        if (currentText.length < phrases[currentIndex].length && isDeleting == false) { // currentText is currently 0 and the length of the first array is greater than one and isDeleting is false
          currentText = phrases[currentIndex].substring(0, currentText.length + 1);
        }
        else if (currentText.length > 0 && isDeleting == true) {
          currentText = phrases[currentIndex].substring(0, currentText.length - 1);
          if (currentText.length === 0) {
            currentIndex = (currentIndex + 1) % phrases.length;
          }
        }
        else {
          isDeleting = false;
        }
        if (currentText.length === phrases[currentIndex].length) {
          setTimeout(
            () => {
              isDeleting = true;
            }, 2000
          );
        }
      }
      setText(currentText);
    };
    intervalID = setInterval(type, 125);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div className={styles.titleDiv}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}