import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Timer = (props) => {
  const [playing, setPlaying] = useState(false);
  const [[timerMinutes, timerSeconds], setTimer] = useState([25, 0]);
  /*const [[breakTimerMinutes, breakTimerSeconds], setBreakTimer] = useState([
    5,
    0,
  ]);*/
  const timerId = useRef(0);

  const playButton = () => {
    setPlaying(true);
  };

  const pauseButton = () => {
    setPlaying(false);
  };

  const restartButton = () => {
    setPlaying(false);
    setTimer([25, 0]);
    // setBreakTimer([5, 0]);
  };

  useEffect(() => {
    if (playing) {
      if (!timerMinutes && !timerSeconds) setPlaying(false);

      timerId.current = setTimeout(() => {
        setTimer(([min, sec]) => {
          const newSec = !sec ? 60 : sec - 1;
          const newMin = !sec ? min - 1 : min;

          return [newMin > 0 ? newMin : 0, newSec];
        });
      }, 1000);
    }

    return () => clearTimeout(timerId.current);
  }, [playing, timerMinutes, timerSeconds]);

  return (
    <section>
      <section className="timer-container">
        <h4>{playing ? 'Session' : 'Break'}</h4>
        <span className="timer">{timerMinutes}</span>
        <span className="timer">:</span>
        <span className="timer">
          {!timerSeconds || timerSeconds === 60
            ? '00'
            : timerSeconds < 10
            ? '0' + timerSeconds
            : timerSeconds}
        </span>
      </section>
      <section className="timer-actions">
        <button onClick={playButton}>Play</button>
        <button onClick={pauseButton}>Pause</button>
        <button onClick={restartButton}>Restart</button>
      </section>
    </section>
  );
};

export default Timer;
