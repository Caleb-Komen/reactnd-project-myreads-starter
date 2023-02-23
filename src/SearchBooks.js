import React from "react";
import BooksList from "./BooksList";
import { useNavigate } from 'react-router-dom';
import SearchBooksInput from "./SearchBooksInput";

function SearchBooks(props) {
	const navigate = useNavigate();

	const navigateBack = () => {
		navigate(-1)
	 }

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<button className="close-search" onClick={navigateBack}>Close</button>
				<SearchBooksInput
					onSearchBook={props.onSearchBook}
				/>
			</div>
			<div className="search-books-results">
				<BooksList books={props.books}/>
			</div>
		</div>
	)
}

export default SearchBooks