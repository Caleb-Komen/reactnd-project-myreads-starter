import React from "react";
import BooksList from "./BooksList";

class SearchBooks extends React.Component {
	state = {
		query: ''
	}
	 updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}))

		this.props.onSearchBook(query)
	 }

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={this.props.onNavigateBack}>Close</button>
					<div className="search-books-input-wrapper">
						<input 
							type="text" 
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(evt) => this.updateQuery(evt.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<BooksList books={this.props.books}/>
				</div>
      </div>
		)
	}
}