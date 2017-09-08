import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button} from "reactstrap";
import _capitalize from 'lodash/capitalize';

const variants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger', 'link'];
const outlineVariants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger'];
const iconVariants = ['star', 'lightbulb-o', 'magic', 'map-marker', 'rss', 'link'];

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Solid</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Button color={variant}>{_capitalize(variant)}</Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>With Icons</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map((variant, i) =>
                  <span key={variant}>
                    <Button color={variant}>
                      <i className={`fa fa-${iconVariants[i]}`} />
                      {' '}
                      {_capitalize(variant)}
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Large </strong>
                <small>Add this class <code>.btn-lg</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} size="lg">{_capitalize(variant)}</Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Small </strong>
                <small>Add this class <code>.btn-sm</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} size="sm">{_capitalize(variant)}</Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Disabled state </strong>
                <small>Add this <code>disabled="disabled"</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} disabled>{_capitalize(variant)}</Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Active state </strong>
                <small>Add this class <code>.active</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} active>{_capitalize(variant)}</Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Block Level Buttons </strong>
                <small>Add this class <code>.btn-block</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <Button color={variant} size="lg" block key={variant}>
                    Block Level Button
                  </Button>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Outline</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} outline>{_capitalize(variant)}</Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>With Icons</strong>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map((variant, i) =>
                  <span key={variant}>
                    <Button color={variant} outline>
                      <i className={`fa fa-${iconVariants[i]}`} />
                      {' '}
                      {_capitalize(variant)}
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Large </strong>
                <small>Add this class <code>.btn-lg</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} outline size="lg">
                      {_capitalize(variant)}
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Small </strong>
                <small>Add this class <code>.btn-sm</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} outline size="sm">
                      {_capitalize(variant)}
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Disabled state </strong>
                <small>Add this <code>disabled="disabled"</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} outline disabled>
                      {_capitalize(variant)}
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Active state </strong>
                <small>Add this class <code>.active</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map(variant =>
                  <span key={variant}>
                    <Button color={variant} outline active>
                      {_capitalize(variant)}
                    </Button>
                    {' '}
                  </span>
                )}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Block Level Buttons </strong>
                <small>Add this class <code>.btn-block</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                {outlineVariants.map(variant =>
                  <Button color={variant} outline size="lg" block key={variant}>
                    Block level button
                  </Button>
                )}
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Buttons;
