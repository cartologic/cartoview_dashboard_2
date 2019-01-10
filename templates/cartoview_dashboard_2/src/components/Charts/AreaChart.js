import React, {Component} from 'react'
import {Chart} from "react-charts";

class AreaChart extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Chart
          data={[
            {
              label: "Series 1",
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: "Series 2",
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ]}
          series={{type: 'area'}}
          axes={[
            {primary: true, position: 'bottom', type: 'time'},
            {position: 'left', type: 'linear', stacked: true},
          ]}
          primaryCursor
          secondaryCursor
          tooltip
        />
      </div>
    )
  }
}

export default AreaChart;
