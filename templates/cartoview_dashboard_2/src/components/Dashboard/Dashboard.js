import React, {Component} from 'react';
import DefaultDashboardLogo from "../../assets/img/others/default-dashboard.png";
import {Col, CardBody, CardHeader, Card} from "reactstrap";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.dashboardObject.title,
            id: this.props.dashboardObject.id,
            date_created: this.props.dashboardObject.date_created
        };
    }

    render() {
        return (
            <Col xs="12" sm="6" md="4" key={this.state.id} id={this.state.id}>
                <Card>
                    <CardHeader>
                        <a href="#/dashboards">{this.state.title}</a> - created {this.state.date_created}
                        <div className="card-header-actions">
                            <a className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                            <a className="card-header-action btn btn-close"><i className="icon-close"></i></a>
                        </div>
                    </CardHeader>
                    <CardBody><img className="card-img-bottom" src={DefaultDashboardLogo}
                                   alt="Default Dashboard Image"/></CardBody>
                </Card>
            </Col>
        )
    }
}

export default Dashboard;
