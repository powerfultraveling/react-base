import type { Book } from "../../libs/types";

import BookShow from "./BookShow";

interface Props {
  books: Book[];
}

function BookList({ books }: Props) {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      {books.map((book) => (
        <BookShow book={book} />
      ))}
    </div>
  );
}

export default BookList;
