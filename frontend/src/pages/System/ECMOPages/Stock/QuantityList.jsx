import React from "react";

import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import QunatityModal from "../../../../components/System/ECMO/Stock/QuantityModal";

function QuantityList() {
  //get data from local storage as a string
  const ecoInfo = localStorage.getItem("ecmoInfo");
  //set data to local storage as a JSON object
  const ecoInfo1 = JSON.parse(ecoInfo);

  const centerName = ecoInfo1["ecoCenter"]["ecoCenterName"] || "Kandy";

  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>
        <QunatityModal centerName={centerName} />

        <SystemFooter />
      </div>
    </div>
  );
}

export default QuantityList;
