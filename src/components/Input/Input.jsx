import style from "./Input.module.css";

function Input({ searchFilm, setSearchFilm, placeholder }) {
  return (
    <>
      <input
        className={style.input}
        value={searchFilm}
        onChange={(e) => setSearchFilm(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
