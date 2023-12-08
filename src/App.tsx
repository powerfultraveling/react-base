import { v4 as uuid } from "uuid";
import { useState } from "react";

import type { Book } from "./libs/types";

import SearchForm from "./components/SearchImage/SearchForm";
import BookList from "./components/Book/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  function buildBook(title: string) {
    const id = uuid();

    return {
      id,
      title,
    };
  }

  function addBook(title: string) {
    const book = buildBook(title);

    const updatedBooks = [...books, book];

    setBooks(updatedBooks);
  }

  function editBook(id: string, title: string) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title,
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  return (
    <div className="px-10 py-10">
      <div className="flex justify-center mb-10">
        <SearchForm handleSubmit={addBook} />
      </div>
      <BookList books={books} onEdit={editBook} />
    </div>
  );
}

export default App;
