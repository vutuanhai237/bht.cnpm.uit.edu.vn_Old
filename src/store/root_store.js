import { createStore, compose, applyMiddleware } from "redux";
import root_reducer from "../reducer/root_reducer"
import thunk from 'redux-thunk';



var store = createStore(
    root_reducer,
    compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);
store.subscribe(() => {
    //var str = store.getState();

})


export default store;