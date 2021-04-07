import React from 'react';

function BreakTime(props) {
  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval-container">
        <button>Down</button>
        <p className="interval-length">{props.breakTime}</p>
        <button>Up</button>
      </section>
    </section>
  );
}

export default BreakTime;
