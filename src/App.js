import React, { Component } from 'react';
import './App.css';

import Header from './components/shared/header';
import Progressbar from './components/shared/progressbar';
import AddInline from './components/shared/add-inline'
import CategoryList from './components/categories/category.list';
import TaskList from './components/tasks/task.list';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {term: null}
}
  
  render() {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-md-12">          
            <Header onSearchFilter={(term)=> { this.setState({term}); console.log(term,'App.js')}} />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">          
            <Progressbar />
          </div>
        </div>

        <div className="row">
          
          <div className="col-md-4">
            
            <CategoryList />  
          
          </div>
          <div className="col-md-8">

            <div className="clearfix">
              <div className="pull-right col-md-6" >
                <AddInline placeholder="Add New Task"/>
              </div>
            </div>

            <TaskList searchTerm={this.state.term}/>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
