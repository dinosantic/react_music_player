import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
