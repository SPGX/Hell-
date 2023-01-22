import React, { useState } from "react";
import "./ProgressBar.css";
const ProgressBar = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    setPercentage(progress);
  }, [progress]);

  return (
    <div className="ProgressBar">
      <div className="ProgressBartext">
        <p className="progressP">Progress</p>
        <p className="p0">{progress}%</p>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
