import React, { useState } from "react";
import Playlist from "./Playlist";

const PlaylistCollection = (props) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

  const playlistList = props.playlists.map((playlist) => {
    //wrapper/closure function to pass down to each playlist component
    const handleClick = () => {
      setSelectedPlaylistId(playlist.id);
    };
    // initialize a variable selectedStatus and set value to false, so that each playlist has a selectedStatus of false
    let selectedStatus = false;
    // if the playlist is the selected playlist that we are tracking in state then have it's selected Status = true
    if (selectedPlaylistId === playlist.id) {
      selectedStatus = true;
    }

    return (
      <Playlist
        key={playlist.id}
        data={playlist}
        selectedStatus={selectedStatus}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="cell small-6">
      <h1>Playlists</h1>
      {playlistList}
    </div>
  );
};

export default PlaylistCollection;
