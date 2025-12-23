import { useState } from "react";
import SearchInput from "../Search/SearchInput";

function Layout() {
  const placeholder = "Введите название";

  const [searchFilm, setSearchFilm] = useState("");

  return (
    <div>
      <SearchInput
        searchFilm={searchFilm}
        setSearchFilm={setSearchFilm}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Layout;
