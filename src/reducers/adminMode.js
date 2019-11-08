const initialState = localStorage.token ? localStorage.token : null;


export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ADMIN_MODE':
            return {
                token: action.payload
            }
        case 'REMOVE_ADMIN_MODE':
            return null;
        default:
            return state;
    }
}