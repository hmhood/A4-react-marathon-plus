import React, { useState } from "react";
import Song from "./Song";

const SongCollection = (props) => {
  const [selectedSongId, setSelectedSongId] = useState(null);

  const songsList = props.songs.map((song) => {
    const handleClick = () => {
      setSelectedSongId(song.id);
    };

    let selectedStatus = false;
    if (selectedSongId === song.id) {
      selectedStatus = true;
    }

    return (
      <Song
        key={song.id}
        handleClick={handleClick}
        data={song}
        selectedStatus={selectedStatus}
      />
    );
  });
  return (
    <div className="cell small-6">
      <h1>Songs</h1>
      {songsList}
    </div>
  );
};
export default SongCollection;
