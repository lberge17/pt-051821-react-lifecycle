import React from 'react';

export default function Navbar(props) {
  return <div>
      <button onClick={props.changePage}>Counter</button>
      <button onClick={props.changePage}>Timer</button>
      <button onClick={props.changePage}>Planets</button>
  </div>;
}
