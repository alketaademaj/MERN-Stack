import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export class PopUp extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Modal show={ this.props.show } onHide={ this.props.closeModal }>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.closeModal}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default PopUp
