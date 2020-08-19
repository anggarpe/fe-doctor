let initialState = {
    varieties:[]
};

const variety = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_VARIETY":
            return {
                ...state,
                varieties: action.data,
            };

        default:
            return state;
    }
};

export default variety;