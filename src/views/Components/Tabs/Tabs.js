import React, {Component} from "react";
import {Badge, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import classnames from "classnames";

const exampleContent = page => `
${page}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
officia deserunt mollit anim id est laborum.
`;

const MockTabs = ({ activeTab, toggle, tabs }) => {
  return (
    <Nav tabs>
      {tabs.map((tab, index) => {
        const tabNum = (index + 1).toString();
        const active = activeTab === tabNum;

        const className = classnames({ active });
        const onClick = () => toggle(tabNum);

        return (
          <NavItem key={index}>
            <NavLink className={className} onClick={onClick}>
              {tab.icon &&
                <i className={`icon-${tab.icon}`} />
              }
              {' '}
              {!tab.icon && tab.title}
              {!!tab.icon && !!tab.title &&
                <span className={classnames({ 'd-none': !active })}>{tab.title}</span>
              }
              {' '}
              {tab.badge &&
                <Badge pill color={tab.badge.color}>{tab.badge.text}</Badge>
              }
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

const MockTabContent = props => (
  <TabContent {...props}>
    <TabPane tabId="1">{exampleContent(1)}</TabPane>
    <TabPane tabId="2">{exampleContent(2)}</TabPane>
    <TabPane tabId="3">{exampleContent(3)}</TabPane>
  </TabContent>
);

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" className="mb-4">
            <MockTabs
              activeTab={this.state.activeTab}
              toggle={this.toggle}
              tabs={[
                { title: 'Home' },
                { title: 'Profile' },
                { title: 'Messages' },
              ]}
            />
            <MockTabContent activeTab={this.state.activeTab} />
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <MockTabs
              activeTab={this.state.activeTab}
              toggle={this.toggle}
              tabs={[
                { icon: 'calculator' },
                { icon: 'basket-loaded' },
                { icon: 'pie-chart' },
              ]}
            />
            <MockTabContent activeTab={this.state.activeTab} />
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <MockTabs
              activeTab={this.state.activeTab}
              toggle={this.toggle}
              tabs={[
                { icon: 'calculator', title: 'Calculator' },
                { icon: 'basket-loaded', title: 'Shopping Cart' },
                { icon: 'pie-chart', title: 'Charts' },
              ]}
            />
            <MockTabContent activeTab={this.state.activeTab} />
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <MockTabs
              activeTab={this.state.activeTab}
              toggle={this.toggle}
              tabs={[
                { icon: 'calculator', title: 'Calculator', badge: { color: 'success', text: 'New' } },
                { icon: 'basket-loaded', title: 'Shopping Cart', badge: { color: 'danger', text: '29' } },
                { icon: 'pie-chart', title: 'Charts' },
              ]}
            />
            <MockTabContent activeTab={this.state.activeTab} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tabs;
