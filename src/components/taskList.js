import React from 'react';
import { connect } from 'react-redux';

import { openTaskEditor } from '../actions/actions';
import Task from './task';

const mapStateToProps = state => {
    return ({
        tasks: state.tasks,
        adminMode: state.adminMode,
    })
};

const mapDispatchToProps = dispatch => {
    return {
        onEditClick: id => {
            dispatch(openTaskEditor({mode: 'change', id}));
        }
    }
}

const Tasks = ({
    tasks,
    adminMode,
    onEditClick
}) => {
    return (
        <main>
            {tasks.map(task => {
                return <Task key={task.id}
                        username={task.username}
                        email={task.email}
                        text={task.text}
                        status={task.status}
                        onEditClick={()=>{
                            onEditClick(task.id);
                        }}
                        adminMode={adminMode ? true : false}
                        />
            })}
        </main>
    );
};

const TaskList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);

export default TaskList;