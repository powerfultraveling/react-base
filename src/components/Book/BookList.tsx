import type { Book } from "../../libs/types";

import BookShow from "./BookShow";

interface Props {
  books: Book[];
  onEdit: (id: string, title: string) => void;
}

function BookList({ books, onEdit }: Props) {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      {books.map((book) => (
        <BookShow book={book} handleEdit={onEdit} />
      ))}
    </div>
  );
}

export default BookList;
