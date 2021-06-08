import React, { useState } from "react";
const SongsList = (props) => {
  const handleSelect=(song)=>{
   props.toSetSelected(song);
  }
  const renderedList = props.songs.map((song) => {
    return (
      <div>
        <div>{song.title}</div>
        <br></br>
        <div>
          {song.duration} <button onClick={()=>{handleSelect(song)}}>Select</button>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  });
  return (
    <div>
      <div>{renderedList}</div>
    </div>
  );
};
export default SongsList;
