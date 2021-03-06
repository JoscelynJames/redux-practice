const redux = require('redux');
const createStore = redux.createStore; // don't execute it yet

const initalState = {
	counter: 0
};
// Reducer
const rootReducer = (state = initalState, action) => {
	if (action.type === 'INC_COUNTER') {
		// never directly mutate data in here
		return {
			...state,
			counter: state.counter + 1,
		};
	}

	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value,
		};
	}
	return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription 
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});

// Dispatching Action
// takes js object with type property
// convention to use all uppercase 
// can pass any other properties 
store.dispatch({type: 'INC_COUNTER'}); 
store.dispatch({type: 'ADD_COUNTER', value: 10}); 
console.log(store.getState());

