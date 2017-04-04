import React from 'react';

class AddInline extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: '', placeholder: props.placeholder || "Add new item"}

        this.onChange   =   this.onChange.bind(this);
        this.onSubmit   =   this.onSubmit.bind(this);
        this.resetForm  =   this.resetForm.bind(this);
    }
    
    onChange(evt) {
        this.setState({item: evt.target.value});
    }

    onSubmit(evt) {        
        evt.preventDefault();
        let categoryItem = {
            name: this.state.item,
            tasks: []
        }

        this.setState({item: ''});        
        this.props.onItemAdd(categoryItem);
    }

    resetForm() {
        this.setState({item: ''});        
    }


    render() {
        
        return (
            <div className="inline-input input-group">
                <form className="input-group" onSubmit={this.onSubmit}>

                    <input type="text" placeholder={this.props.placeholder} className="form-control" 
                        value={this.state.item} onChange={this.onChange} />
                    <div className="input-group-btn">
                        <button className="btn btn-default">Add</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddInline;