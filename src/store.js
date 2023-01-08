import {createStore} from "redux";
import reducer from "./reducer";
import { HTMLAttributeAnchorTarget } from "react";

const store = createStore(reducer)

export default store