import React, {Component} from 'react';
import {
    Card, CardBody, CardHeader, Col,
    Row,
} from 'reactstrap';


class Settings extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Settings
                            </CardHeader>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Settings;
