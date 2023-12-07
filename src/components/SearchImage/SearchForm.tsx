import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface Props {
  handleSubmit: (inputValue: string) => void;
}

function SearchForm({ handleSubmit }: Props) {
  const [inputValue, setInputValue] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    handleSubmit(inputValue);
  }

  function handleInput(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;

    setInputValue(value);
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-2">
      <input
        value={inputValue}
        onChange={handleInput}
        className="px-1 py-2 border border-black rounded-md"
      />
      <button className="button rounded-md">Submit</button>
    </form>
  );
}

export default SearchForm;
