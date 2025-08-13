import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaClock, FaRobot } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";
import { GiCctvCamera } from "react-icons/gi";
import { LuCalendarSearch } from "react-icons/lu";
import { IoTimeSharp } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import "../css/single.css";
const SingleRoiDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>No data found. Please go back and select a card.</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4 text-light">
      <div className="mb-3" onClick={() => navigate(-1)}>
        <IoChevronBackCircle className="me-1 h1" />
      </div>

     <div className="card custom-roi-card p-4">
  <h3 className="mb-3">Model:  {state.modelName}</h3>
  <img src={state.image} alt={state.caption} className="img-fluid rounded mb-3" />
<p>    <FaRobot className="me-2 h4" />  <strong>Caption:   </strong>
  <span className="badge bg-info text-dark p-2 fs-6">
 
    {state.caption}
  </span>
</p>

  <p><FaClock className="me-2 h4" /><strong>Captured At:</strong> {state.capturedAt}</p>

  <hr />

  <div className="row">
    <div className="col-md-6 mb-3">
      <GiCctvCamera className="h4" /><strong> Camera Name:</strong> {state.cameraName}
    </div>
    <div className="col-md-6 mb-3">
     <PiMapPinAreaFill className="h4" /> <strong> Zone:</strong> {state.zone}
    </div>
    <div className="col-md-6 mb-3">
     <LuCalendarSearch className="h4" /> <strong> Identification:</strong> {state.identification}
    </div>
    <div className="col-md-6 mb-3">
     <IoTimeSharp className="h4" /> <strong>Time:</strong> {state.time}
    </div>
  </div>
    <div className="d-flex justify-content-end gap-2 mt-4">
    <button className="btn btn-success px-4"> <MdOutlineSaveAlt className="h4" /> Accept</button>
    <button className="btn btn-danger px-4"><TiCancel   className="h4 mt-1" /> Reject</button>
  </div>

</div>

    </div>
  );
};

export default SingleRoiDetails;
