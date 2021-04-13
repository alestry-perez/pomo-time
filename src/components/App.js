import React, { useState } from 'react';
import '../App.css';
import BreakTime from './BreakTime';
import SessionLength from './SessionLength';
import Timer from './Timer';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [isPlay, setIsPlay] = useState(false);

  // constructor() {
  //   super();

  //   this.state = {
  //     breakLength: 5,
  //     sessionLength: 25,
  //     timerMinute: 25,
  //     isPlay: false,
  //   };
  //   this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
  //   this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
  //   this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
  //   this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
  //   this.onToggleInterval = this.onToggleInterval.bind(this);
  //   this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
  //   this.onTimerRestart = this.onTimerRestart.bind(this);
  //   this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  // }

  function increaseBreakLength() {
    // this.setState((prevState) => {
    //   return {
    //     breakLength: prevState.breakLength + 1,
    //   };
    // });
  }

  function decreaseBreakLength() {
    // this.setState((prevState) => {
    //   return {
    //     breakLength: prevState.breakLength - 1,
    //   };
    // });
  }

  function increaseSessionLength() {
    // this.setState((prevState) => {
    //   return {
    //     sessionLength: prevState.sessionLength + 1,
    //     timerMinute: prevState.sessionLength + 1,
    //   };
    // });
  }

  function decreaseSessionLength() {
    // this.setState((prevState) => {
    //   return {
    //     sessionLength: prevState.sessionLength - 1,
    //     timerMinute: prevState.sessionLength - 1,
    //   };
    // });
  }

  function updateTimerMinutes() {
    // setTimerMinutes((timerMinutes) => timerMinutes - 1);
    // this.setState((prevState) => {
    //   return {
    //     timerMinute: prevState.timerMinute - 1,
    //   };
    // });
  }

  function toggleInterval() {
    if (Timer.isSession) {
      Timer.timerMinutes(sessionLength);
    } else {
      Timer.timerMinutes(breakLength);
    }
  }

  function timerRestart() {
    // timerMinute((sessionLength) => sessionLength);
    // this.setState({
    //   timerMinute: this.state.sessionLength,
    // });
  }

  function playStopTimer() {
    // setIsPlay((isPlay) => isPlay);
  }

  return (
    <main>
      <h2>Pomo Time</h2>
      <section className="interval-length-container">
        <BreakTime
        // isPlay={isPlay}
        // breakTime={breakLength}
        // increaseBreak={increaseBreakLength}
        // decreaseBreak={decreaseBreakLength}
        />
        <SessionLength
        // isPlay={isPlay}
        // sessionLength={sessionLength}
        // increaseSession={increaseSessionLength}
        // decreaseSession={decreaseSessionLength}
        />
      </section>
      <Timer
        timerMinutes={Timer.timerMinutes}
        breakLength={breakLength}
        updateTimerMinutes={updateTimerMinutes}
        toggleInterval={toggleInterval}
        timerRestart={timerRestart}
        playStopTimer={playStopTimer}
      />
    </main>
  );
}

export default App;
