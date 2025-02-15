import Book from "./Book";

function BooksList (props) {
  const { books } = props
	return (
		<ol className="books-grid">
			{(books.length > 0) && books.map((book) => (
				<li key={book.id}><Book currentShelf={book.shelf} book={book} handleUpdateShelf={props.handleUpdateShelf}/></li>
			))}
		</ol>
	)
}

export default BooksList