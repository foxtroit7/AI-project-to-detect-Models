import { useState } from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Form,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import {
  FaCamera,
  FaClock,
  FaSignInAlt,
  FaSignOutAlt,
  FaTools,
  FaCar,
  FaSearch,
} from "react-icons/fa";
import "../css/users.css";

const sampleDetections = [
  {
    id: 1,
    entryImage:
      "https://viso.ai/wp-content/uploads/2022/08/mobile-anpr-system.jpg",
    numberPlate: "MH12AB1234",
    entry: { time: "2025-07-24T10:45" },
    exit: null,
    status: "rejected",
  },
  {
    id: 2,
    entryImage:
      "https://viso.ai/wp-content/uploads/2022/08/anpr-number-plate-recognition.jpg",
    numberPlate: "KA03CD5678",
    exitImage:
      "https://viso.ai/wp-content/uploads/2022/08/mobile-anpr-system.jpg",
    entry: { time: "2025-07-24T10:45" },
    exit: { time: "2025-07-28T11:10" },
    status: "rejected",
  },
  {
    id: 3,
    entryImage:
      "https://viso.ai/wp-content/uploads/2023/04/application_automatic-number-plate-recognition-anpr-alpr.jpg",
    numberPlate: "GJ05EF9012",
    entry: { time: "2025-07-20T11:30" },
    exit: null,
    status: "rejected",
  },
    {
    id: 4,
    entryImage:
      "https://viso.ai/wp-content/uploads/2022/08/mobile-anpr-system.jpg",
    numberPlate: "MH12AB1234",
    entry: { time: "2025-07-24T10:45" },
    exit: null,
    status: "rejected",
  },
];

const NprNonViolations = () => {
  const [detections, setDetections] = useState(sampleDetections);
  const [selectedDetection, setSelectedDetection] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [searchPlate, setSearchPlate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    if (detections.some((d) => d.id === selectedDetection.id)) {
      setDetections(
        detections.map((d) =>
          d.id === selectedDetection.id ? selectedDetection : d
        )
      );
    } else {
      setDetections([...detections, selectedDetection]);
    }
    setShowModal(false);
  };

  const filteredDetections = detections.filter((det) => {
    const matchesPlate = det.numberPlate
      .toLowerCase()
      .includes(searchPlate.toLowerCase());

    const entryDate = det.entry?.time ? new Date(det.entry.time) : null;
    const afterStart = startDate
      ? entryDate && entryDate >= new Date(startDate)
      : true;
    const beforeEnd = endDate
      ? entryDate && entryDate <= new Date(endDate)
      : true;

    return matchesPlate && afterStart && beforeEnd;
  });

  return (
    <div className="user-page-bg">
      <Container>
        <div className="mb-4">
          <h2
            className="fw-bold text-center"
            style={{ fontWeight: "bold", color: "red" }}
          >
            <FaCar /> NPR Violations
          </h2>
        </div>

        {/* Search + Date Filters */}
        <Row className="mb-4">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text className= "me-2" style={{ backgroundColor: "#36393f", color: "white" }}>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search Number Plate..."
                value={searchPlate}
                onChange={(e) => setSearchPlate(e.target.value)}
                style={{ backgroundColor: "#36393f", color: "white" }}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Control
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ backgroundColor: "#36393f", color: "white" }}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ backgroundColor: "#36393f", color: "white" }}
            />
          </Col>
        </Row>

        {/* Table */}
        <Table className="user-table" responsive>
          <thead>
            <tr>
              <th className="text-center">
                <FaCamera style={{ marginRight: "10px" }} />Entry Image
              </th>
              <th className="text-center">
                <FaCamera style={{ marginRight: "10px" }} />Exit Image
              </th>
              <th className="text-center">
                <FaCar style={{ marginRight: "10px" }} />Number Plate
              </th>
              <th className="text-center">
                <FaSignInAlt style={{ marginRight: "10px" }} />Entry Time
              </th>
              <th className="text-center">
                <FaSignOutAlt style={{ marginRight: "10px" }} />Exit Time
              </th>
              <th className="text-center">
                <FaTools style={{ marginRight: "10px" }} />Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDetections.map((det) => (
              <tr key={det.id}>
                <td className="text-center">
                  <img
                    src={det.entryImage}
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
                <td className="text-center">
                  {det.exitImage ? (
                    <img
                      src={det.exitImage}
                      alt="Exit"
                      style={{
                        width: "80px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        border: "2px solid #ccc",
                      }}
                    />
                  ) : (
                    <span className="text-muted fst-italic">Not Available</span>
                  )}
                </td>
                <td className="text-center fw-bold">{det.numberPlate}</td>
                <td className="text-center">
                  {det.entry?.time
                    ? new Date(det.entry.time).toLocaleString()
                    : ""}
                </td>
                <td className="text-center">
                  {det.exit?.time
                    ? new Date(det.exit.time).toLocaleString()
                    : <span className="text-muted fst-italic">Not Exited</span>}
                </td>
                <td
                  className="text-center"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  {det.status}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Edit Modal */}
      <Modal
        show={showModal}
        style={{ color: "#36393f" }}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Detection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDetection && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Number Plate</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedDetection.numberPlate}
                  onChange={(e) =>
                    setSelectedDetection({
                      ...selectedDetection,
                      numberPlate: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Entry Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={selectedDetection.entry?.time || ""}
                  onChange={(e) =>
                    setSelectedDetection({
                      ...selectedDetection,
                      entry: { time: e.target.value },
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Exit Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={selectedDetection.exit?.time || ""}
                  onChange={(e) =>
                    setSelectedDetection({
                      ...selectedDetection,
                      exit: { time: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NprNonViolations;
