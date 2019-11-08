export default (state = 1, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_PAGE':
            return action.payload;
        default:
            return state;
    }
}