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
        <h3 className="title">{Title}</h3>
        <p>Year: {Year}</p>
        <p>Type: {Type}</p>
      </div>
    </article>
  );
}
