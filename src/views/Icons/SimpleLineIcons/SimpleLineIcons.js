import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock} from "reactstrap";

import icons from './icons';

class SimpleLineIcons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card color="secondary" className="card-default">
          <CardHeader>
            <i className="fa fa-picture-o"></i> Simple Line Icons
          </CardHeader>
          <CardBlock className="card-body">
            <Row className="text-center">
              {icons.map(name =>
                <Col key={name} xs="6" sm="4" md="3">
                  <i className={`icon-${name} icons font-2xl d-block mt-4`} />
                  icon-{name}
                </Col>
              )}
            </Row>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default SimpleLineIcons;
