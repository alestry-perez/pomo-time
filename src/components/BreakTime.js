import React, { useState } from 'react';

function BreakTime(props) {
  const [count, setCount] = useState(5);

  function decreaseCount() {
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={decreaseCount}
        >
          Down
        </button>
        <p className="interval-length">{count}</p>
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={increaseCount}
        >
          Up
        </button>
      </section>
    </section>
  );
}

export default BreakTime;
