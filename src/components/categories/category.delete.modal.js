import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class CategoryDeleteModal extends React.Component {
  constructor(props) {
    super(props);

    console.log("asd");

    this.state = { showModal: props.showModal || false };
    this.closeModal     =   this.closeModal.bind(this);
    this.openModal      =   this.openModal.bind(this);
  }

    closeModal() {
        this.setState({ showModal: false });
    }
    openModal() {
        this.setState({ showModal: true });
    }
  render() {
    return <Modal show={this.state.showModal}>
                <Modal.Header closeButton onClick={this.closeModal}>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Category Name</h4>
                    <p>You are going to delete this category. All it's subcategories and tasks will also be deleted.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal}>Close</Button>
                    <Button  className="btn-danger">Delete</Button>
                </Modal.Footer>
            </Modal>;
  }

  componentDidMount() {
    // this.setState({ someKey: 'otherValue' });
  }
}

export default CategoryDeleteModal;
