import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookStoreService} from "../hoc"
import {fetchBooks, bookAddedToCartAC} from "../../action";
import compose from "../../utils";
import './book-list.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookListConteiner extends Component {

    componentDidMount() {
        this.props.fetchBooks();
      }
    
      render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
          return <Spinner />;
        }
    
        if (error) {
          return <ErrorIndicator />;
        }
    
        return <BookList books={books} onAddedToCart={onAddedToCart} />;
      }
};

const BookList = ({books, onAddedToCart}) => {

    return (
        <ul className="book-list">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem
                  book={book}
                  onAddedToCart={() => onAddedToCart(book.id)}
                />
              </li>
            );
          })}
        </ul>
      );
};

const mapStateToProps = (state) => {
    return {
        books: state.BookList.books,
        loading: state.BookList.loading,
        error: state.BookList.error,
    };

};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreServise } = ownProps;
    return bindActionCreators(
        {
          fetchBooks: fetchBooks(bookstoreServise),
          onAddedToCart: bookAddedToCartAC,
        },
        dispatch
    );
};


export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListConteiner);

