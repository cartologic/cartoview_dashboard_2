import React, {Component} from 'react';
import {
    Button, ButtonGroup,
    Card, CardHeader, Col, Pagination, PaginationItem, PaginationLink,
    Row,
} from 'reactstrap';

import {Responsive, WidthProvider} from "react-grid-layout";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from 'axios';

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
            dashboardList: [],
            dashboardAPI:{
                total_count: 0,
                next_url: '',
                previous_url: '',
                pages_count: 0,
                displayed_pagination: [],
            },
        };
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/dashboards/?page=1`)
            .then(result => {
                let displayed_pagination = [];
                for (let i=0; i < Math.ceil(result.data.count / 3); i++) {
                    displayed_pagination.push(
                        <PaginationItem>
                            <PaginationLink tag="button">
                                {i+1}
                            </PaginationLink>
                        </PaginationItem>
                    )
                }
                this.setState({
                    dashboardList: result.data.results,
                    dashboardAPI: {
                        total_count: result.data.count,
                        next_url: result.data.next,
                        previous_url: result.data.previous,
                        pages_count: Math.ceil(result.data.count / 4),
                        displayed_pagination: displayed_pagination,
                    }
                });
            })
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
        const dashboardList = this.state.dashboardList.map((dashboard, i) => <Dashboard key={dashboard.id} dashboardObject={dashboard}/>);

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
                    {dashboardList}
                </Row>
                <Row className="top-buffer">
                    <Pagination>
                        <PaginationItem disabled={this.state.dashboardAPI.previous_url ? false : true}>
                            <PaginationLink previous tag="button" />
                        </PaginationItem>
                        {this.state.dashboardAPI.displayed_pagination}
                        <PaginationItem disabled={this.state.dashboardAPI.next_url ? false : true}>
                            <PaginationLink next tag="button" />
                        </PaginationItem>
                    </Pagination>
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
