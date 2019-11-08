export default (state = false, action) => {
    switch (action.type) {
        case 'OPEN_TASK_EDITOR':
            return action.payload;
        case 'CLOSE_TASK_EDITOR': 
            return false;
        default:
            return state;
    }
}