import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';

// Components
import Alerts from '../../views/Components/Alerts/';
import Badges from '../../views/Components/Badges/';
import Breadcrumbs from '../../views/Components/Breadcrumbs/';
import Buttons from '../../views/Components/Buttons/';
import ButtonGroups from '../../views/Components/ButtonGroups/';
import Cards from '../../views/Components/Cards/';
import Carousels from '../../views/Components/Carousels/';
import Dropdowns from '../../views/Components/Dropdowns/';
import Forms from '../../views/Components/Forms/';
import InputGroups from '../../views/Components/InputGroups/';
import Jumbotrons from '../../views/Components/Jumbotrons/';
import ListGroups from '../../views/Components/ListGroups/';
import Modals from '../../views/Components/Modals/';
import Navs from '../../views/Components/Navs/';
import Navbars from '../../views/Components/Navbars/';
import Paginations from '../../views/Components/Paginations/';
import Popovers from '../../views/Components/Popovers/';
import ProgressBars from '../../views/Components/ProgressBars/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';
import Tooltips from '../../views/Components/Tooltips/';

// Icons
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>

                <Route path="/components/alerts" name="Alerts" component={Alerts}/>
                <Route path="/components/badges" name="Badges" component={Badges}/>
                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                <Route path="/components/button-groups" name="ButtonGroups" component={ButtonGroups}/>
                <Route path="/components/breadcrumbs" name="Breadcrumbs" component={Breadcrumbs}/>
                <Route path="/components/cards" name="Cards" component={Cards}/>
                <Route path="/components/carousels" name="Carousels" component={Carousels}/>
                <Route path="/components/dropdowns" name="Dropdowns" component={Dropdowns}/>
                <Route path="/components/forms" name="Forms" component={Forms}/>
                <Route path="/components/input-groups" name="Input Groups" component={InputGroups}/>
                <Route path="/components/list-groups" name="List Groups" component={ListGroups}/>
                <Route path="/components/jumbotrons" name="Jumbotrons" component={Jumbotrons}/>
                <Route path="/components/modals" name="Modals" component={Modals}/>
                <Route path="/components/navs" name="Navs" component={Navs}/>
                <Route path="/components/navbars" name="Navbars" component={Navbars}/>
                <Route path="/components/paginations" name="Paginations" component={Paginations}/>
                <Route path="/components/popovers" name="Popovers" component={Popovers}/>
                <Route path="/components/progress-bars" name="ProgressBars" component={ProgressBars}/>
                <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons}/>
                <Route path="/components/switches" name="Swithces" component={Switches}/>
                <Route path="/components/tables" name="Tables" component={Tables}/>
                <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                <Route path="/components/tooltips" name="Tooltips" component={Tooltips}/>

                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>

                <Route path="/widgets" name="Widgets" component={Widgets}/>
                <Route path="/charts" name="Charts" component={Charts}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
