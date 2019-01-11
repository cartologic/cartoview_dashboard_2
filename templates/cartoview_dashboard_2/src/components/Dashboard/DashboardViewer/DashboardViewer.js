import React, {Component} from 'react';

class DashboardViewer extends Component{
    render() {
        return(
            <div>{this.props.match.params.id}</div>
        )
    }
}

export default DashboardViewer;
