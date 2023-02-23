import React from "react"
import * as BooksAPI from './BooksAPI'
import Book from "./Book"

class SearchBooks extends React.Component {
	state = {
		query: '',
		searchedBooks: []
	}

	 updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}))
		this.searchBooks(query)
	 }

	 searchBooks = query => {
		if (query) {
			BooksAPI.search(query)
			.then((books) => {
				books.error
				? this.setState({ searchedBooks: [] })
				: this.setState({ searchedBooks: books })
			})
		} else {
			this.setState({ searchedBooks: [] })
		}
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
					<ol className="books-grid">
            {
              this.state.searchedBooks.map(book => {
                let shelfName = "none";

                this.props.allBooks.map(bk => (
                  bk.id === book.id ?
                  shelfName = bk.shelf :
                  ''
                ));

                return (
									<li key={book.id}>
										<Book
											book={book}
											handleUpdateShelf={this.props.handleUpdateShelf}
											currentShelf={shelfName}
										/>
									</li>
              	)
              })
            }
          </ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks