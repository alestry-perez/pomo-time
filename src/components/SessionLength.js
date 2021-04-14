import React, { useState } from 'react';

const SessionLength = (props) => {
  const [count, setCount] = useState(25);

  function decreaseCount() {
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <section>
      <h4>Session Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isActive === true ? 'disabled' : ''}
          onClick={decreaseCount}
        >
          Down
        </button>
        <p className="interval-length">{count}</p>
        <button
          disabled={props.isActive === true ? 'disabled' : ''}
          onClick={increaseCount}
        >
          Up
        </button>
      </section>
    </section>
  );
};

export default SessionLength;
