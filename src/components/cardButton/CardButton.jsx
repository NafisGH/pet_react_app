import Button from "../Button/Button";

function CardButton({ data }) {
  const { title, id } = data;
  return (
    <>
      <h2>AAAA</h2>
      <div>{title}</div>
      <div>{id}</div>
      <Button />
      {/* {children} */}
    </>
  );
}

export default CardButton;
