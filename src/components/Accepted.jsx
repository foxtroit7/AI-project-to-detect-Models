import { useState } from "react";
import {
  Container,
  Table, Row, Col, InputGroup, Form
} from "react-bootstrap";
import { FaClock, FaCamera, FaUserShield, FaMapMarkerAlt, FaRegCalendarAlt, FaBook, FaCheck , FaEye} from "react-icons/fa";
import "../css/users.css";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Accepted = () => {
  const [acceptedData] = useState([
    {
      id: 1,
      modelName: "PPE Kit Detection",
      image: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
      caption: "Person without PPE kit",
      cameraName: "Camera 3",
      zone: "Zone A",
      capturedAt: "2025-08-05 14:32:00",
      acceptedBy: "Admin",
      status: "accepted"
    },
    {
      id: 2,
      modelName: "Vehicle Detection",
      image: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
      caption: "No helmet detected",
      cameraName: "Camera 2",
      zone: "Zone B",
      capturedAt: "2025-08-06 11:45:00",
      acceptedBy: "Security",
      status: "accepted"
    },
    {
      id: 3,
      modelName: "PPE Kit Detection",
      image: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
      caption: "Person without PPE kit",
      cameraName: "Camera 3",
      zone: "Zone A",
      capturedAt: "2025-08-05 14:32:00",
      acceptedBy: "Admin",
      status: "accepted"
    },
    {
      id: 4,
      modelName: "Vehicle Detection",
      image: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
      caption: "No helmet detected",
      cameraName: "Camera 2",
      zone: "Zone B",
      capturedAt: "2025-08-06 11:45:00",
      acceptedBy: "Security",
      status: "accepted"
    }
  ]);

  // Filter state
  const [filters, setFilters] = useState({
    modelName: "",
    cameraName: "",
    zone: "",
    caption: ""
  });

  const navigate = useNavigate();

  // Filtered data
  const filteredData = acceptedData.filter(item =>
    (filters.modelName ? item.modelName === filters.modelName : true) &&
    (filters.cameraName ? item.cameraName === filters.cameraName : true) &&
    (filters.zone ? item.zone === filters.zone : true) &&
    (filters.caption ? item.caption === filters.caption : true)
  );

  return (
    <div className="user-page-bg">
      <Container>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <h2 className="fw-bold text-center">
            <span style={{ fontWeight: "bold", color: "#21dc31ff" }}> Accepted Detections</span>
          </h2>
        </div>

      {/* ===== Dropdown Filters ===== */}
<Row className="mb-4 g-3">
  <Col md={3}>
    <InputGroup>
     <InputGroup.Text className="me-2" style={{ backgroundColor: "#36393f", color: "white" }}>
        <FaBook />
      </InputGroup.Text>
      <Form.Select
        style={{ backgroundColor: "#36393f", color: "white" }}
        value={filters.modelName}
        onChange={(e) => setFilters({ ...filters, modelName: e.target.value })}
      >
        <option value="">All Models</option>
        {[...new Set(acceptedData.map(item => item.modelName))].map((model, idx) => (
          <option key={idx} value={model}>{model}</option>
        ))}
      </Form.Select>
    </InputGroup>
  </Col>

  <Col md={3}>
    <InputGroup>
     <InputGroup.Text className="me-2"  style={{ backgroundColor: "#36393f", color: "white" }}>
        <FaCamera />
      </InputGroup.Text>
      <Form.Select
        style={{ backgroundColor: "#36393f", color: "white" }}
        value={filters.cameraName}
        onChange={(e) => setFilters({ ...filters, cameraName: e.target.value })}
      >
        <option value="">All Cameras</option>
        {[...new Set(acceptedData.map(item => item.cameraName))].map((cam, idx) => (
          <option key={idx} value={cam}>{cam}</option>
        ))}
      </Form.Select>
    </InputGroup>
  </Col>

  <Col md={3}>
    <InputGroup>
     <InputGroup.Text className="me-2"  style={{ backgroundColor: "#36393f", color: "white" }}>
        <FaMapMarkerAlt />
      </InputGroup.Text>
      <Form.Select
        style={{ backgroundColor: "#36393f", color: "white" }}
        value={filters.zone}
        onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
      >
        <option value="">All Zones</option>
        {[...new Set(acceptedData.map(item => item.zone))].map((z, idx) => (
          <option key={idx} value={z}>{z}</option>
        ))}
      </Form.Select>
    </InputGroup>
  </Col>

  <Col md={3}>
    <InputGroup>
     <InputGroup.Text className="me-2"  style={{ backgroundColor: "#36393f", color: "white" }}>
        <FaRegCalendarAlt />
      </InputGroup.Text>
      <Form.Select
        style={{ backgroundColor: "#36393f", color: "white" }}
        value={filters.caption}
        onChange={(e) => setFilters({ ...filters, caption: e.target.value })}
      >
        <option value="">All Captions</option>
        {[...new Set(acceptedData.map(item => item.caption))].map((cap, idx) => (
          <option key={idx} value={cap}>{cap}</option>
        ))}
      </Form.Select>
    </InputGroup>
  </Col>
</Row>


        {/* ===== Custom Time Filter ===== */}
        <div className="mb-4">
          <Row className="g-3">
            <Col md={6}>
              <InputGroup>
               <InputGroup.Text className="me-2" style={{ backgroundColor: "#36393f", color: "white" }}>
                  From
                </InputGroup.Text>
                <Form.Control
                  type="datetime-local"
                  style={{ backgroundColor: "#36393f", color: "white" }}
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup>
               <InputGroup.Text className="me-2" style={{ backgroundColor: "#36393f", color: "white" }}>
                  To
                </InputGroup.Text>
                <Form.Control
                  type="datetime-local"
                  style={{ backgroundColor: "#36393f", color: "white" }}
                />
              </InputGroup>
            </Col>
          </Row>
        </div>

        {/* ===== Table ===== */}
        <Table className="user-table" responsive>
          <thead>
            <tr>
              <th className="text-center"><FaBook className="me-2" />Model</th>
              <th className="text-center"><FaBook className="me-2" />Image</th>
              <th className="text-center"><FaCamera className="me-2" />Camera</th>
              <th className="text-center"><FaMapMarkerAlt className="me-2" />Zone</th>
              <th className="text-center"><FaClock className="me-2" />Captured At</th>
              <th className="text-center"><FaUserShield className="me-2" />Accepted By</th>
              <th className="text-center"><FaRegCalendarAlt className="me-2" />Caption</th>
              <th className="text-center"><FaCheck className="me-2" />Status</th>
              <th className="text-center"><BsEye className="me-2" />View</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="text-center fw-bold">{item.modelName}</td>
                <td className="text-center">
                  <img
                    src={item.image}
                    alt="Entry"
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      border: "2px solid #ccc",
                    }}
                  />
                </td>
                <td className="text-center">{item.cameraName}</td>
                <td className="text-center">{item.zone}</td>
                <td className="text-center">{item.capturedAt}</td>
                <td className="text-center">{item.acceptedBy}</td>
                <td className="text-center">
                  <div className="camera-scroll d-flex overflow-auto">
                    <span className="badge bg-primary me-2">{item.caption}</span>
                  </div>
                </td>
                <td className="text-center" style={{ fontWeight: "bold", color: "#21dc31ff" }}>{item.status}</td>
                <td>
                  <button
                    className="btn d-flex align-items-center justify-content-center ms-3"
                    style={{ fontWeight: "bold", backgroundColor: "#21dc31ff" }}
                    onClick={() => navigate(`/single-accept/${item.id}`)}
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Accepted;
