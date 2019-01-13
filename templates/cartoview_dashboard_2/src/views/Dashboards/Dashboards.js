import React, {Component} from 'react';
import {
    Button,
    ButtonGroup,
    Col,
    Form,
    FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
} from 'reactstrap';


import Dashboard from "../../components/Dashboard/Dashboard";
import axios from 'axios';


class Dashboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewDashboardModal: false,
            newDashboardTitle: '',
            dashboardList: [],
            dashboardAPI: {
                total_count: 0,
                next_url: '',
                previous_url: '',
                pages_count: 0,
                displayed_pagination: [],
            },
        };

        this.toggleNewDashboardModal = this.toggleNewDashboardModal.bind(this);
    }


    toggleNewDashboardModal() {
        this.setState({
            NewDashboardModal: !this.state.NewDashboardModal,
        });
    }

    setNewDashboardTitle = (event) => {
        this.setState({
            newDashboardTitle: event.target.value
        });
    }

    createNewDashboard = () => {
        const dashboard = {
            title: this.state.newDashboardTitle
        }
        axios.post('http://127.0.0.1:8000/api/dashboards/create/', dashboard)
            .then(result => {
                console.log(result)
            })
    }

    handleIncomingDataFromAPI = (APIResult, pageNumber = 1) => {
        let displayed_pagination = [];
        for (let i = 0; i < Math.ceil(APIResult.data.count / 8); i++) {
            displayed_pagination.push(
                <PaginationItem key={i + 1} onClick={() => this.handlePageTransition(i + 1)}
                                active={i + 1 === pageNumber ? true : false}>
                    <PaginationLink tag="button">
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        this.setState({
            dashboardList: APIResult.data.results,
            dashboardAPI: {
                total_count: APIResult.data.count,
                next_url: APIResult.data.next,
                previous_url: APIResult.data.previous,
                pages_count: Math.ceil(APIResult.data.count / 8),
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
        this.handlePageTransition(1)
    }

    getDisplayedPagination = () => {
        return(
            <Pagination>
                {this.state.dashboardAPI.displayed_pagination}
            </Pagination>
        );
    }


    render() {
        const dashboardList = this.state.dashboardList.map((dashboard, i) => <Dashboard key={dashboard.id} dashboardObject={dashboard}/>);

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <ButtonGroup className="mr-2">
                            <Button color="primary" onClick={this.toggleNewDashboardModal}>New Dashboard</Button>
                            <Modal isOpen={this.state.NewDashboardModal} toggle={this.toggleNewDashboardModal}
                                   className={'modal-primary'}>
                                <ModalHeader toggle={this.toggleNewDashboardModal}>Modal title</ModalHeader>
                                <ModalBody>
                                    <Form action="" method="post" className="form-horizontal">
                                        <FormGroup row>
                                            <Col md="2"><Label htmlFor="dashboard-title">Title</Label></Col>
                                            <Col xs="12" md="10">
                                                <Input onChange={this.setNewDashboardTitle} type="text" id="dashboard-title" name="dashboard-title" placeholder="Please enter title for dashboard"/>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.createNewDashboard}>Create</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleNewDashboardModal}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Button disabled color="success">Import</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="top-buffer">
                    {dashboardList}
                </Row>
                <Row className="top-buffer">
                    {this.getDisplayedPagination()}
                </Row>
            </div>
        );
    }
}

export default Dashboards;
