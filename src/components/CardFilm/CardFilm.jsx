import style from "./CardFilm.module.css";

export default function CardFilm({ src, nameFilm, like, chosen }) {
  return (
    <div className={style["card-film"]}>
      <img src={src} alt="foto filn" />
      <h3>{nameFilm}</h3>
      <div className={style["card-film_blocklike-chosen"]}>
        <img className={style["icon-like"]} src={like} />
        <div>{chosen}</div>
      </div>
    </div>
  );
}
