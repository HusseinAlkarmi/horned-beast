import React from 'react';
import Hornedbeast from './Hornedbeast';
import items from './data.json';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Row xs={6} md={3} className="g-4">
          {items.map((val, index) => {
            return (
              <Hornedbeast
                key={index}
                title={val.title}
                img={val.image_url}
                description={val.title}
                keyWord={val.leyWord}
                horns={val.horns}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Main;