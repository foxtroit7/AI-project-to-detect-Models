import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Modal,
  Table,
  InputGroup,
} from "react-bootstrap";
import { FaEye, FaEyeSlash, FaPen, FaTrash, FaLock} from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import "../css/users.css";
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaUserTie, FaVideo, FaTools } from 'react-icons/fa';
const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Smaranika Panda",
      mobile_number: "9876543210",
      email_id: "smaranika@gmail.com",
      dept: "IT",
      designation: "Developer",
     camera: ["Camera 1", "Camera 2", "Camera 3"] ,
      password: "password123",
    },
    {
      id: 1,
      name: "Smaranika Panda",
      mobile_number: "9876543210",
      email_id: "smaranika@gmail.com",
      dept: "IT",
      designation: "Developer",
       camera: ["Camera 1", "Camera 2", "Camera 3"] ,
      password: "password123",
    },
      {
      id: 1,
      name: "Smaranika Panda",
      mobile_number: "9876543210",
      email_id: "smaranika@gmail.com",
      dept: "IT",
      designation: "Developer",
       camera: ["Camera 1", "Camera 2", "Camera 3"] ,
      password: "password123",
    },
      {
      id: 1,
      name: "Smaranika Panda",
      mobile_number: "9876543210",
      email_id: "smaranika@gmail.com",
      dept: "IT",
      designation: "Developer",
       camera: ["Camera 1", "Camera 2", "Camera 3"] ,
      password: "password123",
    },
      {
      id: 1,
      name: "Smaranika Panda",
      mobile_number: "9876543210",
      email_id: "smaranika@gmail.com",
      dept: "IT",
      designation: "Developer",
       camera: ["Camera 1", "Camera 2", "Camera 3"] ,
      password: "password123",
    },
      {
      id: 1,
      name: "Smaranika Panda",
      mobile_number: "9876543210",
      email_id: "smaranika@gmail.com",
      dept: "IT",
      designation: "Developer",
       camera: ["Camera 1", "Camera 2", "Camera 3"] ,
      password: "password123",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTimeoutId, setPasswordTimeoutId] = useState(null);
const [visiblePasswords, setVisiblePasswords] = useState({});

const toggleRowPasswordVisibility = (userId) => {
  setVisiblePasswords(prev => ({
    ...prev,
    [userId]: !prev[userId]
  }));
};
  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
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

const handleSave = () => {
  if (users.some(user => user.id === selectedUser.id)) {
    // Edit
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? selectedUser : user
    );
    setUsers(updatedUsers);
  } else {
    // Add
    setUsers([...users, selectedUser]);
  }

  setShowModal(false);
  setShowPassword(false);
};


  const togglePasswordVisibility = () => {
    const newShowPassword = !showPassword;
    setShowPassword(newShowPassword);

    if (newShowPassword) {
      const timeoutId = setTimeout(() => {
        setShowPassword(false);
      }, 5000);
      setPasswordTimeoutId(timeoutId);
    } else if (passwordTimeoutId) {
      clearTimeout(passwordTimeoutId);
      setPasswordTimeoutId(null);
    }
  };

  return (
    <div className="user-page-bg" >
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold"><FaUsers />  Users</h2>
         <Button
  className="add-user-btn text-white"
  onClick={() => {
    setSelectedUser({
      id: users.length + 1,
      name: "",
      mobile_number: "",
      email_id: "",
      dept: "",
      designation: "",
      camera: "",
      password: "",
    });
    setShowModal(true);
    setShowPassword(false);
  }}
>
 <span className="text-size"><IoPersonAddSharp /></span>
</Button>

        </div>
        <Table className="user-table" responsive>
       <thead>
  <tr>
    <th className="text-center"><FaUser style={{ marginRight: '10px', fontSize: "1.2rem"  }} />Name</th>
    <th className="text-center"><FaPhone style={{ marginRight: '10px' , fontSize: "1.2rem" }} />Mobile</th>
    <th className="text-center"><FaEnvelope style={{ marginRight: '10px', fontSize: "1.2rem"  }} />Email</th>
    <th className="text-center"><FaBuilding style={{ marginRight: '10px', fontSize: "1.2rem"  }} />Dept</th>
    <th className="text-center"><FaUserTie style={{ marginRight: '10px' , fontSize: "1.2rem" }} />Designation</th>
    <th className="text-center"><FaVideo style={{ marginRight: '10px' , fontSize: "1.2rem" }} />Camera</th>
    <th className="text-center"><FaLock style={{ marginRight: '10px' , fontSize: "1.2rem" }} />Password</th>
    <th className="text-center"><FaTools style={{ marginRight: '10px', fontSize: "1.2rem"  }} />Actions</th>
  </tr>
</thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td  className="text-center">
                  <div className="d-flex align-items-center gap-2">
                   <div
  className="initial-circle"
  style={{ backgroundColor: getRandomColor() }}
>
  {user.name[0].toUpperCase()}
</div>
                   <span className="fw-bold"> {user.name}</span>
                  </div>
                </td>
                <td  className="text-center">{user.mobile_number}</td>
                <td  className="text-center">{user.email_id}</td>
                <td  className="text-center">{user.dept}</td>
                <td  className="text-center">{user.designation}</td>
            <td className="text-center">
  <div className="camera-scroll d-flex overflow-auto">
    {user.camera.map((cam, i) => (
      <span key={i} className="badge bg-primary me-2">{cam}</span>
    ))}
  </div>
</td>


        
     <td onClick={() => toggleRowPasswordVisibility(user.id)} style={{ cursor: "pointer" }}>
  {visiblePasswords[user.id] ? (
    <>
      <FaEye className="me-1 lock-icon" />
          {user.password}
    </>
  ) : (
    <>
      <FaLock className="me-1 lock-icon" />
      {"•".repeat(user.password.length)}
    </>
  )}
  </td>
  <td  className="text-center">
                  <Button
                  
                    size="sm"
                    className="action-btn me-2 bg-color"
                    onClick={() => handleEdit(user)}
                  >
                   <span className="text-light pb-1"> <FaPen /></span>
                  </Button>
                  <Button
                    size="sm"
                    className="action-btn bg-color"
                    onClick={() => handleDelete(user.id)}
                  >
                  <span className="text-light pb-1">  <FaTrash /></span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Edit Modal */}
      <Modal show={showModal} style={{ color: "#36393f"}} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser.name}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser.mobile_number}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      mobile_number: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={selectedUser.email_id}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      email_id: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser.dept}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      dept: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser.designation}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      designation: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Camera</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedUser.camera}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      camera: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={selectedUser.password}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        password: e.target.value,
                      })
                    }
                  />
                  <Button
                    variant="outline-secondary"
                    title={showPassword ? "Hide" : "Show"}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
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

export default Users;
