'use strict'

import React from 'react';
import Row from 'react-bootstrap/Row';
import Hornedbeast from './Hornedbeast';
import SelectedBeast from './SelectedBeast';
import dataArray from './data.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataArray: {},
      show: false,
     
    };
  }
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