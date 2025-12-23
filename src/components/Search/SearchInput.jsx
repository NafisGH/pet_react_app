function SearchInput({ search, setSearchFilm, placeholder }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearchFilm(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default SearchInput;
