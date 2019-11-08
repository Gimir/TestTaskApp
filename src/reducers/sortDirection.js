export default (state = 'asc', action) => {
    switch (action.type) {
        case 'CHANGE_SORT_DIRECTION':
            return state === 'asc' ? 'desc' : 'asc';
        default:
            return state;
    }
}