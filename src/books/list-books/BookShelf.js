import React from 'react';
import Book from './Book';


const BookShelf = ({books, title, shelfName, onSelectChange}) => {
    const shelfRelatedBooks = books.filter (book => book.shelf === shelfName);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            {shelfRelatedBooks.length > 0 ? 
            <ol className="books-grid">
                {shelfRelatedBooks.map((book, i)=>(
                    <li key={book.id}>
                        <Book book={book} onSelectChange={onSelectChange}/>
                    </li>
                ))}
            </ol>
            :
            <p>No books here</p>
            }
            </div>
        </div>
    )
}

export default BookShelf;