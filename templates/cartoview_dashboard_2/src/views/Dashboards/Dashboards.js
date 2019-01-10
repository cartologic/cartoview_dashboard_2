import React, {Component} from 'react';
import {
    Button, ButtonGroup,
    Card, CardBody, CardFooter, CardHeader, Col, Collapse,
    Row,
} from 'reactstrap';

import {Responsive, WidthProvider} from "react-grid-layout";
import DefaultDashboardLogo from '../../assets/img/others/default-dashboard.png';
import Dashboard from "../../components/Dashboard/Dashboard";

const ResponsiveReactGridLayout = WidthProvider(Responsive);


class Dashboards extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
            widgets: this.props.widgets,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    onRadioBtnClick(radioSelected) {
        this.setState({
            radioSelected: radioSelected,
        });
    }

    onLayoutChange(layout, layouts) {
        this.setState({layouts});
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <ButtonGroup className="mr-2">
                            <Button color="success">New Dashboard</Button>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Button disabled color="primary">Import</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="top-buffer">
                    {[...Array(4)].map((x, i) =>
                        <Dashboard key={i}/>
                    )}
                </Row>
                <Row>
                    <Col>
                        <ResponsiveReactGridLayout
                            className="layout"
                            rowHeight={30}
                            items={16}
                            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                            preventCollision={false}
                            autoSize={true}
                            layouts={this.state.layouts}
                            onLayoutChange={(layout, layouts) =>
                                this.onLayoutChange(layout, layouts)
                            }
                        >
                            {
                                this.props.widgets.map(
                                    (widget, index) => {
                                        return (
                                            <Card key={index}
                                                  data-grid={{x: (index * 4) % 12, y: (index * 8), w: 4, h: 8}}>
                                                <CardHeader>
                                                    Widget Title
                                                    <div className="card-header-actions">
                                                        <a href="#"
                                                           className="card-header-action btn btn-setting"><i
                                                            className="icon-settings"></i></a>
                                                        <a className="card-header-action btn btn-close"
                                                           onClick={this.toggleFade}><i
                                                            className="icon-close"></i></a>
                                                    </div>
                                                </CardHeader>
                                                {widget}
                                            </Card>
                                        )
                                    }
                                )
                            }
                        </ResponsiveReactGridLayout>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboards;
