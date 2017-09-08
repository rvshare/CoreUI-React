import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button} from "reactstrap";
import _capitalize from 'lodash/capitalize';

const variants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger', 'link'];
const outlineVariants = ['primary', 'secondary', 'success', 'warning', 'info', 'danger'];
const iconVariants = ['star', 'lightbulb-o', 'magic', 'map-marker', 'rss', 'link'];

class ButtonGroups extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        Button Groups
      </div>
    )
  }
}

export default ButtonGroups;
