import React, { useState } from "react";
import Box from "../components/Box";
import Chip from "../components/Chip";
import { useNavigate } from "react-router-dom";
import dangerIcon from "../assets/danger.png";
import ActionImg from "../assets/Action.png";
import DramaImg from "../assets/Drama.png";
import RomanceImg from "../assets/Romance.png";
import ThrillerImg from "../assets/Thriller.png";
import WesternImg from "../assets/Western.png";
import HorrorImg from "../assets/Horror.png";
import FantasyImg from "../assets/Fantasy.png";
import MusicImg from "../assets/Music.png";
import FictionImg from "../assets/Fiction.png";

function Genra() {
  const navigate = useNavigate();
  const movies = [
    {
      id: 0,
      category: "Action",
      url: ActionImg,
      bgColor: "#FF5209",
    },
    {
      id: 1,
      category: "Darma",
      url: DramaImg,
      bgColor: "#D7A4FF",
    },
    {
      id: 2,
      category: "Romance",
      url: RomanceImg,
      bgColor: "#148A08",
    },
    {
      id: 3,
      category: "Thriller",
      url: ThrillerImg,
      bgColor: "#84C2FF",
    },
    {
      id: 4,
      category: "Western",
      url: WesternImg,
      bgColor: "#902500",
    },
    {
      id: 5,
      category: "Horror",
      url: HorrorImg,
      bgColor: "#7358FF",
    },
    {
      id: 6,
      category: "Fantasy",
      url: FantasyImg,
      bgColor: "#FF4ADE",
    },
    {
      id: 7,
      category: "Music",
      url: MusicImg,
      bgColor: "#E61E32",
    },
    {
      id: 8,
      category: "Fiction",
      url: FictionImg,
      bgColor: "#6CD061",
    },
  ];
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        gap: "60px",
      }}
    >
      <div
        style={{
          width: "25%",
          height: "80%",
        }}
      >
        <h3
          style={{
            marginTop: "10px",
            fontFamily: "Single Day",
            fontSize: "3rem",
            fontWeight: "400",
            color: "#72DB73",
          }}
        >
          Super app
        </h3>

        <p
          style={{
            marginTop: "40px",
            fontSize: "45px",
            fontWeight: "650",
            lineHeight: "1.5",
          }}
        >
          Choose your entertainment category
        </p>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {selectedMovies.length > 0
            ? selectedMovies.map((movie, index) => (
                <Chip
                  key={index}
                  selectedMovie={movie}
                  setSelectedMovies={setSelectedMovies}
                />
              ))
            : null}
        </div>
        <p
          style={{
            color: "red",
            marginTop: "30px",
          }}
        >
          {selectedMovies.length < 3 ? (
            <img
              src={dangerIcon}
              style={{
                width: "18px",
                height: "18px",
              }}
            ></img>
          ) : null}
          {selectedMovies.length < 3 ? " Minimum 3 categories required" : null}
        </p>
      </div>
      <div
        style={{
          width: "400px",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: "10px",
            columnGap: "10px",
            height: "60%",
            width: "100%",
          }}
        >
          {movies.map((movie) => (
            <Box
              key={movie.id}
              data={movie}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          ))}
        </div>
        <button
          style={{
            margin: "20px",
            paddingTop: "5px",
            paddingBottom: "7px",
            width: "110px",
            borderRadius: "40px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            position: "fixed",
            bottom: "10px",
            right: "70px",
            fontSize: "15px",
          }}
          onClick={() => {
            if (selectedMovies.length < 3) {
              return;
            }
            localStorage.setItem(
              "selectedMovie",
              JSON.stringify(selectedMovies)
            );
            navigate("/info");
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Genra;
