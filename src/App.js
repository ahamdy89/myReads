import React from 'react'
import './App.css'
import ListBooks from './books/list-books/ListBook'
import SearchBook from './search/SearchBooks'
import { Switch, Route } from "react-router-dom";
import {getAll, update}  from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount(){
    const booksList = await getAll();
    this.setState({books: booksList});
}

onSelectChange = (book, shelf) =>{
  update(book, shelf);
  book.shelf = shelf;
  const updatedBooks = [...this.state.books].filter(val => val.id !== book.id).concat(book)
  this.setState({books: updatedBooks})
}

  render() {
    const {books} = this.state;
    return (
      <Switch>
        <Route exact path="/" 
        render={(props) => (
          <ListBooks books={books} onSelectChange={this.onSelectChange}/>
        )}
         />
         <Route path="/search" 
        render={(props) => (
          <SearchBook books={books} onSelectChange={this.onSelectChange}/>
        )}
         />
      </Switch>
    )
  }
}

export default BooksApp
