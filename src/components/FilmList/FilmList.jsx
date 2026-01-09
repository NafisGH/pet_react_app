import { useState } from "react";
import CardFilm from "../CardFilm/CardFilm";
import "./FilmList.css";

export default function FilmList() {
  const arayListFilm = [
    {
      id: 1,
      src: "./Black_widow.webp",
      nameFilm: "Black_widow",
      like: "./like.svg",
      chosen: "В избранное",
    },
    {
      id: 2,
      src: "./Black_widow.webp",
      nameFilm: "Black_widow",
      like: "./like.svg",
      chosen: "В избранное",
    },
    {
      id: 3,
      src: "./Black_widow.webp",
      nameFilm: "Black_widow",
      like: "./like.svg",
      chosen: "В избранное",
    },
    {
      id: 4,
      src: "./Black_widow.webp",
      nameFilm: "Black_widow",
      like: "./like.svg",
      chosen: "В избранное",
    },
  ];

  const [cards, setCards] = useState(arayListFilm);
  return (
    <div className="film-list">
      {cards.map((film) => (
        <CardFilm
          key={film.id}
          src={film.src}
          nameFilm={film.nameFilm}
          like={film.like}
          chosen={film.chosen}
        />
      ))}
    </div>
  );
}
