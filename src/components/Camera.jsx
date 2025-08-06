import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Modal,
  Table,
  InputGroup,
} from "react-bootstrap";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { FaEye, FaEyeSlash, FaPen, FaTrash, FaLock } from "react-icons/fa";
import "../css/users.css";
import { FaUser, FaNetworkWired, FaUserShield, FaKey, FaTools, FaBuilding, FaMapMarkerAlt, FaEllipsisH } from "react-icons/fa";

const Camera = () => {
  const [cameras, setCameras] = useState([
    {
      id: 1,
      name: "Camera A",
      ip_address: "192.168.1.101",
      user_name: "admin",
      password: "cam1234",
      brand_name: "Hikvision",
      department: "IT",
    zone: "Zone A"
    },
    {
      id: 2,
      name: "Camera B",
      ip_address: "192.168.1.102",
      user_name: "root",
      password: "secure456",
      brand_name: "Dahua",
      department: "Security",
     zone: "Zone A"
    },
       {
      id: 2,
      name: "Camera B",
      ip_address: "192.168.1.102",
      user_name: "root",
      password: "secure456",
      brand_name: "Dahua",
      department: "Security",
     zone: "Zone A"
    },
       {
      id: 2,
      name: "Camera B",
      ip_address: "192.168.1.102",
      user_name: "root",
      password: "secure456",
      brand_name: "Dahua",
      department: "Security",
     zone: "Zone A"
    },
       {
      id: 2,
      name: "Camera B",
      ip_address: "192.168.1.102",
      user_name: "root",
      password: "secure456",
      brand_name: "Dahua",
      department: "Security",
     zone: "Zone A"
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const toggleRowPasswordVisibility = (cameraId) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [cameraId]: !prev[cameraId],
    }));
  };
const getRandomColor = () => {
  const colors = [
    "#e74c3c", // red
    "#3498db", // blue
    "#2ecc71", // green
    "#f39c12", // orange
    "#9b59b6", // purple
    "#1abc9c", // teal
    "#e67e22", // pumpkin
    "#34495e", // dark blue
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

  const handleEdit = (camera) => {
    setSelectedCamera(camera);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updated = cameras.filter((cam) => cam.id !== id);
    setCameras(updated);
  };

  const handleSave = () => {
    if (cameras.some((cam) => cam.id === selectedCamera.id)) {
      setCameras(
        cameras.map((cam) =>
          cam.id === selectedCamera.id ? selectedCamera : cam
        )
      );
    } else {
      setCameras([...cameras, selectedCamera]);
    }
    setShowModal(false);
    setShowPassword(false);
  };

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
              setShowPassword(false);
            }}
          >
          <h4> <AiOutlineVideoCameraAdd /></h4>
          </Button>
        </div>

        <Table className="user-table" responsive>
          <thead>
            <tr>
              <th className="text-center"><FaUser style={{ marginRight: '8px', fontSize: "1.2rem" }} />Name</th>
    <th className="text-center"><FaNetworkWired style={{ marginRight: '8px' , fontSize: "1.2rem" }} />IP Address</th>
    <th className="text-center"><FaUserShield style={{ marginRight: '8px', fontSize: "1.2rem"  }} />Username</th>
    <th className="text-center"><FaKey style={{ marginRight: '8px' , fontSize: "1.2rem" }} />Password</th>
    <th className="text-center"><FaTools style={{ marginRight: '8px', fontSize: "1.2rem"  }} />Brand</th>
    <th className="text-center"><FaBuilding style={{ marginRight: '8px', fontSize: "1.2rem"  }} />Department</th>
    <th className="text-center"><FaMapMarkerAlt style={{ marginRight: '8px', fontSize: "1.2rem"  }} />Zone</th>
    <th className="text-center"><FaEllipsisH style={{ marginRight: '8px' , fontSize: "1.2rem" }} />Actions</th>
            </tr>
          </thead>
          <tbody>
            {cameras.map((cam) => (
              <tr key={cam.id}>
           <td className="text-center">
  <div className="d-flex align-items-center gap-2">
    <div
      className="initial-circle"
      style={{ backgroundColor: getRandomColor() }}
    >
      {cam.name[0].toUpperCase()}
    </div>
    <span className="fw-bold">{cam.name}</span>
  </div>
</td>

                <td className="text-center">{cam.ip_address}</td>
                <td className="text-center">{cam.user_name}</td>
                <td onClick={() => toggleRowPasswordVisibility(cam.id)} className="text-center">
                  {visiblePasswords[cam.id] ? (
                    <>
                      <FaEye className="me-1 lock-icon " />
                      {cam.password}
                    </>
                  ) : (
                    <>
                      <FaLock className="me-1 lock-icon" />
                      {"•".repeat(cam.password.length)}
                    </>
                  )}
                </td>
                <td className="text-center">{cam.brand_name}</td>
                <td className="text-center">{cam.department}</td>
                <td className="text-center">
 {cam.zone}
</td>

                <td className="text-center">
                  <Button
                    size="sm"
                    className="action-btn me-2 bg-color"
                    onClick={() => handleEdit(cam)}
                  >
                    <span className="text-light pb-1">
                      <FaPen />
                    </span>
                  </Button>
                  <Button
                    size="sm"
                    className="action-btn bg-color"
                    onClick={() => handleDelete(cam.id)}
                  >
                    <span className="text-light pb-1">
                      <FaTrash />
                    </span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {cameras.some((c) => c.id === selectedCamera?.id)
              ? "Edit Camera"
              : "Add Camera"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCamera && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCamera.name}
                  onChange={(e) =>
                    setSelectedCamera({ ...selectedCamera, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>IP Address</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCamera.ip_address}
                  onChange={(e) =>
                    setSelectedCamera({ ...selectedCamera, ip_address: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCamera.user_name}
                  onChange={(e) =>
                    setSelectedCamera({ ...selectedCamera, user_name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={selectedCamera.password}
                    onChange={(e) =>
                      setSelectedCamera({ ...selectedCamera, password: e.target.value })
                    }
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCamera.brand_name}
                  onChange={(e) =>
                    setSelectedCamera({ ...selectedCamera, brand_name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCamera.department}
                  onChange={(e) =>
                    setSelectedCamera({ ...selectedCamera, department: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Zone</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedCamera.zone}
                  onChange={(e) =>
                    setSelectedCamera({ ...selectedCamera, zone: e.target.value })
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

export default Camera;
