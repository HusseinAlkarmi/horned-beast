'use strict'

import React from 'react';
import Row from 'react-bootstrap/Row';
import Hornedbeast from './Hornedbeast';
import SelectedBeast from './SelectedBeast';
import dataArray from './data.json';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataArray: {},
      show: false,
     
    };
  }

  filterImag = (horns) => {
    this.setState({
      data: horns,
    });
  };

  filter = (event) => {
    let numHorns = parseInt(event.target.value);
    let horns = data;
    let newImg;

    newImg = horns.filter((item) => item.horns === numHorns);
    this.filteredImages(newImg);
  };


  closeHandler = () => {
    this.setState({
      show: false,
    });
  };

  showHandler = (title) => {
    let elm = dataArray.find((item) => item.title === title);
    this.setState({
      show: true,
      dataArray: elm,
    });
  };
  

  render() {
    return (
      <div>
        <Form.Select aria-label='Default select example' onChange={this.filter}>
          <option>menue</option>
          <option value='All'>All</option>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
          <option value='100'>Wow</option>
        </Form.Select>
        <br />
        
    return (
     
        <Row xs={6} md={3} className='g-4'>
          {dataArray.map((value, index) => {
            return (
              <>
                <Hornedbeast
                  showHandler={this.showHandler}
                  key={index}
                  title={value.title}
                  img={value.image_url}
                  description={value.description}
                  keyWord={value.leyWord}
                  horns={value.horns}
                  handleShow={this.showHandler}
                />
              </>
            );
          })}
          <SelectedBeast
            closeHandler={this.closeHandler}
            show={this.state.show}
            dataArray={this.state.dataArray}
          />
        </Row>
      </div>
    );
  }
}

export default Main;