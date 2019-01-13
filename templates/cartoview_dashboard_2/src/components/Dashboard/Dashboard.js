import React, {Component} from 'react';
import DefaultDashboardLogo from "../../assets/img/others/default-dashboard.png";
import {Col, CardBody, CardHeader, Card, CardFooter} from "reactstrap";
import Moment from 'react-moment';


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
                        <a href={"#/dashboards/"+this.state.id}>{this.state.title}</a>
                        <div className="card-header-actions">
                            <button className="card-header-action btn btn-setting"><i className="icon-settings"></i></button>
                            <button className="card-header-action btn btn-close"><i className="icon-close"></i></button>
                        </div>
                    </CardHeader>
                    <CardBody><img className="card-img-bottom" src={DefaultDashboardLogo}
                                   alt="Default Dashboard"/></CardBody>
                    <CardFooter>
                        Created - <Moment interval={0} format="DD MMM YYYY - hh:mm a" date={this.state.date_created}/>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

export default Dashboard;
