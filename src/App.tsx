// import { v4 as uuid } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";

import type { Book } from "./libs/types";

import SearchForm from "./components/SearchImage/SearchForm";
import BookList from "./components/Book/BookList";

const END_POINT = "http://localhost:3001/books";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  async function fetchAllBooks() {
    const response = await axios.get(END_POINT);

    setBooks(response.data);
  }

  useEffect(() => {
    fetchAllBooks();
  }, []);

  async function addBook(title: string) {
    const response = await axios.post(END_POINT, { title });
    const updatedBook = response.data;

    const updatedBooks = [...books, updatedBook];

    setBooks(updatedBooks);
  }

  async function editBook(id: string, title: string) {
    const response = await axios.put(`${END_POINT}/${id}`, { title });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...response.data,
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  async function removeBook(id: string) {
    await axios.delete(`${END_POINT}/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  }

  return (
    <div className="px-10 py-10">
      <div className="flex justify-center mb-10">
        <SearchForm handleSubmit={addBook} />
      </div>
      <BookList books={books} onEdit={editBook} onRemove={removeBook} />
    </div>
  );
}

export default App;
