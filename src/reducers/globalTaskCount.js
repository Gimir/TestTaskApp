export default (state = 0, action) => {
    switch (action.type) {
        case 'SET_TASK_COUNT':
            return action.payload;
        case 'INCREASE_TASKS':
            return Number.parseInt(state) + 1;
        default:
            return state;
    }
}