import React from 'react';
import { connect } from 'react-redux';

import Button from './button';
import { openTaskEditor } from '../actions/actions';

const mapDispatchToProps = dispatch => {
    return ({
        onOpenClick: () => {
            dispatch(openTaskEditor({mode: 'create'}));
        }
    });
}

const OpenTaskEditor = ({onOpenClick}) => {
    return (
        <Button onClick={onOpenClick}>ADD TASK</Button>
    )
}

const OpenTaskEditorButton = connect(
    null,
    mapDispatchToProps
)(OpenTaskEditor);

export default OpenTaskEditorButton;