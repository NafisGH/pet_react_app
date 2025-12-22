import "./button.css";

function Button({ titleButton, clicked }) {
  const titleClick = "Поиск";

  const pressBtn = () => {
    clicked(titleClick);
  };

  return (
    <button className="button" onClick={pressBtn}>
      {titleButton}
    </button>
  );
}

export default Button;
