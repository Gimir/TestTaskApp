import { combineReducers } from 'redux';

import adminMode from './adminMode';
import currentPage from './currentPage';
import loginModal from './loginModal';
import onLoad from './onLoad';
import globalTaskCount from './globalTaskCount';
import sortBy from './sortBy';
import sortDirection from './sortDirection';
import statusFilter from './statusFilter';
import taskEditor from './taskEditor';
import tasks from './tasks';

const rootReducer = combineReducers({
    adminMode,
    currentPage,
    loginModal,
    onLoad,
    globalTaskCount,
    sortBy,
    sortDirection,
    statusFilter,
    taskEditor,
    tasks
});

export default rootReducer;