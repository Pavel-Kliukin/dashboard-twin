import React from "react";
import ReactApexChart from "react-apexcharts";

class CustomerSatisfaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Last Moth",
          data: [52, 63, 45, 39, 44, 52, 61],
        },
        {
          name: "This Month",
          data: [89, 70, 79, 71, 90, 65, 109],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="TotalRevenue" className="w-full">
        <div className="mb-2 font-semibold">Customers Satisfaction</div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={200}
        />
      </div>
    );
  }
}

export default CustomerSatisfaction;
