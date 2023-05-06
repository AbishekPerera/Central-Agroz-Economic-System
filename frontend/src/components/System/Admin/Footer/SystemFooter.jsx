import React from "react";

const SystemFooter = () => {
  return (
    <div>
      <footer
        className="bg-light text-center text-white"
        style={{ position: "absolute", bottom: "0", width: "100%" }}
      >
        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: "#7a88ff" }}>
          {/* <div className="text-center p-3" style={{ backgroundColor: "white" }}> */}
          <span className="" style={{ color: "white" }}>
            © 2023 All Rights Reserved : Central Agroz Economic System
          </span>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default SystemFooter;
