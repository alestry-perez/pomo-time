import React, { useState } from 'react';
import '../App.css';
import BreakTime from './BreakTime';
import SessionLength from './SessionLength';
import Timer from './Timer';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
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

  function updateTimerMinute() {
    // this.setState((prevState) => {
    //   return {
    //     timerMinute: prevState.timerMinute - 1,
    //   };
    // });
  }

  function toggleInterval() {
    // if (isSession) {
    //   this.setState({
    //     timerMinute: this.state.sessionLength,
    //   });
    // } else {
    //   this.setState({
    //     timerMinute: this.state.breakLength,
    //   });
    // }
  }

  function timerRestart() {
    // this.setState({
    //   timerMinute: this.state.sessionLength,
    // });
  }

  function playStopTimer() {
    // this.setState({
    //isPlay: isPlay,
    // });
  }

  return (
    <main>
      <h2>Pomo Time</h2>
      <section className="interval-length-container">
        <BreakTime
        // isPlay={this.state.isPlay}
        // breakTime={this.state.breakLength}
        // increaseBreak={this.onIncreaseBreakLength}
        // decreaseBreak={this.onDecreaseBreakLength}
        />
        <SessionLength
        // isPlay={isPlay}
        // sessionLength={this.state.sessionLength}
        // increaseSession={this.onIncreaseSessionLength}
        // decreaseSession={this.onDecreaseSessionLength}
        />
      </section>
      <Timer
      // timerMinute={this.state.timerMinute}
      // breakLength={this.state.breakLength}
      // updateTimerMinute={this.onUpdateTimerMinute}
      // toggleInterval={this.onToggleInterval}
      // timerRestart={this.onTimerRestart}
      // onPlayStopTimer={this.onPlayStopTimer}
      />
    </main>
  );
}

export default App;
