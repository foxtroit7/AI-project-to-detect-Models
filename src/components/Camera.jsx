import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Modal,
  Table,
  InputGroup,
  Row,
  Col
} from "react-bootstrap";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaCamera, FaLock, FaUser, FaTools, FaBuilding, FaMapMarkerAlt, FaEllipsisH, FaNetworkWired, FaUserShield, FaKey, FaPen, FaTrash } from "react-icons/fa";
import "../css/users.css";

const Camera = () => {
  const [cameras, setCameras] = useState([
    { id: 1, name: "Camera A", ip_address: "192.168.1.101", user_name: "admin", password: "cam1234", brand_name: "Hikvision", department: "IT", zone: "Zone A" },
    { id: 2, name: "Camera B", ip_address: "192.168.1.102", user_name: "root", password: "secure456", brand_name: "Dahua", department: "Security", zone: "Zone B" },
    { id: 3, name: "Camera C", ip_address: "192.168.1.103", user_name: "operator", password: "pass789", brand_name: "CP Plus", department: "IT", zone: "Zone C" },
     { id: 4, name: "Camera D", ip_address: "192.168.1.103", user_name: "operator", password: "pass789", brand_name: "CP Plus", department: "IT", zone: "Zone C" },
  ]);

  const [filters, setFilters] = useState({
    name: "",
    brand: "",
    department: "",
    zone: ""
  });

  const brands = [...new Set(cameras.map(cam => cam.brand_name))];
  const departments = [...new Set(cameras.map(cam => cam.department))];
  const zones = [...new Set(cameras.map(cam => cam.zone))];

  const [showModal, setShowModal] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);

  const getRandomColor = () => {
    const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#34495e"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleEdit = (camera) => {
    setSelectedCamera(camera);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setCameras(cameras.filter((cam) => cam.id !== id));
  };

  const handleSave = () => {
    if (cameras.some((cam) => cam.id === selectedCamera.id)) {
      setCameras(cameras.map((cam) => (cam.id === selectedCamera.id ? selectedCamera : cam)));
    } else {
      setCameras([...cameras, selectedCamera]);
    }
    setShowModal(false);
 
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredCameras = cameras.filter(cam =>
    cam.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    (filters.brand === "" || cam.brand_name === filters.brand) &&
    (filters.department === "" || cam.department === filters.department) &&
    (filters.zone === "" || cam.zone === filters.zone)
  );

  return (
    <div className="user-page-bg">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold"><FaCamera /> Camera</h2>
          <Button
            className="add-user-btn text-white px-4 py-2"
            onClick={() => {
              setSelectedCamera({
                id: cameras.length + 1,
                name: "",
                ip_address: "",
                user_name: "",
                password: "",
                brand_name: "",
                department: "",
                zone: "",
              });
              setShowModal(true);
             
            }}
          >
            <h4><AiOutlineVideoCameraAdd /></h4>
          </Button>
        </div>

        {/* ===== Filters ===== */}
        <Row className="mb-3">
          <Col md={6} className="mb-2">
            <InputGroup>
              <InputGroup.Text className="me-2"><FaCamera /></InputGroup.Text>
              <Form.Control
                placeholder="Search Camera Name"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
              />
            </InputGroup>
          </Col>
          <Col md={6} className="mb-2">
            <InputGroup>
              <InputGroup.Text className="me-2"><FaTools /></InputGroup.Text>
              <Form.Select name="brand" value={filters.brand} onChange={handleFilterChange}  style={{ backgroundColor: "#36393f", color: "white" }}>
                <option value="" style={{ backgroundColor: "#36393f", color: "white" }}>All Brands</option>
                {brands.map((b, idx) => <option key={idx} value={b}  style={{ backgroundColor: "#36393f", color: "white" }}>{b}</option>)}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col md={6} className="mb-2">
            <InputGroup>
              <InputGroup.Text className="me-2"><FaBuilding /></InputGroup.Text>
              <Form.Select name="department" value={filters.department} onChange={handleFilterChange}>
                <option value="" style={{ backgroundColor: "#36393f", color: "white" }}>All Departments</option>
                {departments.map((d, idx) => <option key={idx} value={d}   style={{ backgroundColor: "#36393f", color: "white" }}>{d} </option>)}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col md={6} className="mb-2">
            <InputGroup>
              <InputGroup.Text className="me-2"><FaMapMarkerAlt /></InputGroup.Text>
              <Form.Select name="zone" value={filters.zone} onChange={handleFilterChange}>
                <option value="" style={{ backgroundColor: "#36393f", color: "white" }}>All Zones</option>
                {zones.map((z, idx) => <option key={idx} value={z}  style={{ backgroundColor: "#36393f", color: "white" }}>{z}</option>)}
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>

        <Table className="user-table" responsive>
          <thead>
            <tr>
              <th className="text-center"><FaUser style={{ marginRight: '8px', fontSize: "1.2rem" }} />Name</th>
              <th className="text-center"><FaNetworkWired style={{ marginRight: '8px', fontSize: "1.2rem" }} />IP Address</th>
              <th className="text-center"><FaUserShield style={{ marginRight: '8px', fontSize: "1.2rem" }} />Username</th>
              <th className="text-center"><FaKey style={{ marginRight: '8px', fontSize: "1.2rem" }} />Password</th>
              <th className="text-center"><FaTools style={{ marginRight: '8px', fontSize: "1.2rem" }} />Brand</th>
              <th className="text-center"><FaBuilding style={{ marginRight: '8px', fontSize: "1.2rem" }} />Department</th>
              <th className="text-center"><FaMapMarkerAlt style={{ marginRight: '8px', fontSize: "1.2rem" }} />Zone</th>
              <th className="text-center"><FaEllipsisH style={{ marginRight: '8px', fontSize: "1.2rem" }} />Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCameras.map((cam) => (
              <tr key={cam.id}>
                <td className="text-center">
                  <div className="d-flex align-items-center gap-2">
                    <div className="initial-circle" style={{ backgroundColor: getRandomColor() }}>
                      {cam.name[0].toUpperCase()}
                    </div>
                    <span className="fw-bold">{cam.name}</span>
                  </div>
                </td>
                <td className="text-center">{cam.ip_address}</td>
                <td className="text-center">{cam.user_name}</td>
                <td className="text-center">
                  <FaLock className="me-1 lock-icon" />{"•".repeat(cam.password.length)}
                </td>
                <td className="text-center">{cam.brand_name}</td>
                <td className="text-center">{cam.department}</td>
                <td className="text-center">{cam.zone}</td>
                <td className="text-center">
                  <Button size="sm" className="action-btn me-2 bg-color" onClick={() => handleEdit(cam)}>
                    <span className="text-light pb-1"><FaPen /></span>
                  </Button>
                  <Button size="sm" className="action-btn bg-color" onClick={() => handleDelete(cam.id)}>
                    <span className="text-light pb-1"><FaTrash /></span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* ===== Modal (unchanged) ===== */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {cameras.some((c) => c.id === selectedCamera?.id) ? "Edit Camera" : "Add Camera"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCamera && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={selectedCamera.name} onChange={(e) => setSelectedCamera({ ...selectedCamera, name: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>IP Address</Form.Label>
                <Form.Control type="text" value={selectedCamera.ip_address} onChange={(e) => setSelectedCamera({ ...selectedCamera, ip_address: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={selectedCamera.user_name} onChange={(e) => setSelectedCamera({ ...selectedCamera, user_name: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={selectedCamera.password} onChange={(e) => setSelectedCamera({ ...selectedCamera, password: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" value={selectedCamera.brand_name} onChange={(e) => setSelectedCamera({ ...selectedCamera, brand_name: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" value={selectedCamera.department} onChange={(e) => setSelectedCamera({ ...selectedCamera, department: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Zone</Form.Label>
                <Form.Control type="text" value={selectedCamera.zone} onChange={(e) => setSelectedCamera({ ...selectedCamera, zone: e.target.value })} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Camera;
