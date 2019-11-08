export default (state = 'id', action) => {
    switch (action.type) {
        case 'CHANGE_SORT_ORDER':
            return action.payload;
        default:
            return state;
    }
}