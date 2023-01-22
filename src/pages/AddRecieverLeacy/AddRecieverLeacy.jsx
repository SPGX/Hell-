import React from "react";

// import Select from "react-select";
import Premium from "../../img/iconDashboard1.svg";

import { useNavigate } from "react-router-dom";

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import "./AddRecieverLeacy.css";

const AddRecieverLeacy = () => {
  const navigate = useNavigate();
  //   const [type, setType] = useState(1);

  return (
    <div className="AddInsurance">
      <div className="AddInsuranceFame1">
        <p className="HTextAddInsuranceFame1">Dashboard </p>
        <p className="HTextAddInsuranceFame1_2">{">"}</p>
        <p className="HTextAddInsuranceFame1_2">ผู้รับมรดก</p>
      </div>

      <div className="AddInsuranceFame2">
        <p className="HTextAddInsuranceFame2">ผู้รับมรดก</p>

        <div className="InPersonalFame2">
          <div className="HAddPersonalFame2">
            <div className="HtextPersonalFame2">
              <p className="HTextDBFame2">กรอกข้อมูลผู้รับมรดก</p>
              <p className="labelformAddOrder2">
                ระบุผู้รับมรดกที่เหมาะสมซึ่งคุณยังสามารถปรับเปลี่ยนได้หลังจากนี้
              </p>
            </div>
            <div className="iconPersonalFame2" />
          </div>
        </div>

        <div className="AddRecieverLeacyFame2">
          <p className="HTextDBFame2">กรอกข้อมูลคนที่คุณต้องการให้รับมรดก</p>
          <div className="rowAddLegacyManagerFame2">
            <div className="boxAddRecieverLeacyFame2_1">
              <div className="iconAddRecieverLeacyame2_1" />
              <div className="textboxAddRecieverLeacyFame2_1">
                <p className="HTextAddLegacyManagerFame2">ผู้รับมรดกคนที่ 1</p>
                <p className="labelformAddRecieverLeacy2">
                  ใส่ข้อมูลเกี่ยวกับผู้รับมรดกของคุณเพื่อง่ายต่อ การจัดสรร
                </p>
                <button className="buttonAddRecieverLeacy">เพิ่มข้อมูล</button>
              </div>
            </div>

            <div className="boxAddRecieverLeacyFame2_1">
              <div className="iconAddRecieverLeacyame2_1" />
              <div className="textboxAddRecieverLeacyFame2_1">
                <p className="HTextAddLegacyManagerFame2">ผู้รับมรดกคนที่ 2</p>
                <p className="labelformAddRecieverLeacy2">
                  ใส่ข้อมูลเกี่ยวกับผู้รับมรดกของคุณเพื่อง่ายต่อ การจัดสรร
                </p>
                <button className="buttonAddRecieverLeacy">เพิ่มข้อมูล</button>
              </div>
            </div>

            <div className="boxAddRecieverLeacyFame2_1">
              <div className="iconAddRecieverLeacyame2_1" />
              <div className="textboxAddRecieverLeacyFame2_1">
                <p className="HTextAddLegacyManagerFame2">ผู้รับมรดกคนที่ 3</p>
                <p className="labelformAddRecieverLeacy2">
                  ใส่ข้อมูลเกี่ยวกับผู้รับมรดกของคุณเพื่อง่ายต่อ การจัดสรร
                </p>
                <button className="buttonAddRecieverLeacy">เพิ่มข้อมูล</button>
              </div>
            </div>
          </div>
        </div>

        <div className="AddRecieverLeacyame2">
          <button className="AddRecieverLeacybuttonFrame7">
            <div className="iconDBbuttonplusFrame7" />
            <p className="TextAddRecieverLeacybuttonFrame7">เพิ่มผู้รับมรดก</p>
          </button>
        </div>

        <div className="AddRecieverLeacyFame4">
          <div className="BoxDBFame2">
            <img src={Premium} alt="Premium" className="imgAddRecieverLeacyFame4"/>
            <div>
              <div className="HTextAddRecieverLeacy">
                <p className="HTextDBFame2">คุณสามารถเพิ่ม</p>
                <p className="HTextAddRecieverLeacyFame2">ผู้รับมรดกได้ 3 คน</p>
              </div>

              <p className="HTextDBFame2">หากต้องการเพิ่มได้อย่างไม่จํากัด</p>
            </div>
          </div>
          <div className="BoxDBFame2_button">
            <button>อัพเกรด Premium</button>
          </div>
        </div>
       
      </div>

      <div className="AddRecieverLeacyFame3">
        <div className="">
          <div>
            <button className="cancel" onClick={() => navigate("/Home")}>
              ยกเลิก
            </button>
            <button className="save">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRecieverLeacy;
