import React, { Component } from 'react';


class Searchbar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.onChange   =   this.onChange.bind(this);
        this.onSubmit   =   this.onSubmit.bind(this);
        this.resetSearchTerm = this.resetSearchTerm.bind(this);

    }

    onChange(evt) {
        this.setState({searchTerm: evt.target.value});
    }

    onSubmit(evt) {        
        evt.preventDefault();
        this.props.onSearchChange(this.state.searchTerm);
    }

    resetSearchTerm() {
        this.setState({searchTerm: ''});        
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                
                <input type="text" className="form-control" id="search" placeholder="Search here .... " 
                    value={this.state.searchTerm} onChange={this.onChange} />
                
                <div className="input-group-addon hover-cursor" onClick={this.resetSearchTerm}>
                    <span className="glyphicon glyphicon-remove-circle"></span> 
                </div>
            </form>
        )
    }
}

export default Searchbar;