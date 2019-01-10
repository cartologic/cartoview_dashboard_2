import React, {Component, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import LineChart from "../../components/LineChart";
import AreaChart from "../../components/AreaChart";
import BarChart from "../../components/BarChart";
import BubbleChart from "../../components/BubbleChart";
import ColumnChart from "../../components/ColumnChart";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  constructor(props) {
    super(props);
    this.state = {
      widgets: []
    }
  }

  addChart = (chartType) => {
    const updatedWidgets = this.state.widgets;
    switch (chartType) {
      case "area": updatedWidgets.push(<AreaChart/>); break;
      case "bar": updatedWidgets.push(<BarChart/>); break;
      case "bubble": updatedWidgets.push(<BubbleChart/>); break;
      case "column": updatedWidgets.push(<ColumnChart/>); break;
      case "line": updatedWidgets.push(<LineChart/>); break;
    }
    this.setState({
      widgets: updatedWidgets
    })
  }

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader/>
            <AppSidebarForm/>
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} widgets={this.state.widgets} />
                        )}/>
                    ) : (null);
                  })}
                  <Redirect from="/" to="/home"/>
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside addChart={this.addChart}/>
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter/>
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
