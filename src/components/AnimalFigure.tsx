import { useState } from "react";

import bird from "/src/assets/animals/bird.svg";
import cat from "/src/assets/animals/cat.svg";
import cow from "/src/assets/animals/cow.svg";
import heart from "/src/assets/animals/heart.svg";

enum AnimalType {
  BIRD = "bird",
  CAT = "cat",
  COW = "cow",
}

const animalsIcon = {
  [AnimalType.BIRD]: bird,
  [AnimalType.CAT]: cat,
  [AnimalType.COW]: cow,
};

interface Props {
  type: AnimalType;
}

function AnimalFigure({ type }: Props) {
  const DEFAULT_ANIMAL = animalsIcon[AnimalType.CAT];
  const activeAnimal = animalsIcon[type] || DEFAULT_ANIMAL;

  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      <img src={activeAnimal} style={{ width: "100px" }} />
      <img src={heart} style={{ width: `${10 + count * 10}px` }} />
    </div>
  );
}

export default AnimalFigure;
