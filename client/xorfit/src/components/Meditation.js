import { useState, useEffect } from "react";
import Player from "./Player";

function Meditation() {
  const [songs] = useState([
    {
      title: "Meethi Boliyan",
      artist: "Amit Trivedi",
      img_src: "./images/song-1.jpg",
      src: "./audioFile/song1.mp3",
    },
    {
      title: "Shukr Tera",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./audioFile/song2.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="app">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default Meditation;
