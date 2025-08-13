import React, { useState } from "react";
import { Card, Row, Col, Image, Badge, Form, InputGroup } from "react-bootstrap";
import { FaVideo, FaClock, FaObjectGroup , FaUser, FaCamera} from "react-icons/fa";
import "../css/objects.css";
import { FaTimeline } from "react-icons/fa6";

const ObjectDetection = () => {
  // Sample data
  const detections = [
    {
      id: 3,
      objectName: "Container",
      cameraName: "Camera 1",
      timeInterval: "Aug 11th 2025, 2:30 PM - 2:45 PM",
      detection_time: "Aug 11th 2025, 2:59 PM",
      images: [
        "https://www.mdpi.com/asi/asi-02-00011/article_deploy/html/images/asi-02-00011-g008-550.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/6/CG/HS/LS/31252818/empty-container-inspection.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2023/2/EX/TH/XF/11559567/40ft-used-shipping-container.jpg",
      ],
    },
    {
      id: 4,
      objectName: "Vehicle",
      cameraName: "Camera 2",
      timeInterval: "Aug 10th 2025, 2:30 PM - 2:45 PM",
      detection_time: "Aug 11th 2025, 3:00 PM",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqvjatvxxKx9fMrbTiuwKx4r9JUc_GZhy9Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JgWLOuqGTMI0DvDUEpKF4mxE6Yg8wGIkamkD04FTiW8kAeQGrhJ0kJvfsWOYU63Ka20&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYSiVQ7Bwq_KcLq0rx2HjyuLxIlEeFoM0APgTmXq7-fzXM9eTgUu7Z9rgjIncnw0UiU8&usqp=CAU",
      ],
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCamera, setSelectedCamera] = useState("");

  const cameraOptions = [...new Set(detections.map(d => d.cameraName))];

  const filteredDetections = detections.filter(d =>
    d.objectName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCamera === "" || d.cameraName === selectedCamera)
  );

  return (
    <div className="p-3">
      {/* Filters */}
  

      <div className="d-flex justify-content-center align-items-center mb-4">
        <h2 className="fw-bold text-center">
          <span style={{ fontWeight: "bold" }}>
            <FaObjectGroup className=" me-2 font-bold" />Object Detections
          </span>
        </h2>
      </div>
<div className=" mb-4">
  <Row>
   <Col md={6}>
    <InputGroup className="me-2" style={{ minWidth: 240 }}>
         <InputGroup.Text className="me-2"><FaUser  /></InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search by object name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
         
        /> </InputGroup></Col>
        <Col md={6}>  <InputGroup className="me-2" style={{ minWidth: 240 }}>
      <InputGroup.Text className="me-2"><FaCamera  /></InputGroup.Text><Form.Select
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}
        
        >
          <option value="">All Cameras</option>
          {cameraOptions.map((cam, idx) => (
            <option key={idx} value={cam}>
              {cam}
            </option>
          ))}
        </Form.Select> </InputGroup></Col>
        </Row>
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
      {filteredDetections.map((detection) => (
        <Card className="mb-4 shadow-sm card-bg w-100" key={detection.id}>
          <Card.Body>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
              <h5 className="mb-3">
                <FaObjectGroup className="me-1 mb-2 me-2 font-bold text-primary" />
                <span className="font-bold text-primary"> Object Name:</span> {detection.objectName}{" "}
                <Badge bg="primary" className="ms-2">
                  {detection.id}
                </Badge>
              </h5>

              {/* Images Row */}
              <div className="d-flex gap-2 mb-4 flex-wrap">
                {detection.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    thumbnail
                    style={{
                      width: "370px",
                      height: "380px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              <div className="">
                <h5>
                  <FaVideo className="me-1 mb-2 me-2 text-primary" />
                  <span className="font-bold text-primary"> Camera Name: </span> {detection.cameraName}
                </h5>
                <h5>
                  <FaClock className="me-1 me-2 text-primary" />
                  <span className="font-bold text-primary">Time Interval Of Object: </span> {detection.timeInterval}
                </h5>
                <h5>
                  <FaTimeline className="me-1 me-2 text-primary" />
                  <span className="font-bold text-primary">Detection Time: </span> {detection.detection_time}
                </h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ObjectDetection;
