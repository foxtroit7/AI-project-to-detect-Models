import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { FaClock, FaRobot } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { LuCalendarSearch } from "react-icons/lu";
import { IoTimeSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";

// Same dataset from Accepted.jsx (later you can fetch from API instead)
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
  },
  {
    id: 2,
    modelName: "Vehicle Detection",
    image: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
    caption: "No helmet detected",
    cameraName: "Camera 2",
    zone: "Zone B",
    identification: "Violation",
    time: "11:45 AM",
    capturedAt: "2025-08-06 11:45:00",
    acceptedBy: "Security",
    acceptedTime: "2025-08-07 17:12:45",
  },
   {
      id: 3,
      image: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
      modelName: "PPE Kit Detection",
      caption: "Person without PPE kit",
      cameraName: "Camera 3",
      zone: "Zone A",
      capturedAt: "2025-08-05 14:32:00",
      acceptedBy: "Admin",
      identification: "Violation",
      time: "11:45 AM",
      acceptedTime: "2025-08-07 17:12:45",
   },
     {
      id: 4,
      image: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
      modelName: "PPE Kit Detection",
      caption: "Person without PPE kit",
      cameraName: "Camera 4",
      zone: "Zone A",
      capturedAt: "2025-08-05 14:32:00",
      acceptedBy: "Admin",
      identification: "Violation",
      time: "11:45 AM",
      acceptedTime: "2025-08-07 17:12:45",
   }
];

const SingleAccept = () => {
  const { id } = useParams();
  const item = acceptedData.find((d) => d.id === parseInt(id));

  const [status, setStatus] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [reason, setReason] = useState("");

  const handleStatusChange = (e) => {
    const selected = e.target.value;
    setStatus(selected);

    if (selected === "Report") {
      setShowReportModal(true);
    } else if (selected === "Confirm") {
      setShowConfirmModal(true);
    }
  };

  const handleSubmitReport = () => {
    console.log("🚨 Reporting item:", item.id, "Reason:", reason);
    setShowReportModal(false);
    setReason("");
  };

  const handleConfirmStatus = () => {
    console.log("✅ Confirmed status for:", item.id);
    setShowConfirmModal(false);
  };

  if (!item) {
    return <h2 className="text-center text-danger mt-5">No data found</h2>;
  }

  return (
    <div className="container py-4 text-light">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "#21dc31ff" }}>
        Accepted Detections
      </h2>
      <div className="row">
        <div className="col-12 mb-5">
          <div
            className="position-relative p-4"
            style={{
              background: "linear-gradient(145deg, #1c1c1e, #2a2a2c)",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
            }}
          >
            <span
              className="position-absolute top-0 end-0 badge bg-success fs-6 p-2 m-2 shadow"
              style={{ borderRadius: "10px" }}
            >
              <IoShieldCheckmarkSharp className="me-1" />
              Accepted
            </span>

            {/* IMAGE */}
            <div className="text-center mb-4">
              <img
                src={item.image}
                alt={item.caption}
                style={{
                  maxWidth: "500px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
                }}
              />
            </div>

            {/* MODEL NAME */}
            <h3 className="mb-3 fw-bold">
              <span className="text-primary">Model:</span> {item.modelName}
            </h3>

            {/* DETAILS */}
            <p>
              <FaRobot className="me-2 h2 text-warning" />
              <strong> Caption:</strong>{" "}
              <span className="badge bg-info text-dark p-2 fs-6 rounded-pill">
                {item.caption}
              </span>
            </p>

            <p>
              <FaClock className="me-2 h2 text-primary" />
              <strong>Captured At:</strong>{" "}
              <span className="text-secondary">{item.capturedAt}</span>
            </p>

            <hr className="text-light" />

            <div className="row">
              <div className="col-md-6 mb-3">
                <GiCctvCamera className="h2 text-primary" />
                <strong> Camera:</strong>{" "}
                <span className="text-light">{item.cameraName}</span>
              </div>
              <div className="col-md-6 mb-3">
                <PiMapPinAreaFill className="h2 text-danger" />
                <strong> Zone:</strong>{" "}
                <span className="text-light">{item.zone}</span>
              </div>
              <div className="col-md-6 mb-3">
                <LuCalendarSearch className="h2 text-info" />
                <strong> Identification:</strong>{" "}
                <span className="text-light">{item.identification}</span>
              </div>
              <div className="col-md-6 mb-3">
                <IoTimeSharp className="h2 text-success" />
                <strong> Time:</strong>{" "}
                <span className="text-light">{item.time}</span>
              </div>
            </div>

            <hr className="text-light" />

            <div className="row">
              <div className="col-md-6 mb-2">
                <FaPerson className="h2" /> <strong>Accepted By:</strong>{" "}
                <span className="text-light">{item.acceptedBy}</span>
              </div>
              <div className="col-md-6 mb-2">
                <FaClock className="h2" /> <strong>Accepted Time:</strong>{" "}
                <span className="text-light">{item.acceptedTime}</span>
              </div>
            </div>

            {/* DROPDOWN FOR STATUS CHANGE */}
            <div className="mt-4">
              <h5 className="mb-4 text-light fw-bold">Update Status</h5>
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
        </div>
      </div>

      {/* REPORT MODAL */}
      <Modal show={showReportModal} onHide={() => setShowReportModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Report Detection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Reason for Reporting</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReportModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSubmitReport} disabled={!reason.trim()}>
            Submit Report
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CONFIRM MODAL */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to mark this detection as <strong>Confirmed</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirmStatus}>
            Yes, Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleAccept;
