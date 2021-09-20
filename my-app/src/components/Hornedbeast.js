import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  increaseclicks = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  state = { isOpen: false };

  handleModal = () => {
    this.props.showHandler(this.props.title);
  };

  render() {
    return (
      <div>
        <Col style={{ width: '280px', height: '380px' }}>
          <Card className='card'>
            <Card.Img
              className='cardi'
              variant='top'
              src={this.props.img}
              onClick={this.handleModal}
              style={{ width: '100%', height: '180px' }}
              showModal= {this.showModal}
            />

            <Card.Body>
    
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text> number of clicks {this.state.clicks}</Card.Text>
              <Card.Text> {this.props.description}</Card.Text>
              <Button onClick={this.increaseclicks} variant='primary'>
                Vote
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Hornedbeast;