import React from "react";
import ReactApexChart from "react-apexcharts";

class TargetVsReality extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "A",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "B",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "C",
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: "D",
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            borderRadiusApplication: "end", // 'around', 'end'
            borderRadiusWhenStacked: "last", // 'all', 'last'
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
          ],
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div id="TotalRevenue" className="w-full">
        <div className="mb-2 font-semibold">Target vs. Reality</div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={200}
        />
      </div>
    );
  }
}

export default TargetVsReality;
