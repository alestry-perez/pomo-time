import React, { useState, useEffect } from 'react';
import '../App.css';

const Timer = (props) => {
  const [activeSession, setActiveSession] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [counter, setChangeCounter] = useState(0);

  const playButton = () => {
    let interval = setInterval(decreaseTimer, 500);
    setIntervalId(interval);
  };

  const stopButton = () => {
    clearInterval(intervalId);
  };

  const restartButton = () => {
    stopButton();
    props.resetTimer();
    setTimerSeconds(0);
  };

  const decreaseTimer = () => {
    switch (timerSeconds) {
      case 0:
        if (props.timerMinutes === 0) {
          if (activeSession) {
            setActiveSession(false);
          } else {
            setActiveSession(true);
          }
        } else {
          props.updateTimerMinutes();
          setTimerSeconds(59);
        }
        break;
      default:
        setTimerSeconds((prev) => prev - 1);
    }
  };

  return (
    <section>
      <section className="timer-container">
        <h4>{activeSession === true ? 'Session' : 'Break'}</h4>
        <span className="timer">{props.timerMinutes}</span>
        <span className="timer">:</span>
        <span className="timer">
          {timerSeconds === 0
            ? '00'
            : timerSeconds < 10
            ? '0' + timerSeconds
            : timerSeconds}
        </span>
      </section>
      <section className="timer-actions">
        <button onClick={playButton}>Play</button>
        <button onClick={stopButton}>Stop</button>
        <button onClick={restartButton}>Restart</button>
      </section>
    </section>
  );
};

export default Timer;
