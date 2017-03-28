import React from 'react';

const CategoryListItem = (props) => {
    return (
        <div className="list-group-item clearfix">
            
            <button className="btn btn-link teal"><i className="glyphicon glyphicon-triangle-right"></i></button>
            
            <span className="list-group-item-heading">First List Group Item Heading</span>
            <div className="pull-right">
                <span className="actions">
                    <button className="btn btn-link red"><i className="glyphicon glyphicon-trash"></i></button>
                    <button className="btn btn-link teal"><i className="glyphicon glyphicon-plus"></i></button>
                </span>
            </div>
        </div>
    );
}

export default CategoryListItem;