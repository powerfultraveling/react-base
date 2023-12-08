import { useState } from "react";

import type { Book } from "../../libs/types";

import SearchForm from "../SearchImage/SearchForm";

interface Props {
  book: Book;
  handleEdit: (id: string, title: string) => void;
}

function BookShow({ book, handleEdit }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);

  function onEdit(title: string) {
    handleEdit(book.id, title);

    setIsEditMode(false);
  }

  const booTitle = isEditMode ? (
    <SearchForm handleSubmit={onEdit} />
  ) : (
    <div>{book.title}</div>
  );

  return (
    <div className="w-full px-4 py-5 border border-black rounded-2xl flex items-center justify-between">
      {booTitle}
      {!isEditMode ? (
        <div className="flex items-center space-x-2">
          <button className="small-btn" onClick={() => setIsEditMode(true)}>
            E
          </button>
          <button className="small-btn">D</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BookShow;
