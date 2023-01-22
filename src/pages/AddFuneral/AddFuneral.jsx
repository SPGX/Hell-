import React, { useState } from "react";

import Select from "react-select";

import { useNavigate } from "react-router-dom";

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import "./AddFuneral.css";

const AddFuneral = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const handleFileSelect = (event) => {
    const newImages = [...images];
    for (let i = 0; i < event.target.files.length; i++) {
      newImages.push(event.target.files[i]);
    }
    setImages(newImages);
  };

  // const handleImageRemove = (index) => {
  //   const newImages = [...images];
  //   newImages.splice(index, 1);
  //   setImages(newImages);
  // }

  //   const [selectedOption, setSelectedOption] = useState(null);
  //   const [type, setType] = useState(1);
  //   const inputRef = useRef(null);

  //   const [phone, setPhone] = useState("");
  //   const [value, setValue] = useState("");

  //   const handleChangePhone = (e) => {
  //     let currentValue = e.target.value;
  //     const isNumber = /^\d+$/.test(currentValue);
  //     if (isNumber) {
  //       setValue(currentValue);
  //     } else {
  //       setValue("");
  //     }
  //   };

  //   const people = require("../../img/iconpeople1.svg").default;

  return (
    <div className="AddInsurance">
      <div className="AddInsuranceFame1">
        <p className="HTextAddInsuranceFame1">Dashboard </p>
        <p className="HTextAddInsuranceFame1_2">{">"}</p>
        <p className="HTextAddInsuranceFame1_2">มอบหมายงานศพ</p>
      </div>

      <div className="AddInsuranceFame2">
        <p className="HTextAddInsuranceFame2">มอบหมายงานศพ</p>

        <div className="InPersonalFame2">
          <div className="HAddPersonalFame2">
            <div className="HtextPersonalFame2">
              <p className="HTextDBFame2">กรอกข้อมูลจัดการงานศพ</p>
              <p className="labelformAddInsuranceFame2">
                การสูญเสียคนที่รักเป็นเรื่องยากลองนึกภาพความเครียดในการวางแผนงานศพหลังจากสูญเสียคนที่คุณรักไปมาช่วยให้ครอบ
                ครัวของคุณง่ายโดยแจ้งเกี่ยวกับความชอบของคุณเพียงไม่กี่คําตอบที่คุณกรอกจะช่วยลดการโต้แย้งและให้พวกเขาได้ใช้
                เวลาโศกเศร้าและระลึกถึงคุณ
              </p>
            </div>
            <div className="iconPersonalFame2" />
          </div>
        </div>

        <div className="AddLegacyManagerFame2">
          <p className="HTextDBFame2">เพิ่มคนที่คุณให้ตัดสินใจหลักในงานศพ</p>
          <button className="AddInsurancebuttonFrame7">
            <div className="iconDBbuttonplusFrame7" />
            <p className="TextDBbuttonFrame7">เพิ่มคนตัดสินใจหลักในงานศพ</p>
          </button>
        </div>
        <form>
          <div className="formAddInsuranceFame2_1">
            <label>
              <p className="labelformAddInsuranceFame2">
                ประสงค์จะจัดพิธีงานศพตามแบบศาสนาใด
              </p>
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
                //   options={Insurance_Type}
                placeholder={""}
              />
            </label>

            <label>
              <p className="labelformAddInsuranceFame2">
                สถานที่ที่ต้องการให้จัดงานศพ
              </p>
              <input
                className="inputformAddInsuranceFame2_1"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">ระยะเวลาในการตั้งศพ</p>
              <input
                className="inputformAddInsuranceFame2_231"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">
                ต้องการระบุอาหารและเครื่องดื่มที่เสริ์ฟให้ผู้มางาน
              </p>
              <input
                className="inputformAddInsuranceFame2_2"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">
                ต้องการระบุดอกไม้ในงานและของที่ระลึกให้ผู้มางาน
              </p>
              <input
                className="inputformAddInsuranceFame2_2"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">
                ประสงค์ให้ผู้ร่วมงานแต่งตัว/มู้ดบรรยากาศแบบใด
              </p>
              <input
                className="inputformAddInsuranceFame2_2"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_1">
            <label>
              <p className="labelformAddInsuranceFame2">
                หลังจากพิธีการศพเสร็จสิ้น ต้องการนำร่างไปทำอย่างไร
              </p>
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
                //   options={Insurance_Type}
                placeholder={""}
              />
            </label>

            <label>
              <p className="labelformAddInsuranceFame2">
                สถานที่ในการเก็บอัฐฐิ
              </p>
              <input
                className="inputformAddInsuranceFame2_1"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">ระบุข้อมูลเพิ่มเติม</p>
              <input
                className="inputformAddInsuranceFame2_2"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">
                งบประมาณในการจัดงานศพ (บาท)
              </p>
              <input
                className="inputformAddInsuranceFame2_2"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>

          <div className="formAddInsuranceFame2_2">
            <label>
              <p className="labelformAddInsuranceFame2">
                แหล่งเงินในการจัดงานศพ
              </p>
              <input
                className="inputformAddInsuranceFame2_2"
                defaultValue={""}
                name="Agent"
                placeholder={""}
              />
            </label>
          </div>
        </form>

        <div className="formAddInsuranceFame2_3">
          <div className="imgupload" />
          <p className="HTextDBFame2">วางรูปภาพที่นี้</p>
          <p className="labelformAddInsuranceFame3">File support JPG,PNG</p>
          <div>
            <label htmlFor="file-input" className="custom-file-label">
              อัพโหลดภาพ
            </label>

            <input
              type="file"
              multiple
              id="file-input"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>

      <div className="AddInsuranceFame3">
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
export default AddFuneral;
