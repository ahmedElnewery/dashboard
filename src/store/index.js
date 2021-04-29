import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalReducer } from "./reducer/modalReducer";


const rootReducer = combineReducers({
    modal:modalReducer,
 
})
const store = createStore(
    rootReducer,
    composeWithDevTools()
  );
  export default store