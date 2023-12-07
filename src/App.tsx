import { useState } from "react";

import SearchForm from "./components/SearchImage/SearchForm";

function App() {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="py-10">
      <div className="flex justify-center mb-10">
        <SearchForm handleSubmit={handleSearch} />
      </div>
    </div>
  );
}

export default App;
