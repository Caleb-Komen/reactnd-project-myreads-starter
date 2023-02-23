import React from "react";
import { useNavigate } from 'react-router-dom';
import SearchBooks from "./SearchBooks";

function SearchPage(props) {
	const navigate = useNavigate();

	const navigateBack = () => {
		navigate(-1)
	 }

	return (
		<SearchBooks
			allBooks={props.allBooks}
			onNavigateBack={navigateBack}
			handleUpdateShelf={props.handleUpdateShelf}
		/>
	)
}

export default SearchPage