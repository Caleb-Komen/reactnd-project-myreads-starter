import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BooksShelf from './BooksShelf'

class BooksApp extends React.Component {
state = {
  shelves:{},
  searchedBooks: []
}

searchBooks = query => {
  if (query === '') {
    this.setState(() => ({
      searchedBooks: []
    }))
  } else {
    BooksAPI.search(query)
    .then((books) => {
      this.setState(() => ({
        searchedBooks: books
      }))
    })
  }
}

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const shelves = books.reduce((acc, { shelf, ...rest }) => { 
        const key = shelf
        acc[key] = acc[key] || []
        acc[key].push(rest)
        return acc
      }, {})
      this.setState(() => ({
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
              <SearchBooks
                books={this.state.searchedBooks}
                onSearchBook={this.searchBooks}
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
