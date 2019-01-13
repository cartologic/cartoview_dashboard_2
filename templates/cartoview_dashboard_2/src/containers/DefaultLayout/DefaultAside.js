import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import aggregateIcon from '../../assets/img/widgets/aggregate-widget.png';
import barIcon from '../../assets/img/widgets/bar-widget.png';
import identifyIcon from '../../assets/img/widgets/identify-widget.png';
import legendIcon from '../../assets/img/widgets/legend-widget.png';
import lineIcon from '../../assets/img/widgets/line-widget.png';
import mapIcon from '../../assets/img/widgets/map-widget.png';
import pieIcon from '../../assets/img/widgets/pie-widget.png';
import areaIcon from '../../assets/img/widgets/area-widget.png';
import columnIcon from '../../assets/img/widgets/column-widget.png';
import bubbleIcon from '../../assets/img/widgets/bubble-widget.png';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-plus"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-primary bg-light text-center font-weight-bold text-muted text-uppercase small">Select a widget to add</ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted small">Maps</ListGroupItem>
              <ListGroupItem disabled action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={mapIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Map</strong>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted small">Charts</ListGroupItem>
              <ListGroupItem onClick={() => this.props.addChart("bar")} action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={barIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Bar Chart</strong>
              </ListGroupItem>
              <ListGroupItem disabled action tag="a" href="#" className="list-group-item-accent-dark list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={pieIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Pie Chart</strong>
              </ListGroupItem>
              <ListGroupItem onClick={() => this.props.addChart("line")} action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={lineIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Line Chart</strong>
              </ListGroupItem>
              <ListGroupItem onClick={() => this.props.addChart("area")} action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={areaIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Area Chart</strong>
              </ListGroupItem>
              <ListGroupItem onClick={() => this.props.addChart("column")} action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={columnIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Column Chart</strong>
              </ListGroupItem>
              <ListGroupItem onClick={() => this.props.addChart("bubble")} action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={bubbleIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Bubble Chart</strong>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted small">Others</ListGroupItem>
              <ListGroupItem disabled action tag="a" href="#" className="list-group-item-accent-light list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={aggregateIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Aggregate Widget</strong>
              </ListGroupItem>
              <ListGroupItem disabled action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={legendIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Legend</strong>
              </ListGroupItem>
              <ListGroupItem disabled action tag="a" href="#" className="list-group-item-accent-secondary list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={identifyIcon} alt="WidgetIcon"></img>
                </div>
                <strong>Identify</strong>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
