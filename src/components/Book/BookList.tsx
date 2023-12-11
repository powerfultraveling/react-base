import type { Book } from "../../libs/types";

import BookShow from "./BookShow";

interface Props {
  books: Book[];
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
}

function BookList({ books, onEdit, onRemove }: Props) {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      {books.map((book) => (
        <BookShow book={book} handleEdit={onEdit} handleRemove={onRemove} />
      ))}
    </div>
  );
}

export default BookList;
