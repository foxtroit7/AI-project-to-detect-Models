import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { FaClock, FaRobot } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { LuCalendarSearch } from "react-icons/lu";
import { IoTimeSharp } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaPerson, FaFileCircleXmark } from "react-icons/fa6";

const acceptedData = [
  {
    id: 1,
    modelName: "PPE Kit Detection",
    image: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
    caption: "Person without PPE kit",
    cameraName: "Camera 3",
    zone: "Zone A",
    identification: "Violation",
    time: "03:00 PM",
    capturedAt: "2025-08-05 14:32:00",
    acceptedBy: "Admin",
    acceptedTime: "2025-08-07 16:45:23",
    rejected: "PPE Kit Detected"
  },
  {
    id: 2,
    modelName: "Helmet Detection",
    image: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
    caption: "No helmet detected",
    cameraName: "Camera 1",
    zone: "Zone B",
    identification: "Warning",
    time: "01:20 PM",
    capturedAt: "2025-08-04 11:12:00",
    acceptedBy: "Admin",
    acceptedTime: "2025-08-07 15:30:50",
    rejected: "PPE Kit Detected"
  },
    {
    id: 3,
    modelName: "Helmet Detection",
    image: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
    caption: "No helmet detected",
    cameraName: "Camera 1",
    zone: "Zone B",
    identification: "Warning",
    time: "01:20 PM",
    capturedAt: "2025-08-04 11:12:00",
    acceptedBy: "Admin",
    acceptedTime: "2025-08-07 15:30:50",
    rejected: "PPE Kit Detected"
  },
    {
    id: 4,
    modelName: "Helmet Detection",
    image: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
    caption: "No helmet detected",
    cameraName: "Camera 1",
    zone: "Zone B",
    identification: "Warning",
    time: "01:20 PM",
    capturedAt: "2025-08-04 11:12:00",
    acceptedBy: "Admin",
    acceptedTime: "2025-08-07 15:30:50",
    rejected: "PPE Kit Detected"
  },
];

const SingleReject = () => {
  const { id } = useParams();
  const item = acceptedData.find((d) => d.id === parseInt(id));

  const [status, setStatus] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    if (value === "Confirm") {
      setShowConfirmModal(true);
    } else if (value === "Report") {
      setShowReportModal(true);
    }
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    alert("Status confirmed successfully!");
  };

  const handleReport = () => {
    setShowReportModal(false);
    alert(`Reported with reason: ${reportReason}`);
    setReportReason("");
  };

  if (!item) return <div className="text-center text-danger">No rejected data found.</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center" style={{ fontWeight: "bold", color: "red" }}>
        Rejected Detections
      </h2>

      <div
        className="position-relative p-4"
        style={{
          background: "linear-gradient(145deg, #1c1c1e, #2a2a2c)",
          color: "#fff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)"
        }}
      >
        <span className="position-absolute top-0 end-0 badge bg-danger fs-6 p-2 m-2 shadow" style={{ borderRadius: "10px" }}>
          <FaFileCircleXmark className="me-1" />
          Rejected
        </span>

        <div className="text-center mb-4">
          <img
            src={item.image}
            alt={item.caption}
            style={{
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)"
            }}
          />
        </div>

        <h3 className="mb-3" style={{ fontWeight: "bold" }}>
          <span className="text-primary">Model:</span> {item.modelName}
        </h3>

        <p><FaRobot className="me-2 h2 text-warning" />
          <strong>Caption:</strong>
          <span className="badge bg-info text-dark p-2 fs-6 rounded-pill ms-2">{item.caption}</span>
        </p>

        <p><FaClock className="me-2 h2 text-primary" />
          <strong>Captured At:</strong>
          <span className="text-secondary ms-2">{item.capturedAt}</span>
        </p>

        <p><FaFileCircleXmark className="me-2 h2 text-danger" />
          <strong>Rejected Reason:</strong>
          <span className="text-secondary ms-2">{item.rejected}</span>
        </p>

        <hr className="text-light" />

        <div className="row">
          <div className="col-md-6 mb-3">
            <GiCctvCamera className="h2 text-primary" />
            <strong> Camera:</strong> <span className="text-light">{item.cameraName}</span>
          </div>
          <div className="col-md-6 mb-3">
            <PiMapPinAreaFill className="h2 text-danger" />
            <strong> Zone:</strong> <span className="text-light">{item.zone}</span>
          </div>
          <div className="col-md-6 mb-3">
            <LuCalendarSearch className="h2 text-info" />
            <strong> Identification:</strong> <span className="text-light">{item.identification}</span>
          </div>
          <div className="col-md-6 mb-3">
            <IoTimeSharp className="h2 text-success" />
            <strong> Time:</strong> <span className="text-light">{item.time}</span>
          </div>
        </div>

        <hr className="text-light" />

        <div className="row">
          <div className="col-md-6 mb-2">
            <FaPerson className="h2" /> <strong>Rejected By:</strong>{" "}
            <span className="text-light">{item.acceptedBy}</span>
          </div>
          <div className="col-md-6 mb-2">
            <FaClock className="h2" /> <strong>Rejected Time:</strong>{" "}
            <span className="text-light">{item.acceptedTime}</span>
          </div>
        </div>

        {/* DROPDOWN FOR STATUS CHANGE */}
        <div className="mt-4">
          <h5 className="mb-4 text-light fw-bold">Update Status By Admin</h5>
          <Form.Select
            value={status}
            onChange={handleStatusChange}
            style={{
              width: "100%",
              backgroundColor: "#2a2a2c",
              color: "white",
              border: "1px solid #444",
            }}
          >
             <option value="" style={{ backgroundColor: "#2a2a2c", color: "white" }}>
                  Change Status...
                </option>
                <option value="Confirm" style={{ backgroundColor: "#2a2a2c", color: "white" }}>
                  Confirm
                </option>
                <option value="Report" style={{ backgroundColor: "#2a2a2c", color: "white" }}>
                  Report
                </option>
          </Form.Select>
        </div>
      </div>

      {/* Confirm Modal */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to confirm this detection status?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Report Modal */}
      <Modal show={showReportModal} onHide={() => setShowReportModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Report Detection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Reason for Report</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              style={{
                backgroundColor: "#2a2a2c",
                color: "white",
                border: "1px solid #444",
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReportModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleReport}>
            Submit Report
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleReject;
