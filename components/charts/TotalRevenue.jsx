import React from "react";
import ReactApexChart from "react-apexcharts";

class TotalRevenue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Online Sales",
          data: [44, 55, 57, 56, 61, 10, 10],
        },
        {
          name: "Offline Sales",
          data: [76, 85, 101, 98, 87, 10, 10],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="TotalRevenue" className="w-full">
        <div className="mb-2 font-semibold">Total Revenue</div>
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

export default TotalRevenue;
