import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Alert} from "reactstrap";
import _capitalize from 'lodash/capitalize';

const variants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger', 'light', 'dark'];

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  toggle = () => {
    this.setState({ visible: false }, () => {
      setTimeout(() => this.setState({ visible: true }), 2000);
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Standard</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <Alert color={variant} key={variant}>
                    This is a {variant} alert—<strong>check it out!</strong>
                  </Alert>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Link Color</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <Alert color={variant} key={variant}>
                    This is a {variant} alert with <a href="#" className="alert-link">an example link</a>. Don't click it.
                  </Alert>
                )}
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Additional Content</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Alert color="success">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </Alert>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Dismissable</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Alert className="fadeIn" color="info" isOpen={this.state.visible} toggle={this.toggle}>
                  I am an alert and I can be dismissed! For this test, I'll be right back.
                </Alert>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Alerts;
