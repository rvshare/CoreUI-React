import React, {Component} from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const mockRows = [
  { name: 'Samppa Nori', date: '2012/01/01', role: 'Member', badge: { color: 'success', text: 'Active' } },
  { name: 'Estavan Lykos', date: '2012/02/01', role: 'Staff', badge: { color: 'danger', text: 'Banned' } },
  { name: 'Chetan Mohamed', date: '2012/02/01', role: 'Admin', badge: { color: 'secondary', text: 'Inactive' } },
  { name: 'Derick Maximinus', date: '2012/03/01', role: 'Member', badge: { color: 'warning', text: 'Pending' } },
  { name: 'Friderik Dávid', date: '2012/01/21', role: 'Staff', badge: { color: 'success', text: 'Active' } },
];

const MockTable = props => {
  return (
    <div>
      <Table {...props}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Date registered</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockRows.map(row =>
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.date}</td>
              <td>{row.role}</td>
              <td>
                <Badge color={row.badge.color}>{row.badge.text}</Badge>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination>
          <PaginationItem>
            <PaginationLink previous href="#"></PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#"></PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader>
              <CardBlock className="card-body">
                <MockTable responsive />
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Striped Table
              </CardHeader>
              <CardBlock className="card-body">
                <MockTable responsive striped />
              </CardBlock>
            </Card>
          </Col>
        </Row>

        <Row>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Condensed Table
              </CardHeader>
              <CardBlock className="card-body">
                <MockTable responsive size="sm" />
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Bordered Table
              </CardHeader>
              <CardBlock className="card-body">
                <MockTable responsive bordered />
              </CardBlock>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Combined All Table
              </CardHeader>
              <CardBlock className="card-body">
                <MockTable hover bordered striped responsive size="sm" />
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Tables;
