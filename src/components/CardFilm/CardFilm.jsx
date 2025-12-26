import "./CardFilm.css";

export default function CardFilm({ src, nameFilm, like, chosen }) {
  return (
    <div className="card-film">
      <img src={src} alt="foto filn" />
      <h3>{nameFilm}</h3>
      <div className="card-film_blocklike-chosen">
        <img className="icon-like" src={like} />
        <div>{chosen}</div>
      </div>
    </div>
  );
}
