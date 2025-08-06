import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaUser,
  FaVideo,
  FaVectorSquare,
  FaBuilding,
  FaUserCircle,
  FaAudioDescription
} from "react-icons/fa";
import "../css/sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const username = "John Doe"; // Replace with real user

  const sections = [
    { title: "Users", icon: <FaUser />, path: "/users" },
    { title: "Camera", icon: <FaVideo />, path: "/camera" },
    { title: "ROI", icon: <FaVectorSquare />, path: "/roi" },
    { title: "ROI Details", icon: <FaAudioDescription />, path: "/roi-details" },
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      {/* Collapse Button */}
      <div className="collapse-btn-wrapper">
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Top Section: Company Logo */}
      {!collapsed && (
        <div className="sidebar-header">
          <div className="logo-section d-flex justify-content-between gap-3">
            <div><FaBuilding className="company-icon" /></div>
            <div><span className="company-name">JMBAXI</span></div>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <div className="sidebar-links mt-3">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className={`sidebar-title-link ${
              location.pathname === section.path ? "active" : ""
            } ${collapsed ? "centered" : ""}`}
          >
            <span className="title-letter">{section.icon}</span>
            {!collapsed && <span className="link-label">{section.title}</span>}
          </Link>
        ))}
      </div>

      {/* Footer: User Info */}
      {!collapsed && (
        <div className="sidebar-footer mt-auto d-flex align-items-center justify-content-between px-3 py-2">
          <div className="d-flex align-items-center">
            <FaUserCircle className="user-icon me-4" />
            <span className="user-greeting"> {username}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
