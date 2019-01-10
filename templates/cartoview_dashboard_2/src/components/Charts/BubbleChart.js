import React, {Component} from "react";
import {Chart} from "react-charts";


class BubbleChart extends Component {
  render() {
    return (
      <div
        style={{
          width: "inherit",
          height: "inherit"
        }}
      >
        <Chart
          data={[
            {
              label: "Series 1",
              data: [[0, 0], [1, 1, 10], [2, 5, 18], [3, 3, 32], [5, 5, 25], [6, 6]]
            }
          ]}
          series={{ type: 'bubble' }}
          axes={[
            { primary: true, position: 'bottom', type: 'linear' },
            { position: 'left', type: 'linear' },
          ]}
          primaryCursor
          secondaryCursor
          tooltip
        />
      </div>
    )
  }
}

export default BubbleChart;
