import React from "react";

class SearchBooksInput extends React.Component {
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
			<div className="search-books-input-wrapper">
				<input 
					type="text" 
					placeholder="Search by title or author"
					value={this.state.query}
					onChange={(evt) => this.updateQuery(evt.target.value)}
				/>
			</div>
		)
	}
}

export default SearchBooksInput