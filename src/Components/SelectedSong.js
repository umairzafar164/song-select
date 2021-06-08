import React from "react";

const SelectedSong = (props) => {
  return (
    <div>
      Title:{props.selected.title}
      <br></br>Duration:{props.selected.duration}
    </div>
  );
};
export default SelectedSong;
