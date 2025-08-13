import { useState } from "react";
import "../css/nprDetection.css";
import { Modal, Button, Card, Row, Col, ProgressBar, Form , InputGroup,} from "react-bootstrap";
import { FaExpand, FaCar, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaHourglassEnd, FaHourglassStart } from "react-icons/fa";

const sampleDetections = [
  {
    id: 1,
    entryImage: "https://viso.ai/wp-content/uploads/2022/08/mobile-anpr-system.jpg",
    numberPlate: "MH12AB1234",
    entry: { time: "24th July 2025 10:45 AM" },
    exit: null,
    editedBy: "Admin"
  },
  {
    id: 2,
    entryImage: "https://viso.ai/wp-content/uploads/2022/08/anpr-number-plate-recognition.jpg",
    numberPlate: "KA03CD5678",
    exitImage: "https://viso.ai/wp-content/uploads/2022/08/mobile-anpr-system.jpg",
    entry: { time: "24th July 2025 10:45 AM" },
    exit: { time: "28th July 2025 11:10 AM" },
    editedBy: "Admin"
  },
  {
    id: 3,
    entryImage: "https://viso.ai/wp-content/uploads/2023/04/application_automatic-number-plate-recognition-anpr-alpr.jpg",
    numberPlate: "GJ05EF9012",
    entry: { time: "20th July 2025 11:30 AM" },
    exit: null,
    editedBy: "Admin"
  },
];

const DetectionTime = ({ type, icon, time, onBadgeClick }) => {
  const isEntry = type === "Entry";
  const timeClass = time.includes("not exited") ? "text-muted fst-italic" : "";

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {isEntry ? (
        <>
          <span
            className={`badge-custom ${type.toLowerCase()} cursor-pointer`}
            onClick={onBadgeClick}
            style={{ cursor: "pointer" }}
          >
            {isEntry ? <FaSignInAlt className="me-1" /> : <FaSignOutAlt className="me-1" />}
            {type}
          </span>
          <span className="font-bold d-flex align-items-center gap-2">
            {icon}
            <span className={timeClass}>{time}</span>
          </span>
        </>
      ) : (
        <>
          <span className="font-bold d-flex align-items-center gap-2">
            {icon}
            <span className={timeClass}>{time}</span>
          </span>
          <span
            className={`badge-custom ${type.toLowerCase()} cursor-pointer`}
            onClick={onBadgeClick}
            style={{ cursor: "pointer" }}
          >
            {isEntry ? <FaSignInAlt className="me-1" /> : <FaSignOutAlt className="me-1" />}
            {type}
          </span>
        </>
      )}
    </div>
  );
};

const NprDetection = () => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [viewMode, setViewMode] = useState({});
  const [showNotExitedModal, setShowNotExitedModal] = useState(false);
  const [detections, setDetections] = useState(sampleDetections);
  const [editedNumberPlate, setEditedNumberPlate] = useState("");
  const [searchPlate, setSearchPlate] = useState("");

  const handleModalClose = () => {
    setShowRejectModal(false);
    setSelectedId(null);
  };

  const handleZoomClick = (imageUrl) => {
    setZoomImage(imageUrl);
    setShowZoomModal(true);
  };

  const handleEditClick = (id) => {
    const selectedDetection = detections.find((d) => d.id === id);
    if (selectedDetection) {
      setEditedNumberPlate(selectedDetection.numberPlate);
    }
    setSelectedId(id);
    setShowRejectModal(true);
  };

  const handleSaveChanges = () => {
    setDetections((prev) =>
      prev.map((d) =>
        d.id === selectedId ? { ...d, numberPlate: editedNumberPlate } : d
      )
    );
    handleModalClose();
  };

  const filteredDetections = detections.filter((d) =>
    d.numberPlate.toLowerCase().includes(searchPlate.toLowerCase())
  );

  return (
    <div className="container py-2">
      <h2 className="text-center mb-4 npr-title">NPR Detections</h2>

      {/* Search Bar */}
      <div className="mb-4">
          <InputGroup className="me-2" style={{ minWidth: 240 }}>
          <InputGroup.Text className="me-2"><FaUser  /></InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search vehicle number..."
          value={searchPlate}
          onChange={(e) => setSearchPlate(e.target.value)}
          className="p-2"
        />
        </InputGroup>
      </div>
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
      <Row xs={1} sm={2} md={3} className="g-5">
        {filteredDetections.map((item) => {
          const currentMode = viewMode[item.id] || "entry";
          const currentImage = currentMode === "entry"
            ? item.entryImage
            : item.exitImage || item.entryImage;
          return (
            <Col key={item.id}>
              <Card className="detection-card shadow-sm">
                <div className="image-wrapper">
                  <Card.Img
                    variant="top"
                    src={currentImage}
                    className="vehicle-image"
                  />
                  <Button
                    variant=""
                    className="zoom-button-dark"
                    onClick={() => handleZoomClick(currentImage)}
                  >
                    <FaExpand />
                  </Button>
                </div>
                <ProgressBar
                  now={!item.exitImage ? 0 : currentMode === "entry" ? 50 : 100}
                  variant="primary"
                  className="mt-2 ms-1 me-1"
                  style={{ height: "6px", borderRadius: "5px" }}
                />

                <Card.Body className="text-light py-4">
                  <Card.Title className="plate-number mb-4">
                    <FaCar className="me-2" />
                    {item.numberPlate}
                  </Card.Title>

                  <DetectionTime
                    type="Entry"
                    icon={<FaHourglassStart />}
                    time={item.entry.time}
                    onBadgeClick={() =>
                      setViewMode((prev) => ({ ...prev, [item.id]: "entry" }))
                    }
                  />

                  <DetectionTime
                    type="Exit"
                    icon={<FaHourglassEnd />}
                    time={item.exit ? item.exit.time : "Vehicle has not exited yet..."}
                    onBadgeClick={() => {
                      if (item.exit) {
                        setViewMode((prev) => ({ ...prev, [item.id]: "exit" }));
                      } else {
                        setShowNotExitedModal(true);
                      }
                    }}
                  />

                  <div className="d-flex justify-content-between mt-4 mb-2">
                    <div>
                      <div> Edited By: {item.editedBy}</div>
                    </div>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditClick(item.id)}
                    >
                      <FaPencil className="me-2" />
                      <span className="font-bold">Edit</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Zoom Modal */}
      <Modal show={showZoomModal} onHide={() => setShowZoomModal(false)} centered size="xl">
        <Modal.Body className="p-0 text-center">
          <img
            src={zoomImage}
            alt="Zoomed"
            className="w-100"
            style={{ maxHeight: "90vh", objectFit: "contain" }}
          />
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light">
          <Button variant="secondary" onClick={() => setShowZoomModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showRejectModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>Edit Vehicle Number</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <div className="mb-3">
            <label className="form-label">Vehicle Number</label>
            <input
              type="text"
              className="form-control"
              value={editedNumberPlate}
              onChange={(e) => setEditedNumberPlate(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light">
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Not Exited Yet Modal */}
      <Modal
        show={showNotExitedModal}
        onHide={() => setShowNotExitedModal(false)}
        centered
      >
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>Exit Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light text-center">
          <p className="mb-0">🚗 Vehicle has not exited yet.</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light">
          <Button variant="secondary" onClick={() => setShowNotExitedModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NprDetection;
