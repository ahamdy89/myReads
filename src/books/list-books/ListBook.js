import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class ListBooks extends React.Component {
    state = {
        bookShelfsData: [
            {
            id: 1,
            title: 'Currently Reading',
            name: 'currentlyReading'
            },
            {
            id: 2,
            title: 'Want To Read',
            name: 'wantToRead'
            },
            {
            id: 3,
            title: 'Finished Reading',
            name: 'read'
            },
    
        ]
    }

    render(){
        const {bookShelfsData } = this.state;
        const {books, onSelectChange} = this.props;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {bookShelfsData && bookShelfsData.map((shelf, i)=> (
                    <BookShelf
                        key={shelf.id}
                        books={books} 
                        title={shelf.title} 
                        shelfName={shelf.name}
                        onSelectChange={onSelectChange}
                    />
                ))}
              </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;