import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header';
import Filters from './components/filters';
import TaskList from './components/taskList';
import Pagination from './components/pagination';
import OpenTaskEditorButton from './components/openTaskEditorButton';
import AddTaskModal from './components/addTaskModal';
import LogInModal from './components/logInModal';

import { initPages } from './actions/actions';

const mapDispatchToProps = dispatch => {
  return ({
    initTasks: (field, dir, page) => {
      dispatch(initPages(field, dir, page));
    }
  })
}

function AppContainer({initTasks}) {
  useEffect(() => {
    initTasks('id', 'asc', 1);
  }, []);
  return (
    <div style={{position: 'relative'}}>
      <Header />
      <Filters />
      <TaskList />
      <OpenTaskEditorButton />
      <AddTaskModal />
      <LogInModal />
      <Pagination />
    </div>
  );
}

const App = connect(
  null,
  mapDispatchToProps
)(AppContainer);

export default App;
