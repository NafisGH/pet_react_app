import "./App.css";
import Button from "./components/Button/Button";
// import CardButton from "./components/Button/CardButton";
import Header from "./components/Layout/Layout";
import Input from "./components/Search/Search";
import Paragraf from "./components/Paragraf";

function App() {
  const textParagraf =
    "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const titleButton = "Поиск";
  const placeholder = "Введите название";

  const handleButtonClick = (click) => {
    console.log(click);
  };

  return (
    <>
      <Header />
      <Paragraf searchParagraf={textParagraf} />
      <div>
        <Input placeholder={placeholder} />
        <Button titleButton={titleButton} clicked={handleButtonClick}></Button>
      </div>
    </>
  );
}

export default App;
