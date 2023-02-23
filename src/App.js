import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import BooksShelf from './BooksShelf'

class BooksApp extends React.Component {
state = {
  shelves:{},
  searchedBooks: []
}

updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => this.getAllBooks())
}

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks= () => {
    BooksAPI.getAll().then((books) => {
      const shelves = books.reduce((acc, shelfCategory) => {
        const key = shelfCategory['shelf']
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(shelfCategory)
        return acc
      }, {})
      this.setState(() => ({
        allBooks: books,
        shelves: shelves
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route 
            path='/search'
            element={
              <SearchPage
                allBooks={this.state.allBooks}
                handleUpdateShelf={this.updateShelf}
              />
            }
          />
          <Route
            exact path='/'
            element={
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  {Object.entries(this.state.shelves).map(([shelf, books]) => {
                    return (
                      <BooksShelf
                        key={shelf}
                        shelfTitle={shelf}
                        books={books}
                        handleUpdateShelf={this.updateShelf}
                    />
                    )
                  })}
                </div>
                <div className="open-search">
                  <Link to='/search'>
                    <button>
                      Add a book
                    </button>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
