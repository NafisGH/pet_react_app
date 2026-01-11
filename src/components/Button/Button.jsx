import style from "./Button.module.css";

function Button({ titleButton, clicked }) {
  const pressBtn = () => {
    clicked();
  };

  return (
    <button className={style.button} onClick={pressBtn}>
      {titleButton}
    </button>
  );
}

export default Button;
