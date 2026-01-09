import "./Input.css";

function Input({ searchFilm, setSearchFilm, placeholder }) {
  return (
    <>
      <input
        className="input"
        value={searchFilm}
        onChange={(e) => setSearchFilm(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
