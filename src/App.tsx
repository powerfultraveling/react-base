import { AnimalType } from "./libs/enum";
import { useState } from "react";
import "./App.css";
import AnimalFigure from "./components/AnimalFigure";

function App() {
  const [animals, setAnimals] = useState([]);
  const animalTypes = [AnimalType.CAT, AnimalType.COW, AnimalType.BIRD];

  function addAnimal() {
    const randomAnimal =
      animalTypes[Math.floor(Math.random() * animalTypes.length)];

    setAnimals([...animals, randomAnimal]);
  }

  return (
    <>
      {animals}
      <div>
        <button onClick={addAnimal}>CLick</button>
      </div>
      {animals.map((animal) => (
        <AnimalFigure type={animal} />
      ))}
    </>
  );
}

export default App;
