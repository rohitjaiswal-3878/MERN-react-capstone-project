import React, { useState } from "react";
import Box from "../components/Box";
import Chip from "../components/Chip";
import { useNavigate } from "react-router-dom";

function Genra() {
  const navigate = useNavigate();
  const movies = [
    {
      id: 0,
      category: "Action",
    },
    {
      id: 1,
      category: "Darma",
    },
    {
      id: 2,
      category: "Romance",
    },
    {
      id: 3,
      category: "Thriller",
    },
    {
      id: 4,
      category: "Western",
    },
    {
      id: 5,
      category: "Horror",
    },
    {
      id: 6,
      category: "Fantasy",
    },
    {
      id: 7,
      category: "Fiction",
    },
    {
      id: 8,
      category: "Music",
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
      }}
    >
      <div
        style={{
          border: "1px solid white",
          width: "25%",
          height: "80%",
        }}
      >
        <h3
          style={{
            marginTop: "10px",
            fontFamily: "Single Day",
            fontSize: "2.8rem",
            fontWeight: "400",
            color: "#72DB73",
          }}
        >
          Super app
        </h3>

        <p
          style={{
            marginTop: "40px",
            fontSize: "40px",
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
          {selectedMovies.length < 4
            ? "⚠︎ Minimum 3 categories required"
            : null}
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid white",
          width: "45%",
          height: "80%",
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
            right: "10px",
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
