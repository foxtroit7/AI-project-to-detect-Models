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
import SingleRoiDetails from './components/SingleRoiDetails';
import Accepted from './components/Accepted';
import Rejected from './components/Rejected';
import SingleReject from './components/SingleReject';
import SingleAccept from './components/singleAccept';
import NprDetection from './components/NprDetection';
import NprViolations from './components/NprViolations';
import NprNonViolations from './components/NprNonViolations';
import ObjectDetection from './components/ObjectDetection';
import Dashboard from './components/Dashboard';
function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<Users />} />s
            <Route path="camera" element={<Camera />} />
            <Route path="roi" element={<Roi />} />
            <Route path="roi-details" element={<RoiDetails />} />
            <Route path="details" element={<SingleRoiDetails />} />
            <Route path="/accepted" element={<Accepted />} />
            <Route path="/rejected" element={<Rejected />} />
            <Route path="/single-reject/:id" element={<SingleReject />} />
            <Route path="/single-accept/:id" element={<SingleAccept />} />
            <Route path="/npr-detection" element={<NprDetection />} />
            <Route path="/npr-violations" element={<NprViolations />} />
            <Route path="/npr-non-violations" element={<NprNonViolations />} />
             <Route path="/object-detections" element={<ObjectDetection />} />
          </Route>
        </Routes>
      </Router>
 
  );
}

export default App;
