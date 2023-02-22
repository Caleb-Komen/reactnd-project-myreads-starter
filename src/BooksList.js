import Book from "./Book";

function BooksList (props) {
  const { books } = props
	return (
		<ol className="books-grid">
			{books.map((book) => (
				<li key={book.id}><Book book={book}/></li>
			))}
		</ol>
	)
}

export default BooksList