import React from "react";

function Chip({ selectedMovie, setSelectedMovies }) {
  const handleSelection = () => {
    setSelectedMovies((prev) => prev.filter((item) => item != selectedMovie));
  };
  return (
    <span
      style={{
        border: "1px solid black",
        padding: "5px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "cneter",
      }}
    >
      {selectedMovie}&nbsp;&nbsp;
      <span
        onClick={handleSelection}
        style={{
          cursor: "pointer",
        }}
      >
        x
      </span>
    </span>
  );
}

export default Chip;
