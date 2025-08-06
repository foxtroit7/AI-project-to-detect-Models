import React, { useEffect, useState } from "react";
import "../css/details.css";
import { FaClock, FaRobot, FaEye } from "react-icons/fa";

const RoiDetails = () => {
  const [data, setData] = useState([]);

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

  return (
    <div className="container py-4">
        <h3 className="text-light mb-3">Reason Of Intrest Details</h3>
      {data.map((item, index) => (
        <div className="card bg-dark text-light mb-5 p-3" key={index}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {item.images.map((img, i) => (
              <div className="col" key={i}>
                <div className="rounded card-div p-2 h-100">
                  <img src={img.src} alt={img.caption} className="img-fluid rounded mb-2" />
                  <p className="mb-1">{img.caption}</p>

                  {/* PPE Kit Detection */}
                  {item.modelName === "PPE Kit Detection" && (
                    <div>
                      <span className={`badge bg-${img.caption.toLowerCase().includes("helmet") ? "success" : "danger"} me-1`}>
                        {img.caption.toLowerCase().includes("helmet") ? "Helmet Detected" : "Helmet Missing"}
                      </span>
                      <span className="badge bg-warning text-dark me-1">Jacket Missing</span>
                      <span className="badge bg-warning text-dark">Shoes Missing</span>
                    </div>
                  )}

                  {/* Speed Violation */}
                  {item.modelName === "Speed Violation Detection" && (
                    <div>
                      <span className="badge bg-danger">Speed: 61 km/hr</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <h5><FaRobot className="me-2" />Model: <span>{item.modelName}</span></h5>
              <p><FaClock className="me-2" />Captured At: <span>{formatDate(item.capturedAt)}</span></p>
            </div>
            <button className="btn view-details-btn  d-flex align-items-center">
              <FaEye className="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoiDetails;
