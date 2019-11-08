export default (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_TASKS':
            return action.payload;
        case 'CHANGE_TASK':
            return state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        text: action.text,
                        status: action.status
                    };
                }
                return task;
            })
        default:
            return state;
    }
}