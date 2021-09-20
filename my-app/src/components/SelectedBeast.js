'use strict'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap/';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeHandler}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.dataArray.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.dataArray.image_url}
              style={{ width: '100%', height: '300px' }}
            />
            {this.props.dataArray.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;