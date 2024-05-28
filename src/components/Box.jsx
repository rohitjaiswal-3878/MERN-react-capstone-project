import React from "react";

function Box({ data, selectedMovies, setSelectedMovies }) {
  const handleSelection = () => {
    if (selectedMovies.includes(data.category)) {
      setSelectedMovies((prev) => prev.filter((item) => item != data.category));
    } else {
      setSelectedMovies((prev) => [...prev, data.category]);
    }
  };
  return (
    <div
      style={{
        border: `2px solid ${
          selectedMovies.includes(data.category) ? "green" : "black"
        }`,
        padding: "10px",
        margin: "10px",
        width: "100px",
        height: "100px",
        display: "inline-block",
      }}
      onClick={handleSelection}
    >
      {data.category}
    </div>
  );
}

export default Box;
