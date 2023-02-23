import React from "react";
import BooksList from "./BooksList";

function BooksShelf(props) {
	return (
		<div className="bookshelf">
			{
				(props.shelfTitle === 'currentlyReading') && (<h2 className="bookshelf-title"> 
					Currently Reading
				</h2>)
			}
			{
				(props.shelfTitle === 'read') && (<h2 className="bookshelf-title"> 
					Read
				</h2>)
			}
			{(props.shelfTitle === 'wantToRead') && (<h2 className="bookshelf-title">
					Want to Read 
				</h2>)
			}
			<div className="bookshelf-books">
				<BooksList books={props.books} handleUpdateShelf={props.handleUpdateShelf}/>
			</div>
		</div>
	)
}

export default BooksShelf