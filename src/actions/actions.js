import axios from 'axios';

// URL //////
const ENDPOINT = 'https://uxcandy.com/~shapoval/test-task-backend/v2';
const get = '/?developer=MukhammadElby';
const create = '/create?developer=MukhammadElby';
const login = '/login?developer=MukhammadElby';
const change = id => `/edit/${id}?developer=MukhammadElby`;
// URL //////


export const setAdminMode = payload => ({
    type: 'SET_ADMIN_MODE',
    payload
});

export const removeAdminMode = () => {
    localStorage.removeItem('token');
    return {
        type: 'REMOVE_ADMIN_MODE'
    }
};

export const changeCurrentPage = payload => ({
    type: 'CHANGE_CURRENT_PAGE',
    payload
});

export const toggleLoginModal = () => ({
    type: 'TOGGLE_LOGIN_MODAL'
});

export const loadingStarted = () => ({
    type: 'LOADING_STARTED'
});

export const loadingFailed = payload => ({
    type: 'LOADING_FAILED',
    payload
});

export const loadingSuccess = () => ({
    type: 'LOADING_SUCCESS'
});

export const setTaskCount = payload => ({
    type: 'SET_TASK_COUNT',
    payload
});

export const increaseTasks = () => ({
    type: 'INCREASE_TASKS'
});


export const changeSortOrder = payload => ({
    type: 'CHANGE_SORT_ORDER',
    payload
});

export const changeSortDirection = () => ({
    type: 'CHANGE_SORT_DIRECTION'
});

export const changeStatusFilter = payload => ({
    type: 'CHANGE_STATUS_FILTER',
    payload
});

export const openTaskEditor = payload => ({
    type: 'OPEN_TASK_EDITOR',
    payload
});

export const closeTaskEditor = () => ({
    type: 'CLOSE_TASK_EDITOR'
})

export const updateTasks = payload => ({
    type: 'UPDATE_TASKS',
    payload
});

export const changeTask = (text, status, id) => ({
    type: 'CHANGE_TASK',
    text,
    status,
    id
})

// COOL ACTIONS 

export const initPages = (
    sort_field,
    sort_direction,
    page
) => {
    return dispatch => {

        dispatch(loadingStarted());

        axios
            .get(ENDPOINT+get, {
                params: {
                    sort_field,
                    sort_direction,
                    page
                }
            })
            .then(res => {
                if (res.data.status === 'ok') {
                    dispatch(loadingSuccess());
                    dispatch(updateTasks(res.data.message.tasks));
                    dispatch(setTaskCount(res.data.message.total_task_count));
                }
                else {
                    dispatch(loadingFailed(res.data.status));
                    throw new Error(`Server responsed with status: ${res.data.status}`);
                }
            })
            .catch(err => {
                dispatch(loadingFailed(err.message));
            })
    }
}

export const changePage = (
    sort_field,
    sort_direction,
    page
) => {
    return dispatch => {

        dispatch(loadingStarted());

        axios
            .get(ENDPOINT+get, {
                params: {
                    sort_field,
                    sort_direction,
                    page
                }
            })
            .then(res => {
                if (res.data.status === 'ok') {
                    dispatch(loadingSuccess());
                    dispatch(updateTasks(res.data.message.tasks));
                    dispatch(changeCurrentPage(page));
                }
                else {
                    dispatch(loadingFailed(res.data.status));
                    throw new Error(`Server responsed with status: ${res.data.status}`);
                }
            })
            .catch(err => {
                dispatch(loadingFailed(err.message));
            })
    }
}

export const addTask = (
    username,
    email,
    text
) => {
    return dispatch => {
        dispatch(loadingStarted());
        var form = new FormData();
        form.append("username", username);
        form.append("email", email);
        form.append("text", text);
        axios({
            method: 'post',
            url: ENDPOINT+create,
            data: form,
            mimeType: "multipart/form-data",
            contentType: false,
            processData: false,
            dataType: "json"
        })
            .then(res => {
                if (res.data.status === 'ok') {
                    dispatch(loadingSuccess());
                    dispatch(increaseTasks());
                }
                else {
                    dispatch(loadingFailed(res.data.status));
                    throw new Error(`Server responsed with status: ${res.data.status}`);
                }
            })
            .catch(err => {
                dispatch(loadingFailed(err.message));
            })
    }
}

export const logIn = (username, password) => {
    return dispatch => {
        dispatch(loadingStarted());

        var form = new FormData();
        form.append("username", username);
        form.append("password", password);

        axios({
            method: 'post',
            url: ENDPOINT+login,
            data: form,
            mimeType: "multipart/form-data",
            contentType: false,
            processData: false,
            dataType: "json"
        })
        .then(res => {
            if (res.data.status === 'ok') {
                dispatch(loadingSuccess());
                localStorage.setItem('token', res.data.message.token);
                dispatch(setAdminMode(res.data.message.token));
            }
            else {
                dispatch(loadingFailed(res.data.status));
                throw new Error(`Server responsed with status: ${res.data.status}`);
            }
        })
        .catch(err => {
            dispatch(loadingFailed(err.message));
        })
    }
}

export const updateTask = (text, status, id) => {
    return dispatch => {
        dispatch(loadingStarted());

        status = status ? 10 : 0;

        var form = new FormData();
        form.append("text", text);
        form.append("status", status);
        form.append("token", localStorage.token);

        axios({
            method: 'post',
            url: ENDPOINT+change(id),
            data: form,
            mimeType: "multipart/form-data",
            contentType: false,
            processData: false,
            dataType: "json"
        })
        .then(res => {
            if (res.data.status === 'ok') {
                dispatch(loadingSuccess());
                dispatch(changeTask(text, status, id));
                alert('Task is changed!');
            }
            else {
                dispatch(loadingFailed(res.data.status));
                throw new Error(`Server responsed with status: ${res.data.status}`);
            }
        })
        .catch(err => {
            dispatch(loadingFailed(err.message));
        })
    }
}