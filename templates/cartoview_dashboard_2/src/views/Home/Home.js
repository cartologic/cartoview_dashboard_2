import React, {Component} from 'react';
import {
    Card, CardBody, CardHeader, Col,
    Row,
} from 'reactstrap';


class Base extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Welcome Django User
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

export default Base;
