import React from 'react';

const SessionLength = (props) => {
  return (
    <section>
      <h4>Session Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isActive === true ? 'disabled' : ''}
          onClick={props.decreaseSessionLength}
        >
          Down
        </button>
        <p className="interval-length">{props.sessionLength}</p>
        <button
          disabled={props.isActive === true ? 'disabled' : ''}
          onClick={props.increaseSessionLength}
        >
          Up
        </button>
      </section>
    </section>
  );
};

export default SessionLength;
