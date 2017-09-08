import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Badge, Button} from "reactstrap";
import _capitalize from 'lodash/capitalize';

const variants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger', 'light', 'dark'];

class Badges extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Scale to Heading</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(Heading =>
                  <Heading key={Heading}>
                    Example heading <Badge color="secondary">New</Badge>
                  </Heading>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>On a button</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map((variant, i) =>
                  <span key={variant}>
                    <Button>
                      Notifications
                      {' '}
                      <Badge color={variant}>{i+10}</Badge>
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Colors</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map((variant, i) =>
                  <span key={variant}>
                    <Badge color={variant}>{_capitalize(variant)}</Badge>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Pill Badges</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map((variant, i) =>
                  <span key={variant}>
                    <Badge color={variant} pill>{_capitalize(variant)}</Badge>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Badges;
