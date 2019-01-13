import React, {Component} from 'react';
import {AreaChart, ColumnChart, LineChart, BubbleChart, BarChart} from '../../Charts';
import {Row, Col, Button, CardBody, Card} from "reactstrap";
import {
    aggregateWidgetIcon, areaWidgetIcon, barWidgetIcon,
    bubbleWidgetIcon, columnWidgetIcon, identifyWidgetIcon,
    legendWidgetIcon, lineWidgetIcon, mapWidgetIcon, pieWidgetIcon
} from "../../../assets/img/widgets/";

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
                            <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={mapWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={barWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={pieWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={lineWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={areaWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={columnWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button color="light"><div className="avatar float-right"><img className="img-avatar" src={bubbleWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={aggregateWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={legendWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            {' '}
                            <Button disabled color="light"><div className="avatar float-right"><img className="img-avatar" src={identifyWidgetIcon} alt="WidgetIcon"></img></div></Button>
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
