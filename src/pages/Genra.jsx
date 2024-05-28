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
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
      <div
        style={{
          display: "flex",
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
      <p>
        {selectedMovies.length < 3 ? "Minimum 3 categories required" : null}
      </p>
      <button
        style={{
          margin: "20px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
        onClick={() => {
          if (selectedMovies.length < 3) {
            return;
          }
          localStorage.setItem("selectedMovie", JSON.stringify(selectedMovies));
          navigate("/info");
        }}
      >
        Next Page
      </button>
    </div>
  );
}

export default Genra;
