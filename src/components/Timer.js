import React, { useState } from 'react';

function Timer(props) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  // constructor() {
  //   super();

  //   this.state = {
  //     isSession: true,
  //     timerSecond: 0,
  //     intervalId: 0,
  //   };

  //   this.playTimer = this.playTimer.bind(this);
  //   this.stopTimer = this.stopTimer.bind(this);
  //   this.restartTimer = this.restartTimer.bind(this);
  //   this.decreaseTimer = this.decreaseTimer.bind(this);
  // }

  function playButton() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalId: intervalId,
    });
  }

  function stopButton() {
    // clearInterval(this.state.intervalId);
    // this.props.onPlayStopTimer(false);
  }

  function restartButton() {
    // this.stopTimer();
    // this.props.timerRestart();
    // this.props.onPlayStopTimer(false);
    // this.setState({
    //   timerSecond: 0,
    //   isSession: true,
    // });
  }

  function decreaseTimer() {
    switch (timerSecond) {
      case 0:
        if (props.timerMinute === 0) {
          if (isSession) {
            isSession(false);
            props.toggleInterval(isSession);
          } else {
            isSession(true);
            props.toggleInterval(isSession);
          }
        } else {
          props.updateTimerMinute();
          timerSecond(59);
        }
        break;
      default:
        timerSecond((timerSecond) => timerSecond - 1);
        break;
    }
  }

  return (
    <section>
      <section className="timer-container">
        <h4>{isSession === true ? 'Session' : 'Break'}</h4>
        <span className="timer">{props.timerMinute}</span>
        <span className="timer">:</span>
        <span className="timer">
          {timerSecond === 0
            ? '00'
            : timerSecond < 10
            ? '0' + timerSecond
            : timerSecond}
        </span>
      </section>
      <section className="timer-actions">
        <button onClick={playButton}>Play</button>
        <button onClick={stopButton}>Stop</button>
        <button onClick={restartButton}>Restart</button>
      </section>
    </section>
  );
}

export default Timer;
