import React, { useState, useEffect } from 'react';
import '../App.css';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
import Timer from './Timer';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinutes, setTimerMinutes] = useState(25);

  const increaseBreakLength = () => {
    setBreakLength(breakLength + 1);
  };
  const decreaseBreakLength = () => {
    setBreakLength(breakLength - 1);
  };

  const increaseSessionLength = () => {
    setSessionLength(sessionLength + 1);
    setTimerMinutes(sessionLength);
  };
  const decreaseSessionLength = () => {
    setSessionLength(sessionLength - 1);
    setTimerMinutes(sessionLength);
  };
  console.log(sessionLength);

  const updateTimerMinutes = () => {
    setTimerMinutes(timerMinutes - 1);
  };

  const toggleInterval = (playing) => {
    if (playing) {
      setTimerMinutes(sessionLength);
    } else {
      setTimerMinutes(breakLength);
    }
  };
  const resetTimer = () => {
    setTimerMinutes(sessionLength);
  };

  return (
    <main>
      <h2>Pomo Time</h2>
      <section className="interval-length-container">
        <BreakLength
          increaseBreak={increaseBreakLength}
          decreaseBreak={decreaseBreakLength}
          breakLength={breakLength}
        />
        <SessionLength
          increaseSessionLength={increaseSessionLength}
          decreaseSessionLength={decreaseSessionLength}
          sessionLength={sessionLength}
        />
      </section>
      <Timer
        timerMinutes={timerMinutes}
        breakLength={breakLength}
        updateTimerMinutes={updateTimerMinutes}
        resetTimer={resetTimer}
        toggleInterval={toggleInterval}
      />
    </main>
  );
}

export default App;
