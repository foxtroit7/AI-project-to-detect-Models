import { useEffect, useState } from "react";
import "../css/details.css";
import { FaClock, FaRobot, FaEye, FaSearch } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup, Row, Col } from "react-bootstrap";

const RoiDetails = () => {
  const [data, setData] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [filters, setFilters] = useState({
    modelName: "",
    caption: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = [
        {
          modelName: "PPE Kit Detection",
          capturedAt: "2025-07-30T10:15:00Z",
          images: [
            {
              src: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
              caption: "Helmet Detected",
            },
            {
              src: "https://www.scanflow.ai/wp-content/uploads/2024/07/PPE-1-1-1-scaled.webp",
              caption: "Helmet Detected Again",
            },
            {
              src: "https://www.scanflow.ai/wp-content/uploads/2024/03/1__f9ShKOcCFJO390YyAH4eg-1.webp",
              caption: "Helmet Detected Again",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hN63SEd5Jjz1nIWE4I7GvAOrH9Jg_sPeR27Dd6dymLpRzPuaX4-bxTUnCvOCve3QRTg&usqp=CAU",
              caption: "Speed Violation Detected",
            },
          ],
        },
        {
          modelName: "Speed Violation Detection",
          capturedAt: "2025-07-30T11:00:00Z",
          images: [
            {
              src: "https://etimg.etb2bimg.com/photo/106681073.cms",
              caption: "Speed Violation Detected",
            },
            {
              src: "https://kotaielectronics.com/wp-content/uploads/2024/07/61Kph-2.png",
              caption: "Speed Violation Detected",
            },
            {
              src: "https://kotaielectronics.com/wp-content/uploads/2024/07/61Kph-1024x683.png",
              caption: "Speed Violation Detected",
            },
            {
              src: "https://i.ytimg.com/vi/PxHkKLUk_QM/maxresdefault.jpg",
              caption: "Speed Violation Detected",
            },
          ],
        },
        {
          modelName: "Pedestrian Detection in Non-parking Zones",
          capturedAt: "2025-07-30T11:00:00Z",
          images: [
            {
              src: "https://yeditek.com/uploads/files/172242049184.07-person-detection-0202.png",
              caption: "Pedestrian Detected",
            },
            {
              src: "https://visailabs.com/wp-content/uploads/People-detection-with-bounding-box.jpg",
              caption: "Pedestrian Detected",
            },
            {
              src: "https://yeditek.com/uploads/files/172242049184.07-person-detection-0202.png",
              caption: "Pedestrian Detected",
            },
            {
              src: "https://visailabs.com/wp-content/uploads/People-detection-with-bounding-box.jpg",
              caption: "Pedestrian Detected",
            },
          ],
        },
      ];
      setData(response);
    };

    fetchData();
  }, []);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString();
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = data
    .filter((item) =>
      filters.modelName
        ? item.modelName.toLowerCase() === filters.modelName.toLowerCase()
        : true
    )
    .map((item) => ({
      ...item,
      images: item.images.filter((img) =>
        filters.caption
          ? img.caption.toLowerCase().includes(filters.caption.toLowerCase())
          : true
      ),
    }));

  return (
    <div className="container py-4">
      <h3 className="text-light mb-3">Reason Of Interest Details</h3>

      {/* ===== Filters ===== */}
      <div className="mb-4">
       <Row>
         <Col md={6}>
        <InputGroup style={{ minWidth: 240 }}>
          <InputGroup.Text className="me-2"><FaRobot /></InputGroup.Text>
          <Form.Select
            name="modelName"
            value={filters.modelName}
            onChange={handleFilterChange}
            style={{ backgroundColor: "#36393f", color: "white" }}
          >
            <option value="" style={{ backgroundColor: "#36393f", color: "white" }}>All Models</option>
            <option value="PPE Kit Detection" style={{ backgroundColor: "#36393f", color: "white" }}>PPE Kit Detection</option>
            <option value="Vehicle Detection" style={{ backgroundColor: "#36393f", color: "white" }}>Vehicle Detection</option>
            <option value="Pedestrian Detection" style={{ backgroundColor: "#36393f", color: "white" }}>Pedestrian Detection</option>
            <option value="Smoke and Fire Detection" style={{ backgroundColor: "#36393f", color: "white" }}>Smoke and Fire Detection</option>
            <option value="Speed Violation Detection" style={{ backgroundColor: "#36393f", color: "white" }}>Speed Violation Detection</option>
          </Form.Select>
        </InputGroup>
</Col>
        <Col md={6}>
        <InputGroup style={{ minWidth: 240 }}>
          <InputGroup.Text className="me-2"><FaSearch /></InputGroup.Text>
          <Form.Control
            placeholder="Search Detection Name"
            name="caption"
            value={filters.caption}
            onChange={handleFilterChange}
          />
        </InputGroup></Col>
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

      {filteredData.map((item, index) => (
        <div className="mb-5" key={index}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {item.images.map((img, i) => (
              <div className="col" key={i}>
                <div className="rounded card-div bg-dark text-light p-2 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="image-wrapper position-relative mb-2">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="img-fluid rounded mb-2"
                      />
                      <div
                        className="zoom-btn h5 position-absolute top-0 end-0 m-1"
                        onClick={() => setModalImage(img.src)}
                      >
                        <MdOutlineZoomOutMap />
                      </div>
                    </div>
                    <p className="mb-1">{img.caption}</p>

                    {item.modelName === "PPE Kit Detection" && (
                      <div>
                        <span
                          className={`badge bg-${
                            img.caption.toLowerCase().includes("helmet")
                              ? "success"
                              : "danger"
                          } me-1`}
                        >
                          {img.caption.toLowerCase().includes("helmet")
                            ? "Helmet Detected"
                            : "Helmet Missing"}
                        </span>
                        <span className="badge bg-warning text-dark me-1">
                          Jacket Missing
                        </span>
                        <span className="badge bg-warning text-dark">
                          Shoes Missing
                        </span>
                      </div>
                    )}

                    {item.modelName === "Speed Violation Detection" && (
                      <div>
                        <span className="badge bg-danger">
                          Speed: 61 km/hr
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small>
                        <FaRobot className="me-1" />
                        {item.modelName}
                      </small>
                      <br />
                      <small>
                        <FaClock className="me-1" />
                        {formatDate(item.capturedAt)}
                      </small>
                    </div>

                    <button
                      className="btn btn-primary d-flex align-items-center"
                      onClick={() =>
                        navigate("/details", {
                          state: {
                            modelName: item.modelName,
                            capturedAt: item.capturedAt,
                            caption: img.caption,
                            image: img.src,
                            cameraName: "Camera 1",
                            zone: "Zone A",
                            identification: "ID_2025_001",
                            time: formatDate(item.capturedAt),
                          },
                        })
                      }
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <div
            className="modal-content bg-transparent border-0 position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-primary position-absolute top-0 end-0 m-2 z-3"
              onClick={() => setModalImage(null)}
            >
              <IoClose />
            </button>
            <img src={modalImage} alt="Zoomed" className="img-fluid w-100 rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RoiDetails;
