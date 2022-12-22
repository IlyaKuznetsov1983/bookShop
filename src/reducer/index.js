import {FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS} from "../action";

const initialState = {
    books: [],
    isLoading: false,
    hasError: null,
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: null
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                hasError: action.payload,
                isLoading: false,
            }
        case FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                books: action.payload,
                isLoading: false,
            }
        }
        default:
            return state
    }
}

export default reducer