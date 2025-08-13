import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaChartArea, FaChartBar } from "react-icons/fa";
import { FaChartSimple, FaChartLine, FaChartPie, FaChartColumn } from "react-icons/fa6";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar,
  AreaChart, Area,
  ScatterChart, Scatter,
} from "recharts";

const Dashboard = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [month, setMonth] = useState("");
  const [preset, setPreset] = useState("");

  // Sample Data (same as before)
  const dataLine = [
    { name: "Mon", detections: 12 },
    { name: "Tue", detections: 19 },
    { name: "Wed", detections: 8 },
    { name: "Thu", detections: 15 },
    { name: "Fri", detections: 22 },
    { name: "Sat", detections: 10 },
    { name: "Sun", detections: 17 },
  ];
  const dataBar = [
    { name: "Cam 1", count: 15 },
    { name: "Cam 2", count: 25 },
    { name: "Cam 3", count: 8 },
    { name: "Cam 4", count: 18 },
  ];
  const dataPie = [
    { name: "Detected", value: 70 },
    { name: "Not Detected", value: 30 },
  ];
  const COLORS = ["#00C49F", "#FF8042"];
  const dataArea = [
    { day: "Mon", count: 10 },
    { day: "Tue", count: 15 },
    { day: "Wed", count: 5 },
    { day: "Thu", count: 20 },
    { day: "Fri", count: 18 },
  ];
  const dataBarSpeed = [
    { name: "Zone 1", count: 20 },
    { name: "Zone 2", count: 14 },
    { name: "Zone 3", count: 28 },
    { name: "Zone 4", count: 10 },
  ];
  const dataScatter = [
    { x: 10, y: 30 },
    { x: 20, y: 20 },
    { x: 30, y: 50 },
    { x: 40, y: 40 },
    { x: 50, y: 80 },
  ];

  const handleReset = () => {
    setDateFrom("");
    setDateTo("");
    setMonth("");
    setPreset("");
  };

  return (
    <Container fluid className="p-4 text-light">
      <h2 className="fw-bold text-center mb-4"><FaChartSimple /> Detection Dashboard</h2>

      {/* Filters Section */}
      <Card className="mb-4 p-3 shadow-sm" style={{ backgroundColor: "#2f3136" }}>
        <Row className="align-items-end g-3">
          {/* Custom Date From */}
          <Col md={2}>
            <Form.Label className="mb-1">From</Form.Label>
            <Form.Control
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </Col>

          {/* Custom Date To */}
          <Col md={2}>
            <Form.Label className="mb-1">To</Form.Label>
            <Form.Control
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </Col>

          {/* Month Selector */}
          <Col md={3}>
            <Form.Label className="mb-1">Month</Form.Label>
            <Form.Select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Select Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Form.Select>
          </Col>

          {/* Preset Dropdown */}
          <Col md={3}>
            <Form.Label className="mb-1">Quick Filter</Form.Label>
            <Form.Select value={preset} onChange={(e) => setPreset(e.target.value)}>
              <option value="">Select</option>
              <option value="today">Today</option>
              <option value="week">Current Week</option>
              <option value="month">Current Month</option>
            </Form.Select>
          </Col>

          {/* Reset Button */}
          <Col md={2} className="d-flex">
            <Button
              variant="primary"
              className="align-self-end w-100"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Charts Section */}
      <Row className="g-4">
        {/* PPE Kit Detection - Line Chart */}
        <Col md={6}>
          <Card className="shadow-sm p-3 text-light d-flex align-items-center" style={{ backgroundColor: "#2f3136" }}>
            <Card.Title className="text-center w-100 mb-4"><FaChartLine /> PPE Kit Detection</Card.Title>
            <div className="d-flex justify-content-center">
              <LineChart width={400} height={400} data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="detections" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </div>
          </Card>
        </Col>

        {/* Vehicle Detection - Bar Chart */}
        <Col md={6}>
          <Card className="shadow-sm p-3 text-light d-flex align-items-center" style={{ backgroundColor: "#2f3136" }}>
            <Card.Title className="text-center w-100 mb-4"><FaChartBar /> Vehicle Detection</Card.Title>
            <div className="d-flex justify-content-center">
              <BarChart width={400} height={400} data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#FFBB28" />
              </BarChart>
            </div>
          </Card>
        </Col>

        {/* Pedestrian Detection - Pie Chart */}
        <Col md={6}>
          <Card className="shadow-sm p-3 text-light d-flex align-items-center" style={{ backgroundColor: "#2f3136" }}>
            <Card.Title className="text-center w-100 mb-4"><FaChartPie /> Pedestrian Detection</Card.Title>
            <div className="d-flex justify-content-center">
              <PieChart width={400} height={400}>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </Card>
        </Col>

        {/* Smoke & Fire Detection - Area Chart */}
        <Col md={6}>
          <Card className="shadow-sm p-3 text-light d-flex align-items-center" style={{ backgroundColor: "#2f3136" }}>
            <Card.Title className="text-center w-100 mb-4"><FaChartArea /> Smoke & Fire Detection</Card.Title>
            <div className="d-flex justify-content-center">
              <AreaChart width={400} height={400} data={dataArea}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6666" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF6666" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#FF6666" fillOpacity={1} fill="url(#colorCount)" />
              </AreaChart>
            </div>
          </Card>
        </Col>

        {/* Speed Violation Detection - Bar Chart */}
        <Col md={6}>
          <Card className="shadow-sm p-3 text-light d-flex align-items-center" style={{ backgroundColor: "#2f3136" }}>
            <Card.Title className="text-center w-100 mb-4"><FaChartBar /> Speed Violation Detection</Card.Title>
            <div className="d-flex justify-content-center">
              <BarChart width={400} height={400} data={dataBarSpeed}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#4e33ff" />
              </BarChart>
            </div>
          </Card>
        </Col>

        {/* Object Detection - Scatter Chart */}
        <Col md={6}>
          <Card className="shadow-sm p-3 text-light d-flex align-items-center" style={{ backgroundColor: "#2f3136" }}>
            <Card.Title className="text-center w-100 mb-4"><FaChartColumn /> Object Detection</Card.Title>
            <div className="d-flex justify-content-center">
              <ScatterChart width={400} height={400}>
                <CartesianGrid stroke="#444" />
                <XAxis type="number" dataKey="x" name="X-Axis" stroke="#ccc" />
                <YAxis type="number" dataKey="y" name="Y-Axis" stroke="#ccc" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Objects" data={dataScatter} fill="#8884d8" />
              </ScatterChart>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
