import React from 'react';

function BookDetails(props) {

  let priceLabel;
  if (!props.books || props.books.length === 0) {
    priceLabel = <p className="no-data">📭 No books available at the moment.</p>;
  } else {
    priceLabel = <p className="data-count">📚 Showing {props.books.length} book(s)</p>;
  }

  if (!props.books) {
    return <div className="error-box">⚠️ Error: Book data not provided.</div>;
  }

  const bookdet = (
    <ul className="item-list">
      {props.books.map((book) => {

        let priceClass;
        if (book.price >= 800) {
          priceClass = 'price-high';
        } else if (book.price >= 600) {
          priceClass = 'price-medium';
        } else {
          priceClass = 'price-low';
        }

        return (
          <div key={book.id} className="card">
            <div className="card-icon">📖</div>
            <h3>{book.bname}</h3>
            <h4 className={priceClass}>₹ {book.price}</h4>
            <span className="badge">ID: {book.id}</span>
          </div>
        );
      })}
    </ul>
  );

  return (
    <div className="component-wrapper">
      {priceLabel}
      {bookdet}
    </div>
  );
}

export default BookDetails;
