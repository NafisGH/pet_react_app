import "./Header.css";
import Navigate from "../Navigate/Navigate";

function Header() {
  return (
    <>
      <div className="header">
        <img src="./logo_header.svg" width={48} height={48} />
        <Navigate />
      </div>
    </>
  );
}
export default Header;
