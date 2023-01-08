import React from 'react';
import {Link} from "react-router-dom";
import './store-header.css'

const StoreHeader = () => {
    return (
        <header className='store-header'>
            <Link className='logo text-dark' to='/'>
                Shop
            </Link>
            <Link className='shopping-cart' to='/cart'>
                <i className='cart-icon bi bi-cart-fill'/>
                Items 5
            </Link>
        </header>
    );
};

export default StoreHeader;