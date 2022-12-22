import React from 'react';
import ErrorBoundary from "../error-boundary";
import {Provider} from "react-redux";
import {BooksServiceProvider} from "../../service-context/book-service-context";
import BookService from "../../service/book-service";
import store from "../../store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StoreHeader from "../store-header";
import {CartPage, HomePage} from "../pages";

const service = new BookService()

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <BooksServiceProvider value={service}>
                    <BrowserRouter>
                        <StoreHeader/>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/cart' component={CartPage}/>
                        </Switch>
                    </BrowserRouter>
                </BooksServiceProvider>
            </ErrorBoundary>
        </Provider>
    );
};


export default App;
