import { useState, useEffect } from "react";
import Player from "./Player";
import bg from "../bg.jpg";

import { useLocation } from "react-router-dom";

function Meditation() {
  let location = useLocation();
  const locationVariable = location.pathname.split("/");
  console.log(locationVariable);
  const [songs] = useState([
    {
      title: "Mindfullness",
      artist: "Help Guide",
      img_src: "/images/song-3.jpg",
      src: "/audioFile/song1.mp3",
      category: "stress",
      time: 5,
    },
    {
      title: "Breathing Meditation",
      artist: "Help Guide",
      img_src: "/images/song-4.jpg",
      src: "/audioFile/song2.mp3",
      category: "mindfullness",
      time: 5,
    },
    {
      title: "Breathing Meditation",
      artist: "Help Guide",
      img_src: "/images/song-2.jpg",
      src: "/audioFile/song3.mp3",
      category: "anxiety",
      time: 5,
    },
  ]);

  const selectedSongs = songs.filter((s) => {
    return s.category == locationVariable[2];
  });
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
    <div className="row" style={{ background: "white", height: "100%" }}>
      <div className="col-md-4">
        <div
          className="card"
          style={{
            zIndex: "1",
            width: "80%",
            height: "100%",
            borderRadius: "0px",
            background: "#755139FF",
          }}
        >
          <div className="card-body">
            <h4
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Play List
            </h4>
            <br />
            {selectedSongs.map((s) => {
              return (
                <div className="mt-3">
                  <div className="row" style={{}}>
                    <div className="col-3">
                      <img
                        src={s.img_src}
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "30px",
                        }}
                      />
                    </div>
                    <div className="col" style={{ color: "white" }}>
                      <h5 className="card-title">{s.title}</h5>
                      <p
                        className="card-text"
                        style={{
                          marginTop: "-10px",
                          fontSize: "14px",
                          marginBottom: "10px",
                        }}
                      >
                        {s.artist} ( {s.time}:00 ) Mins
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="app col" style={{ marginLeft: "-130px" }}>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={selectedSongs}
        />
      </div>
    </div>
  );
}

export default Meditation;
