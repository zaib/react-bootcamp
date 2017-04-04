import React, {Component} from 'react';

import {Modal, Button} from 'react-bootstrap';

class CategoryListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {showModal: props.showModal || false};

        this.closeModal     =   this.closeModal.bind(this);
        this.openModal      =   this.openModal.bind(this);

    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    render () { 
        return ( <div className="list-group-item clearfix hover-cursor" onClick={() => this.props.selectCategory(this.props.category)}>
                {/*<button className="btn btn-link teal"><i className="glyphicon glyphicon-triangle-right"></i></button>*/}
                <span className="list-group-item-heading">{this.props.category.name}</span>
                <div className="pull-right">
                    <span className="actions">
                        <button className="btn btn-link red" onClick={ this.openModal }><i className="glyphicon glyphicon-trash"></i></button>
                        <button className="btn btn-link teal"><i className="glyphicon glyphicon-plus"></i></button>
                    </span>
                </div>

               <Modal show={this.state.showModal}>
                    <Modal.Header closeButton onClick={this.closeModal}>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{this.props.category.name}</h4>
                        {/*<h5>Tasks: {this.props.category.tasks.length}</h5>*/}
                        <p>You are going to delete this category. All it's subcategories and tasks will also be deleted.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                        <Button  className="btn-danger" onClick={() => this.props.deleteCategory(this.props.category) }>Delete</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CategoryListItem;