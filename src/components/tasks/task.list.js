import React, { Component } from 'react';
import TaskListItem from './task.list.item';

import TaskForm from './form.task';

class TaskList extends Component {
    render(){
        return (
          <div className="top-buffer-20 task-list list-group">
            {this.props.searchTerm}
              <TaskListItem />   
              <TaskListItem />   
              <TaskListItem />   
              <TaskListItem />   
              <TaskListItem /> 

            <TaskForm />
          </div>
        );
    }
}

export default TaskList;