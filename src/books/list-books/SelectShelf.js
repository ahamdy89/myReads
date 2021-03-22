import React from 'react';

const ShelfSelect = ({shelf, onSelectChange}) => {
    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={onSelectChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfSelect;