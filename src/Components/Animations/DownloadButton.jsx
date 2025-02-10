import React from "react";
import "./Download.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const DownloadButton = () => {
  return (
    <div>
      <a href="./XAVIER AKASH M.pdf" download="XAVIER AKASH M.pdf">
        <button className="button" type="button">
          <span className="button__text">Download Resume</span>
          <span className="button__icon">
            <b><i className="bi bi-box-arrow-in-down"></i></b>
          </span>
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
