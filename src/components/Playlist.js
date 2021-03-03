import React from "react";

const Playlist = (props) => {
  let className;
  if (props.selectedStatus) {
    className = "selected";
  }
  return (
    <p className={className} onClick={props.onClick}>
      {props.data.name}
    </p>
  );
};

export default Playlist;
