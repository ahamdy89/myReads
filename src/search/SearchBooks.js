import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../books/list-books/Book';
import {search} from '../BooksAPI';


class SearchBook extends React.Component {
    state= {
        searchedBooks: []
    }

    onSearch = event => {
        const searchValue = event.target.value;
        if(searchValue.length > 0){
            search(searchValue)
            .then(books=> {
                if((typeof books === 'undefined') || (books.includes('error'))){
                    this.setState({searchedBooks: []})
                }else{
                    this.setState({searchedBooks: books})
                }
            }).catch(error=>{
                console.error(error)
            })
        }else{
            this.setState({searchedBooks: []})
        }

    }
    render(){
        const {searchedBooks} = this.state;
        const {onSelectChange, books} = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                        type="text" 
                        placeholder="Search by title or author"
                        onChange={this.onSearch}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    {searchedBooks.length > 0 && (
                        <ol className="books-grid">
                            {searchedBooks.map((book, i)=> (
                                <li key={book.id}>
                                    <Book book={book} onSelectChange={onSelectChange} books={books}/>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
          </div>
        )
    }
}

export default SearchBook;