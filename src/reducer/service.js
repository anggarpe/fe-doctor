let initialState = {
    services:[]
};

const service = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SERVICE":
            return {
                ...state,
                services: action.data,
            };

        default:
            return state;
    }
};

export default service;