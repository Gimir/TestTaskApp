export default (state = 'all', action) => {
    switch (action.type) {
        case 'CHANGE_STATUS_FILTER':
            return action.payload;
        default:
            return state;
    }
}