import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Label, Input, Table} from "reactstrap";

import Switch from '../../../components/Custom/Switch';

const variants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger'];

class Switches extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>3d Switch</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch make3d color={variant} defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch default</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch default - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch outline</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} outline defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch outline - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} outline pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline alternative
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} outline alt defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch outline alternative - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} outline pill alt defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with text</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onText="On" offText="Off" defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with text - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onText="On" offText="Off" pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with text outline</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onText="On" offText="Off" outline defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with text outline - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onText="On" offText="Off" outline pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with text outline alternative</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onText="On" offText="Off" outline alt defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with text outline alternative - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onText="On" offText="Off" outline alt pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with icon</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onIcon="check" offIcon="times" defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with icon - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onIcon="check" offIcon="times" pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with icon outline</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onIcon="check" offIcon="times" outline defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with icon outline - pills</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onIcon="check" offIcon="times" outline pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Switch with icon outline alternative</CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onIcon="check" offIcon="times" outline alt defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon outline alternative - pills
              </CardHeader>
              <CardBlock className="card-body">
                {variants.map(variant =>
                  <span key={variant}>
                    <Switch color={variant} onIcon="check" offIcon="times" outline alt pill defaultChecked />
                    &nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <CardHeader>Sizes</CardHeader>
              <CardBlock className="card-body p-0">
                <Table hover striped className="table-align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Example</th>
                      <th>CSS Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Large</td>
                      <td>
                        <Switch color="primary" make3d size="lg" defaultChecked />
                      </td>
                      <td>
                        Add following class <code>.switch-lg</code>
                      </td>
                    </tr>
                    <tr>
                      <td>Normal</td>
                      <td>
                        <Switch color="primary" make3d defaultChecked />
                      </td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Small</td>
                      <td>
                        <Switch color="primary" make3d size="sm" defaultChecked />
                      </td>
                      <td>
                        Add following class <code>.switch-sm</code>
                      </td>
                    </tr>
                    <tr>
                      <td>Extra small</td>
                      <td>
                        <Switch color="primary" make3d size="xs" defaultChecked />
                      </td>
                      <td>
                        Add following class <code>.switch-xs</code>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Switches;
