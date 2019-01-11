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
        this.state = {
            widgets: this.props.widgets,
            dashboardList: [],
            dashboardAPI: {
                total_count: 0,
                next_url: '',
                previous_url: '',
                pages_count: 0,
                displayed_pagination: [],
            },
        };
    }

    handleIncomingDataFromAPI = (APIResult, pageNumber = 1) => {
        let displayed_pagination = [];
        displayed_pagination.push(
            <PaginationItem disabled={APIResult.data.previous ? false : true}
                            onClick={() => this.handlePageTransition(pageNumber - 1)}>
                <PaginationLink previous tag="button"/>
            </PaginationItem>
        )
        for (let i = 0; i < Math.ceil(APIResult.data.count / 3); i++) {
            displayed_pagination.push(
                <PaginationItem onClick={() => this.handlePageTransition(i + 1)}
                                active={i + 1 == pageNumber ? true : false}>
                    <PaginationLink tag="button">
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        displayed_pagination.push(
            <PaginationItem disabled={APIResult.data.next ? false : true}
                            onClick={() => this.handlePageTransition(pageNumber + 1)}>
                <PaginationLink next tag="button"/>
            </PaginationItem>
        )
        this.setState({
            dashboardList: APIResult.data.results,
            dashboardAPI: {
                total_count: APIResult.data.count,
                next_url: APIResult.data.next,
                previous_url: APIResult.data.previous,
                pages_count: Math.ceil(APIResult.data.count / 4),
                displayed_pagination: displayed_pagination,
            }
        });
    }

    handlePageTransition = (pageNumber) => {
        axios.get(`http://127.0.0.1:8000/api/dashboards/?page=` + pageNumber)
            .then(APIResult => {
                this.handleIncomingDataFromAPI(APIResult, pageNumber);
            })
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/dashboards/?page=1`)
            .then(APIResult => {
                this.handleIncomingDataFromAPI(APIResult);
            })
    }

    onLayoutChange(layout, layouts) {
        this.setState({layouts});
    }

    render() {
        const dashboardList = this.state.dashboardList.map((dashboard, i) => <Dashboard key={dashboard.id}
                                                                                        dashboardObject={dashboard}/>);

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
                        {this.state.dashboardAPI.displayed_pagination}
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
