import type { Book } from "../../libs/types";

interface Props {
  book: Book;
}

function BookShow({ book }: Props) {
  return (
    <div className="w-full px-4 py-5 border border-black rounded-2xl">
      <div>{book.title}</div>
    </div>
  );
}

export default BookShow;
