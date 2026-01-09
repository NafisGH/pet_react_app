import "./button.css";

function Button({ titleButton, clicked }) {
  const pressBtn = () => {
    clicked();
  };

  return (
    <button className="button" onClick={pressBtn}>
      {titleButton}
    </button>
  );
}

export default Button;
