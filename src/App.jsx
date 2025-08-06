import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Users from './components/Users';
import Camera from './components/Camera';
import Roi from './components/Roi';
import Layout from './components/Layout';
import RoiDetails from './components/RoiDetails';
function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="users" element={<Users />} />
            <Route path="camera" element={<Camera />} />
            <Route path="roi" element={<Roi />} />
            <Route path="roi-details" element={<RoiDetails />} />
          </Route>
        </Routes>
      </Router>
 
  );
}

export default App;
