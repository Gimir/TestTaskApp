export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_LOGIN_MODAL':
            return !state;
        default:
            return state;
    }
}