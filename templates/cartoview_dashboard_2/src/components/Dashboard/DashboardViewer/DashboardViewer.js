import React, {Component, Suspense} from 'react';
import {AppAside, AppAsideToggler} from "@coreui/react";
import DefaultAside from "../../../containers/DefaultLayout/DefaultAside";
import AreaChart from "../../Charts/AreaChart";
import BarChart from "../../Charts/BarChart";
import BubbleChart from "../../Charts/BubbleChart";
import ColumnChart from "../../Charts/ColumnChart";
import LineChart from "../../Charts/LineChart";
import {ListGroupItem, Row, Col, Button, CardBody, Card} from "reactstrap";
import barIcon from "../../../assets/img/widgets/bar-widget.png";
import mapIcon from "../../../assets/img/widgets/map-widget.png";
import pieIcon from "../../../assets/img/widgets/pie-widget.png";
import lineIcon from "../../../assets/img/widgets/line-widget.png";
import areaIcon from "../../../assets/img/widgets/area-widget.png";
import columnIcon from "../../../assets/img/widgets/column-widget.png";
import bubbleIcon from "../../../assets/img/widgets/bubble-widget.png";
import aggregateIcon from "../../../assets/img/widgets/aggregate-widget.png";
import legendIcon from "../../../assets/img/widgets/legend-widget.png";
import identifyIcon from "../../../assets/img/widgets/identify-widget.png";

class DashboardViewer extends Component {
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
            case "area":
                updatedWidgets.push(<AreaChart/>);
                break;
            case "bar":
                updatedWidgets.push(<BarChart/>);
                break;
            case "bubble":
                updatedWidgets.push(<BubbleChart/>);
                break;
            case "column":
                updatedWidgets.push(<ColumnChart/>);
                break;
            case "line":
                updatedWidgets.push(<LineChart/>);
                break;
            default:
                updatedWidgets.push(<LineChart/>);
                break;
        }
        this.setState({
            widgets: updatedWidgets
        })
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                <Card className="align-items-center">
                <CardBody>
                    <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={mapIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={barIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={pieIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={lineIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={areaIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={columnIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={bubbleIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={aggregateIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={legendIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                    <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={identifyIcon} alt="WidgetIcon"></img></div></Button>
                    {' '}
                </CardBody>
                </Card>
                    </Col>
                </Row>
                <div>{this.props.match.params.id}</div>

            </div>
        )
    }
}

export default DashboardViewer;
