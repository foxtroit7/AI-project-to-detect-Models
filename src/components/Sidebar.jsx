import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  FaUser,
  FaVideo,
  FaVectorSquare,
  FaBuilding,
  FaUserCircle,
  FaAudioDescription,
  FaParagraph,
} from "react-icons/fa";
import "../css/sidebar.css";
import { MdOutlineSaveAlt } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { FaChartBar } from "react-icons/fa6";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const username = "John Doe";

  // State to manage which dropdowns are open
  const [expandedDropdowns, setExpandedDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setExpandedDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sections = [
     { title: "Dashboard", icon: <FaChartBar />, path: "/" },
    { title: "Users", icon: <FaUser />, path: "/users" },
    { title: "Camera", icon: <FaVideo />, path: "/camera" },
    { title: "ROI", icon: <FaVectorSquare />, path: "/roi" },
    {
      title: "Detections",
      icon: <FaAudioDescription />,
      path: "/roi-details",
      subPages: [
        { title: "Violation Detection", path: "/roi-details" },
        { title: "NPR Detection", path: "/npr-detection" },
        { title: "Object Detection", path: "/object-detections" },
      ],
    },
    {
      title: "Violations",
      icon: <MdOutlineSaveAlt />,
      path: "/accepted",
      subPages: [
        { title: "Common Violations", path: "/accepted" },
        { title: "NPR Violations", path: "/npr-violations" },
        { title: "Object Violations", path: "" },
      ],
    },
    {
      title: "Non Violations",
      icon: <TiCancel />,
      path: "/rejected",
      subPages: [
        { title: "Common Non Violations", path: "/rejected" },
        { title: "NPR Non Violations", path: "/npr-non-violations" },
        { title: "Object Non Violations", path: "" },
      ],
    },
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
        {sections.map((section) => {
          const isDropdown = !!section.subPages;
          const isActive = location.pathname === section.path || section.subPages?.some(sub => location.pathname === sub.path);
          const isExpanded = expandedDropdowns[section.title];

          return (
            <div key={section.path} className="sidebar-section">
              <div
                className={`sidebar-title-link ${isActive ? "active" : ""} ${collapsed ? "centered" : ""}`}
                onClick={() => isDropdown ? toggleDropdown(section.title) : null}
              >
                <Link to={section.path} className="d-flex text-decoration-none align-items-center w-100">
                  <span className="title-letter text-light">{section.icon}</span>
                  {!collapsed && (
                    <span className="d-flex justify-content-between align-items-center text-light  w-100">
                      <span className="link-label">{section.title}</span>
                      {isDropdown &&
                        (isExpanded ? <FiChevronUp className="text-light" /> : <FiChevronDown className="text-light" />)}
                    </span>
                  )}
                </Link>
              </div>

              {/* Subpages */}
              {isDropdown && isExpanded && !collapsed && (
                <div className="subpage-links ms-4">
                  {section.subPages.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`sidebar-sub-link ${location.pathname === sub.path ? "active" : ""}`}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
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
