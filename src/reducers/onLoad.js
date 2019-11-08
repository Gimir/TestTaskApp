const initialState = {
    onLoad: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_STARTED':
            return {
                onLoad: true,
                error: null
            };
        case 'LOADING_FAILED':
            return {
                onLoad: false,
                error: action.payload
            };
        case 'LOADING_SUCCESS':
            return {
                onLoad: false,
                error: null
            }
        default:
            return state;
    }
}