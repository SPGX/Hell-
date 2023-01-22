import React from "react";
import Select from "react-select";
import InsuranceType from "../../StandingData/InsuranceType";
import InsuranceFirm from "../../StandingData/InsuranceFirm";
// import Dashboard1 from "../../img/Dashboard1.svg";
// import DashboardSearching from "../../img/DashboardSearching.svg";

// import { Auth } from "aws-amplify";
// import { Link } from "react-router-dom";
// import "./Login.css";
import { useNavigate } from "react-router-dom";
import "./AddInsurance.css";

const AddInsurance = () => {
  const navigate = useNavigate();
  const arrayOfObj1 = InsuranceType.InsuranceType;
  const arrayOfObj2 = InsuranceFirm.InsuranceFirm;
  const Insurance_Type = arrayOfObj1.map((item) => {
    return {
      value: item.id,
      label: item.Value,
    };
  });
  const Insurance_Firm = arrayOfObj2.map((item) => {
    return {
      value: item.id,
      label: item.Value,
    };
  });

  return (
    <div className="AddInsurance">
      <div className="AddInsuranceFame1">
        <p className="HTextAddInsuranceFame1">Dashboard </p>
        <p className="HTextAddInsuranceFame1_2">{">"}</p>
        <p className="HTextAddInsuranceFame1_2">ประกันชีวิตที่คุณถือไว้</p>
      </div>

      <div className="AddInsuranceFame2">
        <p className="HTextAddInsuranceFame2">เพิ่มประกันชีวิตที่คุณถือไว้</p>
        <div>
          <form>
            <div className="formAddInsuranceFame2_1">
              <label>
                <p className="labelformAddInsuranceFame2">ประเภทของประกัน</p>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={""}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={true}
                  isRtl={false}
                  isSearchable={false}
                  name="InsuranceType"
                  options={Insurance_Type}
                  placeholder={"เลือกประเภทของประกัน"}
                />
              </label>

              <label>
                <p className="labelformAddInsuranceFame2">บริษัทประกัน</p>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={""}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={true}
                  isRtl={false}
                  isSearchable={false}
                  name="InsuranceType"
                  options={Insurance_Firm}
                  placeholder={"เลือกบริษัทประกัน"}
                />
              </label>
            </div>

            <div className="formAddInsuranceFame2_1">
              <label>
                <p className="labelformAddInsuranceFame2"> เลขกรมธรรม์</p>
                <input
                  className="inputformAddInsuranceFame2_1"
                  defaultValue={""}
                  name="policy number"
                  placeholder={"880406-14-0607, A0263798"}
                  style={{ marginRight: 106 }}
                />
              </label>

              <label>
                <p className="labelformAddInsuranceFame2">ชื่อผู้ดูแล(Agent)</p>
                <input
                  className="inputformAddInsuranceFame2_1"
                  defaultValue={""}
                  name="Agent"
                  placeholder={"ระบุผู้ดูแลกรมธรรม์"}
                />
              </label>
            </div>

            <div className="formAddInsuranceFame2_2">
              <label>
                <p className="labelformAddInsuranceFame2">
                  คำอธิบายเพิ่มเติม(optional)
                </p>
                <textarea
                  className="textareaformAddInsuranceFame2_1"
                  defaultValue={""}
                  name="more"
                  maxlength="100"
                  placeholder={
                    "บอกรายละเอียดของกรมธรรม์เพิ่มเติม เช่น คุ้มครองกี่ปีหรือมีเงื่อนไขอย่างไรที่ควรรู้"
                  }
                  style={{ marginRight: 130 }}
                />
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="AddInsuranceFame3">
        <div className="">
          <div className="InAddInsuranceFame3">
            <div className="HAddInsuranceFame3">
              <div className="iconAddInsuranceFame3" />
              <div className="HtextAddInsuranceFame3">
                <p className="HTextDBFame2">อัพโหลดเอกสารประกัน</p>
                <p className="labelformAddInsuranceFame2">จำนวนเอกสาร 3 ไฟล์</p>
              </div>
            </div>
            <div className="areaUploadAddInsuranceFame3">
              <p>เอกสารหลักฐานที่ได้จากบริษัทประกันชีวิต อาทิ กรมธรรม์</p>
              <p>(เป็นไฟล์ PDF หรือ JPG ขนาดไม่เกิน 1 mb)</p>
            </div>
            <button
              className="buttonUploadAddInsuranceFame3"
              // onClick={()=>updateList()}
            >
              อัพโหลดเอกสาร
            </button>
          </div>
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
export default AddInsurance;
