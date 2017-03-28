import React, { Component } from 'react';

class TaskListItem extends Component {

    render() {
        return (
            <div className="list-group-item clearfix">
                <div className="checkbox pull-left">
                    <label>
                        <input type="checkbox" /> First List Group Item Heading
                    </label>
                </div>
                <div className="pull-right">
                    <span className="actions">
                        <button className="btn btn-link teal"><i className="glyphicon glyphicon-edit"></i></button>
                    </span>
                </div>
            </div>
        );
    }
}
export default TaskListItem;