import React, { useState } from "react";
import SongsList from "./Components/SongsList";
import SelectedSong from './Components/SelectedSong';

const songs = [
  { title: "we are the one", duration: "4:45" },
  { title: "work work work", duration: "6:10" },
  { title: "give me everything", duration: "3:25" },
  { title: "before we go", duration: "2:30" },
];
const App = () => {
  const [selected, setSelected] = useState("");
 const toSetSelected=(song)=>{
setSelected(song);
 }
  return (
    <div>
      <div><SongsList toSetSelected={toSetSelected} songs={songs} /></div>
      <div><SelectedSong selected={selected}/></div> 
    </div>
  );
};
export default App;
