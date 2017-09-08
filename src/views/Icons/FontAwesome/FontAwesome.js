import React, {Component} from 'react';
import {Alert, Row, Col, Card, CardHeader, CardBlock} from 'reactstrap';

import * as loader from './loader';

class FontAwesome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.loadIcons();
  }

  async loadIcons() {
    const icons = await loader.getIcons();

    const recentVersions = loader.getIconsFromRecentVersions(icons, 2);
    const categories = loader.getCategories(icons);

    this.setState({ recentVersions, categories });
  }

  renderIcons(icons) {
    return icons.map(icon =>
      <Col key={icon.id} className="fa-hover" xs="6" sm="4" md="3" lg="2" title={icon.name}>
        <i className={`fa fa-${icon.id} fa-lg mt-4`} />
        <br/>
        {icon.id}
        {icon.aliasFor &&
          <span title={icon.aliasFor} className="text-muted">
            {' '}(alias)
          </span>
        }
      </Col>
    );
  }

  renderVersionCard(version, icons) {
    return (
      <Card key={version} className="fadeIn">
        <CardHeader>{icons.length} New Icons in {version}</CardHeader>
        <CardBlock className="card-body">
          <Row className="text-center">
            {this.renderIcons(icons)}
          </Row>
        </CardBlock>
      </Card>
    );
  }

  renderCategoryCard(name, icons) {
    return (
      <Card key={name} className="fadeIn">
        <CardHeader>{name}</CardHeader>
        <CardBlock className="card-body">
          <Row className="text-center">
            {this.renderIcons(icons)}
          </Row>
        </CardBlock>
      </Card>
    );
  }

  render() {
    const { categories, recentVersions } = this.state;

    return (
      <div className="animated fadeIn">
        {recentVersions && recentVersions.map(({ version, icons }) => {
          return this.renderVersionCard(version, icons);
        })}

        {categories && categories.map(({name, icons}) => {
          return this.renderCategoryCard(name, icons);
        })}
      </div>

    )
  }
}

export default FontAwesome;
