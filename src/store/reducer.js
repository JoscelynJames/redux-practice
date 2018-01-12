const initalState = {
	counter: 0,
};
// make sure to set default value 
// will get a 'cant read property of ..' error if you dont 
const reducer = (state = initalState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: state.counter + 1,
		}
	}
	return state;
};

export default reducer;