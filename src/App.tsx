import { AnimalType } from "./libs/enum";
import { useState } from "react";
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
      <div className="head bg-black w-10 h-10"></div>
      <div>
        <button onClick={addAnimal} className="mb-20 pt-10">
          CLick
        </button>
      </div>
      {animals.map((animal) => (
        <AnimalFigure type={animal} />
      ))}
    </>
  );
}

export default App;
