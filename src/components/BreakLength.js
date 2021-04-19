import React from 'react';

const BreakLength = (props) => {
  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isActive === true ? 'disabled' : ''}
          onClick={props.decreaseBreakLength}
        >
          Down
        </button>
        <p className="interval-length">{props.breakLength}</p>
        <button
          disabled={props.isActive === true ? 'disabled' : ''}
          onClick={props.increaseBreakLength}
        >
          Up
        </button>
      </section>
    </section>
  );
};

export default BreakLength;
