import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Paragraf from "./components/Paragraf";

function App() {
  const textParagraf =
    "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const titleButton = "Поиск";

  const handleButtonClick = (click) => {
    console.log(click);
  };

  return (
    <>
      <Header />
      <Layout />
      <Paragraf searchParagraf={textParagraf} />
      <div>
        <Button titleButton={titleButton} clicked={handleButtonClick}></Button>
      </div>
    </>
  );
}

export default App;
