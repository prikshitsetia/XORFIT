import { useState, useEffect } from "react";
import Player from "./Player";

function Meditation() {
  const [songs] = useState([
    {
      title: "Mindfullness",
      artist: "Help Guide",
      img_src: "./images/song-1.jpg",
      src: "./audioFile/song1.mp3",
      time: 5,
    },
    {
      title: "Breathing Meditation",
      artist: "Help Guide",
      img_src: "./images/song-2.jpg",
      src: "./audioFile/song2.mp3",
      time: 10,
    },
    {
      title: "Breathing Meditation",
      artist: "Help Guide",
      img_src: "./images/song-2.jpg",
      src: "./audioFile/song3.mp3",
      time: 5,
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
    <div className="row">
      <div class="card text-white bg-primary mb-3 col">
        <div class="card-header"> Play List</div>
        <div class="card-body">
          {songs.map((s) => {
            return (
              <div className="mt-3">
                <h5 class="card-title">{s.title}</h5>
                <p class="card-text">
                  {s.artist} {s.time}:00
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="app col">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default Meditation;
