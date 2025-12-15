import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/Button/CardButton";
import Header from "./components/Header";
import Paragraf from "./components/Paragraf";

function App() {
  const titleHeader = "Поиск";
  const textParagraf =
    "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const titleButton = "Поиск";

  return (
    <>
      <Header title={titleHeader}></Header>
      <Paragraf searchParagraf={textParagraf} />
      <Button titleButton={titleButton} />
    </>
  );
}

export default App;
