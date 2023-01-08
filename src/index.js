import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./component/app";
import ErrorBoundary from "./component/error-boundary";
import BookStoreService from "./services/bookstore-service";
import { BookStoreServiceProvider } from "./component/bookstore-service-context";
import store from "./store";

const bookstoreServise = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookstoreServise}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

