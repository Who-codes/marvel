import React from "react";

export default function CardItems({ Title, Year, Type, Poster }) {
  return (
    <article className="card-items">
      <div className="img-container">
        <img
          src={
            Poster !== "N/A"
              ? Poster
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC"
          }
          alt={Title}
          className="poster"
        />
      </div>
      <div className="info">
        <h2 className="title">{Title}</h2>
        <h4>Year: {Year}</h4>
      </div>
      <span> {Type}</span>
    </article>
  );
}
