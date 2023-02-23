import React from "react";
import BooksList from "./BooksList";

class BooksShelf extends React.Component {
	render() {
		return (
			<div className="bookshelf">
				{
					(this.props.shelfTitle === 'currentlyReading') && (<h2 className="bookshelf-title"> 
						Currently Reading
					</h2>)
				}
				{
					(this.props.shelfTitle === 'read') && (<h2 className="bookshelf-title"> 
						Read
					</h2>)
				}
				{(this.props.shelfTitle === 'wantToRead') && (<h2 className="bookshelf-title">
						Want to Read 
					</h2>)
				}
        <div className="bookshelf-books">
					<BooksList books={this.props.books} handleUpdateShelf={this.props.handleUpdateShelf}/>
				</div>
			</div>
		)
	}
}

export default BooksShelf