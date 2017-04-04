import React, { Component } from 'react';

class TaskListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-group-item clearfix">
                <div className="checkbox pull-left">
                    <label>
                        <input type="checkbox" /> { this.props.task.title}
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