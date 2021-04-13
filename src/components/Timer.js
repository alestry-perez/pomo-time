import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [isSession, setIsSession] = useState(true);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  let [intervalId, setIntervalId] = useState(0);
  // new code below
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isPlay, setIsPlay] = useState(false);

  function playButton() {
    intervalId = setInterval(decreaseTimer, 1000);
    // props.playStopTimer(true);
    setIntervalId(intervalId);
  }

  function stopButton() {
    clearInterval(intervalId);
    props.playStopTimer(false);
  }

  function restartButton() {
    props.stopTimer();
    props.timerRestart();
    props.playStopTimer(false);
    timerSeconds(0);
    isSession(true);
  }

  function decreaseTimer() {
    if (timerMinutes === 0 && timerSeconds === 0) {
      // reset
      setTimerSeconds(0);
      props.setTimerMinutes();
    } else {
      if (timerSeconds === 0) {
        setTimerMinutes((prev) => prev - 1);
        setTimerSeconds(59);
      } else {
        setTimerSeconds((prev) => prev - 1);
      }
    }
  }

  useEffect(() => {
    const token = setTimeout(decreaseTimer, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  // function decreaseTimer() {
  //   switch (timerSeconds) {
  //     case 0:
  //       if (props.timerMinutes === 0) {
  //         if (isSession) {
  //           setIsSession(false);
  //           props.toggleInterval(isSession);
  //         } else {
  //           setIsSession(true);
  //           props.toggleInterval(isSession);
  //         }
  //       } else {
  //         props.updateTimerMinutes();
  //         setTimerSeconds(59);
  //       }
  //       break;
  //     default:
  //       timerSeconds((timerSeconds) => timerSeconds - 1);
  //       break;
  //   }
  // }

  return (
    <section>
      <section className="timer-container">
        <h4>{isSession === true ? 'Session' : 'Break'}</h4>
        <span className="timer">{timerMinutes}</span>
        <span className="timer">:</span>
        <span className="timer">{timerSeconds}</span>
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
