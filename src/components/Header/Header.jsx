import style from "./Header.module.css";
import Navigate from "../Navigate/Navigate";

function Header() {
  return (
    <>
      <div className={style.header}>
        <img src="./logo_header.svg" width={48} height={48} />
        <Navigate />
      </div>
    </>
  );
}
export default Header;
