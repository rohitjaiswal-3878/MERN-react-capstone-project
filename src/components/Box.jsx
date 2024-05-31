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
        border: `3px solid ${
          selectedMovies.includes(data.category) ? "#11B800" : "black"
        }`,
        padding: "10px",
        margin: "0px",
        width: "115px",
        height: "110px",
        display: "inline-block",
        backgroundColor: data.bgColor,
        borderRadius: "15px",
      }}
      onClick={handleSelection}
    >
      <span
        style={{
          fontSize: "19px",
        }}
      >
        {data.category}
      </span>
      <img
        src={data.url}
        alt={data.category}
        style={{
          objectFit: "contain",
          width: "100%",
          marginTop: "19px",
        }}
      />
    </div>
  );
}

export default Box;
