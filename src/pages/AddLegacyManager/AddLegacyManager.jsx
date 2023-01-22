import React, { useState, useRef } from "react";
import Select from "react-select";

import { useNavigate } from "react-router-dom";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./AddLegacyManager.css";

const AddLegacyManager = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [type, setType] = useState(1);
  const inputRef = useRef(null);

  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");

  const handleChangePhone = (e) => {
    let currentValue = e.target.value;
    const isNumber = /^\d+$/.test(currentValue);
    if (isNumber) {
      setValue(currentValue);
    } else {
      setValue("");
    }
  };

  const options = [
    { value: "option1", label: "Option 1", description: "" },
    { value: "option2", label: "Option 2", description: "" },
    { value: "option3", label: "Option 3", description: "" },
    { value: "option4", label: "Option 4", description: "" },
    { value: "option5", label: "Option 5", description: "" },
    { value: "option6", label: "Option 6", description: "" },
    { value: "option7", label: "Option 7", description: "" },
    { value: "option8", label: "Option 8", description: "" },
  ];
  const people = require("../../img/iconpeople1.svg").default;

  return (
    <div className="AddInsurance">
      <div className="AddInsuranceFame1">
        <p className="HTextAddInsuranceFame1">Dashboard </p>
        <p className="HTextAddInsuranceFame1_2">{">"}</p>
        <p className="HTextAddInsuranceFame1_2">ระบุผู้จัดการมรดก</p>
      </div>

      <div className="AddInsuranceFame2">
        <p className="HTextAddInsuranceFame2">ระบุผู้จัดการมรดก</p>

        <div className="InPersonalFame2">
          <div className="HAddPersonalFame2">
            <div className="HtextPersonalFame2">
              <p className="HTextDBFame2">เลือกผู้จัดการมรดก</p>
              <p className="labelformAddLegacyManagerFame2">
                ระบุผู้จัดการมรดกที่เหมาะสมซึ่งคุณยังสามารถปรับเปลี่ยนได้หลังจากนี้
              </p>
            </div>
            <div className="iconPersonalFame2" />
          </div>
        </div>
        {type === 1 ? (
          <>
            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">เลือกประเภทของผู้จัดการมรดก</p>

              <div className="rowAddLegacyManagerFame2">
                <button
                  className="boxAddLegacyManagerFame2"
                  onClick={() => setType(1)}
                >
                  <div className="iconAddLegacyManagerFame2_1" />
                  <p className="HTextAddLegacyManagerFame2">ทายาทผู้รับมรดก</p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(2)}
                >
                  <div className="iconAddLegacyManagerFame2_2" />
                  <p className="HTextAddLegacyManagerFame2">
                    ทนายความจาก allright
                  </p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(3)}
                >
                  <div className="iconAddLegacyManagerFame2_3" />
                  <p className="HTextAddLegacyManagerFame2">บุคคลอื่น</p>
                </button>
              </div>
            </div>
            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">เลือกผู้จัดการมรดก</p>
            </div>
            <form className="AddLegacyManager_people">
              {options.map((option) => (
                <div key={option.value} className="Boxpeople">
                  <input
                    type="radio"
                    value={option.value}
                    checked={option.value === selectedOption}
                    onChange={() => setSelectedOption(option.value)}
                  />
                  <img alt="people" src={people} className="people" />
                  <div>
                    <p className="HBoxpeople">{option.label}</p>
                    <p className="labelformAddLegacyManagerFame2">{option.label}</p>
                  </div>
                </div>
              ))}
            </form>
          </>
        ) : type === 2 ? (
          <>
            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">เลือกประเภทของผู้จัดการมรดก</p>

              <div className="rowAddLegacyManagerFame2">
                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(1)}
                >
                  <div className="iconAddLegacyManagerFame2_1" />
                  <p className="HTextAddLegacyManagerFame2">ทายาทผู้รับมรดก</p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2"
                  onClick={() => setType(2)}
                >
                  <div className="iconAddLegacyManagerFame2_2" />
                  <p className="HTextAddLegacyManagerFame2">
                    ทนายความจาก allright
                  </p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(3)}
                >
                  <div className="iconAddLegacyManagerFame2_3" />
                  <p className="HTextAddLegacyManagerFame2">บุคคลอื่น</p>
                </button>
              </div>
            </div>
            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">กรอกข้อมูลผู้จัดการมรดก</p>
            </div>
            <form className="AddLegacyManager_people_2">
              <div className="formAddInsuranceFame2_1">
                <label>
                  <p className="labelformAddLegacyManagerFame2">ชื่อ</p>
                  <input
                    className="inputformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="policy number"
                    placeholder={"ชื่อ"}
                    style={{ marginRight: 106 }}
                  />
                </label>

                <label>
                  <p className="labelformAddLegacyManagerFame2">นามสกุล</p>
                  <input
                    className="inputformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="Agent"
                    placeholder={"นามสกุล"}
                  />
                </label>
              </div>
              <div className="formPersonalFame2_1">
                <label>
                  <p className="labelformAddLegacyManagerFame2">เพศ</p>
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
                    // options={Insurance_Type}
                    placeholder={""}
                  />
                </label>

                <label>
                  <p className="labelformAddLegacyManagerFame2">อีเมล</p>
                  <input
                    className="inputformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="policy number"
                    placeholder={"john@gmail.com"}
                    style={{ marginRight: 106 }}
                  />
                </label>
              </div>
              <div className="formPersonalFame2_1">
                <label>
                  <p className="labelformAddLegacyManagerFame2">เบอร์โทรศัพท์</p>
                  <div className="BoxPhone">
                    <div className="BoxPhoneInput">
                      <PhoneInput
                        international
                        value={phone}
                        onChange={setPhone}
                      ></PhoneInput>
                      <p className="textphone">{phone}</p>
                    </div>
                    <input
                      className="inputformAddInsuranceFame2_2"
                      value={value}
                      name="policy number"
                      placeholder={"081-111-1111"}
                      onChange={handleChangePhone}
                      ref={inputRef}
                    />
                  </div>
                </label>
              </div>
            </form>
          </>
        ) : type === 3 ? (
          <>
            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">เลือกประเภทของผู้จัดการมรดก</p>

              <div className="rowAddLegacyManagerFame2">
                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(1)}
                >
                  <div className="iconAddLegacyManagerFame2_1" />
                  <p className="HTextAddLegacyManagerFame2">ทายาทผู้รับมรดก</p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(2)}
                >
                  <div className="iconAddLegacyManagerFame2_2" />
                  <p className="HTextAddLegacyManagerFame2">
                    ทนายความจาก allright
                  </p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2"
                  onClick={() => setType(3)}
                >
                  <div className="iconAddLegacyManagerFame2_3" />
                  <p className="HTextAddLegacyManagerFame2">บุคคลอื่น</p>
                </button>
              </div>
            </div>
            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">กรอกข้อมูลผู้จัดการมรดก</p>
            </div>
            <form className="AddLegacyManager_people_2">
              <div className="formAddInsuranceFame2_1">
                <label>
                  <p className="labelformAddLegacyManagerFame2">ชื่อ</p>
                  <input
                    className="inputformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="policy number"
                    placeholder={"ชื่อ"}
                    style={{ marginRight: 106 }}
                  />
                </label>

                <label>
                  <p className="labelformAddLegacyManagerFame2">นามสกุล</p>
                  <input
                    className="inputformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="Agent"
                    placeholder={"นามสกุล"}
                  />
                </label>
              </div>
              <div className="formPersonalFame2_1">
                <label>
                  <p className="labelformAddLegacyManagerFame2">เพศ</p>
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
                    // options={Insurance_Type}
                    placeholder={""}
                  />
                </label>

                <label>
                  <p className="labelformAddLegacyManagerFame2">อีเมล</p>
                  <input
                    className="inputformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="policy number"
                    placeholder={"john@gmail.com"}
                    style={{ marginRight: 106 }}
                  />
                </label>
              </div>
              <div className="formPersonalFame2_1">
                <label>
                  <p className="labelformAddLegacyManagerFame2">เบอร์โทรศัพท์</p>
                  <div className="BoxPhone">
                    <div className="BoxPhoneInput">
                      <PhoneInput
                        international
                        value={phone}
                        onChange={setPhone}
                      ></PhoneInput>
                      <p className="textphone">{phone}</p>
                    </div>
                    <input
                      className="inputformAddInsuranceFame2_2"
                      value={value}
                      name="policy number"
                      placeholder={"081-111-1111"}
                      onChange={handleChangePhone}
                      ref={inputRef}
                    />
                  </div>
                </label>
              </div>
            </form>
          </>
        ) : null}
      </div>

      <div className="AddLegacyManagerFame3">
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
export default AddLegacyManager;
