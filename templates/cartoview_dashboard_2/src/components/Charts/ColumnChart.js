import React, {Component} from "react";
import {Chart} from "react-charts";


class ColumnChart extends Component {
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
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: "Series 2",
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ]}
          series={{ type: 'bar' }}
          axes={[
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: true },
          ]}
          primaryCursor
          secondaryCursor
          tooltip
        />
      </div>
    )
  }
}

export default ColumnChart;
