import React from 'react';

import Searchbar from './searchbar';

const Header = (props) => {
    return (
        <header className="page-header clearfix">
            <div className="pull-left">
                <h2 className="logo">To-Do-List</h2>
            </div>
            <div className="pull-right">
                <div className="form-inline">
                    
                    <div className="checkbox">
                        <input type="checkbox" id="done"/> 
                        <label htmlFor="done" className="left-buffer-10 right-buffer-10">Show done</label>
                    </div>
                     
                     <Searchbar onSearchChange={props.onSearchFilter}/>

                </div>
            </div>
        </header>
    )
}

export default Header;