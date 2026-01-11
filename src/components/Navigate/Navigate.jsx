import style from "./Navigate.module.css";

export default function Navigate() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav_list}>Поиск фильмов</div>
        <div className={style.nav_list}>Иои фильмы</div>
        <div className={style.nav_list}>Войти</div>
      </nav>
    </>
  );
}
