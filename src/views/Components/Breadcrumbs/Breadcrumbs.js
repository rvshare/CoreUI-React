import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Breadcrumb, BreadcrumbItem} from "reactstrap";

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Breadcrumbs</strong>
          </CardHeader>
          <CardBlock className="card-body">
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
              <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default Breadcrumbs;
