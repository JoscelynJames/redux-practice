const redux = require('redux');
const createStore = redux.createStore; // don't execute it yet

const initalState = {
	counter: 0
};
// Reducer
const rootReducer = (state = initalState, action) => {
	return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subscription 