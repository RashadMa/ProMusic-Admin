import React from "react";

import { Link } from "react-router-dom";

import "../../components/status-card/statuscard.css";
import Chart from "react-apexcharts";

import { useDispatch, useSelector } from "react-redux";

import StatusCard from "../../components/status-card/StatusCard";

// import Table from "../../components/table/Table";
import { BsCart } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import Badge from "../../components/badge/Badge";

import statusCards from "../../assets/JsonData/status-card-data.json";
import { useHistory } from "react-router-dom";
import { getOrders } from "../../redux/actions/orderActions";
import { Col, Row, Table } from "reactstrap";
import { ImNewspaper } from "react-icons/im";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840",
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["order id", "email", "address", "total price", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const [total, setTotal] = React.useState(0);

  const { items: orders } = useSelector((state) => state.orderListReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    getOrders()(dispatch);
  }, [dispatch]);
  //   React.useEffect(() => {
  //     // let sum = 0;
  //     // orders.forEach((income) => {
  //     //   sum =
  //     //     sum +
  //     //     income.salePrice *
  //     //       (1 - income.discountPercent / 100) *
  //     //       income.count;
  //     // });
  //     // setTotal(sum);
  //     orders.reduce((a, v) => (a = a + v.totalPrice), 0);
  //   }, [orders]);
  //   console.log((data.reduce((a,v) =>  a = a + v.prix , 0 )))
  //   console.log(orders.reduce((a, v) => (a = a + v.totalPrice), 0));

  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="row">
            <div className="status-card">
              <div className="status-card__icon">
                <BsCart />
              </div>
              <div className="status-card__info">
                <h4>{orders?.length}</h4>
                <span>Total Sales</span>
              </div>
            </div>
            {/* {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))} */}
          </div>
          <Row>
            <Col lg="6">
              <div className="status-card">
                <div className="status-card__icon">
                  <AiOutlineDollar />
                </div>
                <div className="status-card__info">
                  <h4>{orders?.reduce((a, v) => (a = a + v.totalPrice), 0)}</h4>
                  <span>Total Income</span>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="status-card">
                <div className="status-card__icon">
                  <ImNewspaper />
                </div>
                <div className="status-card__info">
                  <h4>{orders?.length}</h4>
                  <span>Total Orders</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* chart */}
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table hover dark>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>E-mail</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.status}</td>
                      <td>{item.email}</td>
                      <td>{item.adress}</td>
                      <td>{item.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
