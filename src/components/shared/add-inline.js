import React from 'react';

const AddInline = (props) => {
    let placeholder = props.placeholder || "Add new item";
    return (
        <div className="inline-input input-group">
            <input type="text" placeholder={placeholder} className="form-control" />
            <div className="input-group-btn">
                <button className="btn btn-default">Add</button>
            </div>
        </div>
    )
}

export default AddInline;