import React from 'react';
import ShelfSelect from './SelectShelf';

class Book extends React.Component{

    onShelfChange = event => {
        const {book,onSelectChange} = this.props;
        const newShelf = event.target.value
        onSelectChange(book,newShelf);
    }
    searchedShelf = (book) => {
        const {books} = this.props;
        const filteredBooks = books.filter(val=>val.id === book.id);
        if (filteredBooks.length > 0) {
            return filteredBooks[0].shelf;
        }
        return "none";
    }

    render(){
        const {book} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : ""})` }}
                        ></div>
                    <ShelfSelect shelf={book.shelf? book.shelf : this.searchedShelf(book)} onSelectChange={this.onShelfChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
         )
    }
}
 
export default Book;