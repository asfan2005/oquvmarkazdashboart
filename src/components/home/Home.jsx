import React from "react";
import Chart from "react-apexcharts";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const chartConfigTwo = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

function Home() {
  return (
    <div className="dark:bg-gray-900">
      <div className="mx-auto my-10 px-5">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 text-fuchsia-400">
                  <Square3Stack3DIcon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <Typography color="gray">Total Sales</Typography>
                <Typography
                  tag="div"
                  color="gray"
                  className="text-2xl font-bold text-gray-900"
                >
                  $9850.90
                </Typography>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-400">
                  <Square3Stack3DIcon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <Typography color="gray">Net Revenue</Typography>
                <Typography
                  tag="div"
                  color="gray"
                  className="text-2xl font-bold text-gray-900"
                >
                  $7520.50
                </Typography>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-400">
                  <Square3Stack3DIcon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <Typography color="gray">Customers</Typography>
                <Typography
                  tag="div"
                  color="gray"
                  className="text-2xl font-bold text-gray-900"
                >
                  1375
                </Typography>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-400">
                  <Square3Stack3DIcon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <Typography color="gray">Feedbacks</Typography>
                <Typography
                  tag="div"
                  color="gray"
                  className="text-2xl font-bold text-gray-900"
                >
                  4050
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <Card className="my-5">
          <CardBody>
            <Chart {...chartConfig} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Oylik guruh o'zlashtirish
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
                Visualize your data in a simple way using the
                @material-tailwind/react chart plugin.
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfigTwo} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
