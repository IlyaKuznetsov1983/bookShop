import './book-list-item.css'

const BookListItem = ({book , onAddToCart}) => {
    const {title, author, price, coverImage} = book;

    return (
        <div className="book-list-item">
            <div className='book-cover'>
                <img src={coverImage} alt='cover'/>
            </div>

            <div className='book-details'>
                <p className='book-title'>{title}</p>
                <p className='book-author'>{author}</p>
                <p className='book-price'>${price}</p>
                <button className='btn btn-primary add-to-cart' onClick={onAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BookListItem;