import React, { Component } from 'react';
import TaskListItem from './task.list.item';

import TaskForm from './form.task';

class TaskList extends Component {
    constructor(props) {
      super(props);
      console.log(props.currentCategory);
    }
    render() {

        if(!this.props.currentCategory) {
          return (
            <div className="top-buffer-20 task-list list-group text-center">
              <p>Please select a Category.</p>
            </div>
          );
        }
        if(this.props.currentCategory.tasks && this.props.currentCategory.tasks.length === 0 ) {
          return (
            <div className="top-buffer-20 task-list list-group text-center">
              <p>There is no task in {this.props.currentCategory.name} Category.</p>
            </div>
          );
        }
        return (
          <div className="top-buffer-20 task-list list-group">
              {/*{this.props.searchTerm}*/}
              {/*{this.props.currentCategory}*/}
              
              {
                this.props.currentCategory.tasks.map((item)=> {
                  return <TaskListItem key={item.id + '-' + Math.random()} task={item}/>
                })
              }

            {/*<TaskForm />*/}
          </div>
        );
    }
}

export default TaskList;