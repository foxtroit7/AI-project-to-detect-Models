import React, { useState } from "react";
import "../css/Roi.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCar, FaWalking, FaCogs } from "react-icons/fa";
import { BsFillSave2Fill } from "react-icons/bs";
import { MdHealthAndSafety, MdOutlineSmokeFree, MdEmojiTransportation, MdEmojiObjects } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";

const Roi = () => {
  const cameras = ["Camera 1", "Camera 2", "Camera 3"];
  const tabs = [
    "PPE Kit Detection",
    "Vehicle Detection (Non Parking)",
    "Pedestrian Detection",
    "Smoke and Fire Detection",
    "Speed Violation Detection",
    "Number Plate Recognition",
    "Object Detection",
  ];

  const [selectedCamera, setSelectedCamera] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [ppeItems, setPpeItems] = useState([]);
  const [speedLimit, setSpeedLimit] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  const handleSave = () => {
    alert(`ROI Saved for "${activeTab}" on "${selectedCamera}"`);
  };

  const handlePpeChange = (item) => {
    setPpeItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handlePpeSave = () => {
    alert(`Saved PPE Items: ${ppeItems.join(", ")}`);
  };

  const handleSpeedSave = () => {
    alert(`Saved Speed Limit: ${speedLimit} km/hr`);
  };

  const handleObjectDetectionSave = () => {
    alert(`Saved Time Range:\nStart: ${startDateTime}\nEnd: ${endDateTime}`);
  };

  const getImageSrc = () => {
    return "https://vynmsa.com/wp-content/uploads/2024/02/industrial-zone.jpg.webp";
  };

  const getTabIcon = (tab) => {
    switch (tab.toLowerCase()) {
      case "vehicle detection (non parking)":
        return <FaCar className="me-2" style={{ fontSize: "1.5rem" }} />;
      case "ppe kit detection":
        return <MdHealthAndSafety className="me-2" style={{ fontSize: "1.5rem" }} />;
      case "pedestrian detection":
        return <FaWalking className="me-2" style={{ fontSize: "1.5rem" }} />;
      case "smoke and fire detection":
        return <MdOutlineSmokeFree className="me-2" style={{ fontSize: "1.5rem" }} />;
      case "number plate recognition":
        return <MdEmojiTransportation className="me-2" style={{ fontSize: "1.5rem" }} />;
      case "object detection":
        return <MdEmojiObjects className="me-2" style={{ fontSize: "1.5rem" }} />;
      default:
        return <IoMdSpeedometer className="me-2" style={{ fontSize: "1.5rem" }} />;
    }
  };

  return (
    <div className="roi-page container">
      {/* Camera Selection */}
      <div className="form-group my-4">
        <label className="form-label fw-bold text-light">
          <h5>Select Camera:</h5>
        </label>
        <select
          className="form-select bg-dark text-light"
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}
          style={{ backgroundColor: "#36393f", color: "white" }}
        >
          <option value="" style={{ backgroundColor: "#36393f", color: "white" }}>
            -- Select --
          </option>
          {cameras.map((cam, i) => (
            <option
              key={i}
              value={cam}
              style={{ backgroundColor: "#36393f", color: "white" }}
            >
              {cam}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for Detection Type */}
      <ul className="nav custom-tab nav-tabs mb-3 justify-content-center">
        {tabs.map((tab, i) => (
          <li className="nav-item mb-2" key={i}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {getTabIcon(tab)} {tab}
            </button>
          </li>
        ))}
      </ul>

     {/* Conditional Input Section */}
      {activeTab === "PPE Kit Detection" && (
        <div className="bg-dark text-light p-3 rounded mt-4">
          <h5>Select PPE Items:</h5>
          {["Helmet", "Jacket", "Shoes"].map((item) => (
            <div className="form-check" key={item}>
              <input
                type="checkbox"
                id={item}
                className="form-check-input"
                checked={ppeItems.includes(item)}
                onChange={() => handlePpeChange(item)}
              />
              <label htmlFor={item} className="form-check-label">
                {item}
              </label>
            </div>
          ))}
          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={handlePpeSave}>
              <BsFillSave2Fill /> Save
            </button>
          </div>
        </div>
      )}

      {activeTab === "Speed Violation Detection" && (
        <div className="bg-dark text-light p-3 rounded mt-4">
          <h5>Set Speed Limit:</h5>
          <div className="input-group">
            <span className="input-group-text bg-secondary text-white">km/hr</span>
            <input
              type="number"
              className="form-control bg-dark ms-2 text-light"
              placeholder="Enter speed"
              value={speedLimit}
              onChange={(e) => setSpeedLimit(e.target.value)}
            />
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={handleSpeedSave}>
              <BsFillSave2Fill /> Save
            </button>
          </div>
        </div>
      )}

      {activeTab === "Object Detection" && (
        <div className="bg-dark text-light p-3 rounded mt-4">
          <h5>Set Detection Time Range:</h5>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label className="mb-1">Start Date & Time</label>
              <input
                type="datetime-local"
                className="form-control bg-dark text-light"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label className="mb-1">End Date & Time</label>
              <input
                type="datetime-local"
                className="form-control bg-dark text-light"
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
              />
            </div>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={handleObjectDetectionSave}>
              <BsFillSave2Fill /> Save
            </button>
          </div>
        </div>
      )}
   
        {/* ROI Image Display */}
      <div className="roi-image-container">
        <img
          src={getImageSrc()}
          alt="Region of Interest"
          className="roi-image"
        />
      </div>
         {/* Save Button for Overall ROI */}
      <div className="text-end mt-4">
        <button
          className="btn btn-primary px-4 py-2 fw-semibold shadow-sm"
          onClick={handleSave}
        >
          <BsFillSave2Fill /> Save ROI
        </button>
      </div>

    </div>
  );
};

export default Roi;
