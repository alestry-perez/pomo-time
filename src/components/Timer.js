import React, { useState } from 'react';

function Timer() {
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
    // let intervalId = setInterval(this.decreaseTimer, 1000);
    // this.props.onPlayStopTimer(true);
    // this.setState({
    //   intervalId: intervalId,
    // });
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
    // switch (this.state.timerSecond) {
    //   case 0:
    //     if (this.props.timerMinute === 0) {
    //       if (this.state.isSession) {
    //         this.setState({
    //           isSession: false,
    //         });
    //         this.props.toggleInterval(this.state.isSession);
    //       } else {
    //         this.setState({
    //           isSession: true,
    //         });
    //         this.props.toggleInterval(this.state.isSession);
    //       }
    //     } else {
    //       this.props.updateTimerMinute();
    //       this.setState({
    //         timerSecond: 59,
    //       });
    //     }
    //     break;
    //   default:
    //     this.setState((prevState) => {
    //       return {
    //         timerSecond: prevState.timerSecond - 1,
    //       };
    //     });
    //     break;
    // }
  }

  return (
    <section>
      <section className="timer-container">
        <h4>Session/Break</h4>
        <span className="timer">{}</span>
        <span className="timer">:</span>
        <span className="timer">{}</span>
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
