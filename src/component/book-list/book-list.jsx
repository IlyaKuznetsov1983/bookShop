import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import withBookService from "../hoc"
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchBooks, onAddToCart} from "../../action";
import './book-list.css'

// class BookList extends Component {
//
//     state = {
//         books: [],
//         isLoading: true,
//         hasError: null
//     }
//
//     componentDidMount() {
//         this.props.service.getBooks()
//             .then((books) => this.setState({
//                 books,
//                 isLoading: false
//             }))
//             .catch(error => this.setState({
//                 isLoading: false,
//                 hasError: error
//             }))
//     }
//
//     render() {
//         const {isLoading, hasError, books} = this.state
//
//         if (isLoading) return <Spinner/>
//
//         if (hasError) return <ErrorIndicator/>
//
//
//         return <ul className='book-list'>
//             {books.map(book => <li key={book.id}>
//                 <BookListItem {...book}/>
//             </li>)
//             }
//         </ul>
//     }
// };

class BookList extends Component {

    componentDidMount() {
        // this.props.booksLoading()
        // this.props.service.getBooks()
        //     .then((data) => this.props.booksLoaded(data))
        //     .catch((error) => this.props.booksError(error))
        this.props.fetchBooks()
    }

    render() {
        const {isLoading, hasError, books, onAddToCart} = this.props

        if (isLoading) return <Spinner/>

        if (hasError) return <ErrorIndicator/>


        return <ul className='book-list'>
            {books.map(book => <li key={book.id}>
                <BookListItem {...book} onAddToCart={onAddToCart}/>
            </li>)
            }
        </ul>
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoading: () => dispatch(booksLoading()),
//         booksError: (error) => dispatch(booksError(error)),
//         booksLoaded: (books) => dispatch(booksLoaded(books))
//     }
// }

// const mapDispatchToProps = {
//     booksLoading,
//     booksError,
//     booksLoaded,
// }


const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps

    return {
        fetchBooks: fetchBooks(service, dispatch),
        onAddToCart: (id) => dispatch(onAddToCart(id))
    }
}


export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookList)

