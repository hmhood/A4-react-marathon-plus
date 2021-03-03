import React from "react";

const Song = (props) => {
  let className;
  if (props.selectedStatus) {
    className = "selected";
  }
  return (
    <p onClick={props.handleClick} className={className}>
      {props.data.artist}-{props.data.name}
    </p>
  );
};

export default Song;
