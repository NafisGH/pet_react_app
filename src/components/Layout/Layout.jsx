import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Layout.css";

function Layout() {
  const placeholder = "Введите название";

  const [searchFilm, setSearchFilm] = useState("");

  return (
    <div className="search-block">
      <h1>Поиск</h1>
      <div className="title_search">
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </div>
      <div className="search-btn">
        <Input
          searchFilm={searchFilm}
          setSearchFilm={setSearchFilm}
          placeholder={placeholder}
        />
        <Button titleButton="Искать"></Button>
      </div>
    </div>
  );
}

export default Layout;
