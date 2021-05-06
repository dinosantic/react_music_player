import React from "react";
import { playAudio } from "../utils";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  id,
  setCurrentSong,
  isPlaying,
  audioRef,
}) => {
  const songChangeHandler = () => {
    setCurrentSong(song);
    // add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if song is playing
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songChangeHandler}
      className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
