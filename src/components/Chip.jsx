import React from "react";

function Chip({ selectedMovie, setSelectedMovies }) {
  const handleSelection = () => {
    setSelectedMovies((prev) => prev.filter((item) => item != selectedMovie));
  };
  return (
    <span
      style={{
        padding: "7px 16px  7px 16px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "fle",
        width: "90px",
        backgroundColor: "#148A08",
      }}
    >
      {selectedMovie}&nbsp;&nbsp;
      <span
        onClick={handleSelection}
        style={{
          cursor: "pointer",
          color: "#085C00",
        }}
      >
        x
      </span>
    </span>
  );
}

export default Chip;
