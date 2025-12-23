import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="icon">Icon</div>
        <div>
          <ul className="navigate">
            <li>Поиск фильма</li>
            <li>Мои фильмы</li>
            <li>Войти</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
