import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
// import InsuranceType from "../../StandingData/InsuranceType";
// import InsuranceFirm from "../../StandingData/InsuranceFirm";
import Sex from "../../StandingData/Sex";
import Thailand from "../../StandingData/Thailand";
import AssetClass from "../../StandingData/AssetClass";
import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  API,
  // Storage, Auth, graphqlOperation
} from "aws-amplify";
// import { listPeople } from "../../graphql/queries";
import {
  createPerson as createPersonMutation,
  // updatePerson as deleteNoteMutation,
  // deletePerson as updateNoteMutation,
} from "../../graphql/mutations";
import "./AddPersonal.css";

const AddPersonal = () => {
  const navigate = useNavigate();

  //test
  const selectRef = useRef(null);

  const arrayOfObj3 = Sex.Sex;
  const arrayOfObj4 = Thailand.Thailand;
  const arrayOfObj5 = AssetClass.AssetClass;
  const [years, setYears] = useState([]);
  const [data, setData] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");

  // const [notes, setNotes] = useState([]);
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");

  // const [personal, setPersonal] = useState({

  // });

  // const v = selectRef.current.props.value

  // let x = personal.Address2;
  // let y = personal.Address3;
  // let z = personal.Address4;

  const handleX = (DistrictThaiShort) => {
    const DistrictThai = [
      ...new Set(DistrictThaiShort?.map((item) => item.DistrictThaiShort)),
    ];
    const District_Thai = DistrictThai?.map((item) => {
      return {
        value: item,
        label: item,
      };
    });
    // console.log(District_Thai);
    return District_Thai;
  };

  const handleChange = (i) => {
    const x = i.value;
    // console.log(selectRef.current.props.value);
    setData(x)
    // const DistrictThaiShort = arrayOfObj4.filter(
    //   (item) => item.ProvinceThai === `${x}`
    // );
    // const A3 = handleX(DistrictThaiShort);
    // setData(selectRef);
  };

  useEffect(() => {
    setData(selectRef?.current?.props);
  }, [selectRef?.current?.props?.value]);
  
  console.log(data);

  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const Days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const marital_status = ["โสด", "สมรส", "หย่าร้าง", "คู่สมรสเสียชีวิต"];

  const ProvinceThai = [
    ...new Set(arrayOfObj4.map((item) => item.ProvinceThai)),
  ];

  // const setPostCode = arrayOfObj4.filter(
  //   (item) => item.TambonThaiShort === `${z}`
  // );

  // const TambonThai = [
  //   ...new Set(TambonThaiShort.map((item) => item.TambonThaiShort)),
  // ];

  const Day_List = Days?.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
  const Months_list = months?.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
  const Years_list = years?.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
  const Sexs = arrayOfObj3.map((item) => {
    return {
      value: item.id,
      label: item.Value,
    };
  });
  const Marital_status = marital_status?.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
  const Province = ProvinceThai?.map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  // const Tambon_Thai = TambonThai?.map((item) => {
  //   return {
  //     value: item,
  //     label: item,
  //   };
  // });

  const Asset_class = arrayOfObj5?.map((item) => {
    return {
      value: item.id,
      label: item.Value,
    };
  });

  function createDate() {
    const tempYears = [];
    const numberOfYears = 15;
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 15;
    for (let i = startYear; i > startYear - numberOfYears; i--) {
      if (i !== currentYear) tempYears.push(i);
    }

    setYears(tempYears);
  }

  // const handleChangePhone1 = (e) => {
  //   let currentValue = e.target.value;
  //   const isNumber = /^\d+$/.test(currentValue);
  //   if (isNumber) {
  //     setPersonal({ ...personal, PhoneNumber: currentValue });
  //   } else {
  //     setPersonal({ ...personal, PhoneNumber: "" });
  //   }
  // };
  // const handleChangePhone2 = (e) => {
  //   let currentValue = e.target.value;
  //   const isNumber = /^\d+$/.test(currentValue);
  //   if (isNumber) {
  //     setPersonal({ ...personal, MarPhoneNumber: currentValue });
  //   } else {
  //     setPersonal({ ...personal, MarPhoneNumber: "" });
  //   }
  // };

  async function createPerson(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(
      "55555",
      form.get("Address2")
      // form.get("Address3"),
      // form.get("Address4")
    );
    let format3 =
      form.get("Year") + "-" + form.get("Month") + "-" + form.get("Day");
    // let createdAt = new Date();
    const data = {
      Fname: form.get("Fname"),
      Lname: form.get("Lname"),
      Email: form.get("Email"),
      CitizenID: form.get("CitizenID"),
      BirthDate: format3,
      Sex: form.get("Sex"),
      PhoneCode: "+66",
      PhoneNumber: form.get("PhoneNumber"),
      Address1: form.get("Address1"),
      Address2: form.get("Address2"),
      Address3: form.get("Address3"),
      Address4: form.get("Address4"),
      PostCode: form.get("PostCode"),
      AssetClass: form.get("AssetClass"),
      MaritalStatus: form.get("MaritalStatus"),
      MarFname: form.get("MarFname"),
      MarLname: form.get("MarLname"),
      MarEmail: form.get("MarEmail"),
      MarPhoneCode: form.get("MarPhoneCode"),
      MarPhoneNumber: form.get("MarPhoneNumber"),
      // createdAt: createdAt,
      // updatedAt: createdAt,
    };
    await API.graphql({
      query: createPersonMutation,
      variables: { input: data },
    });
    event.target.reset();
  }
  useEffect(() => {
    createDate();
  }, []);

  const formFields = {
    signIn: {
      username: {
        dialCodeList: ["+66"],
      },
    },
    signUp: {
      email: {
        order: 1,
      },
      phone_number: {
        dialCodeList: ["+66"],
        order: 2,
      },
      password: {
        order: 3,
      },
      confirm_password: {
        order: 4,
      },
    },
  };

  return (
    <Authenticator formFields={formFields}>
      {({ signOut }) => (
        <div className="AddInsurance">
          <div className="AddInsuranceFame1">
            <p className="HTextAddInsuranceFame1">Dashboard </p>
            <p className="HTextAddInsuranceFame1_2">{">"}</p>
            <p className="HTextAddInsuranceFame1_2">ข้อมูลส่วนตัว</p>
            <button onClick={signOut}>Sign Out</button>
          </div>

          <div className="AddPersonalFame2">
            <p className="HTextAddInsuranceFame2">ข้อมูลส่วนตัว</p>

            <div className="InPersonalFame2">
              <div className="HAddPersonalFame2">
                <div className="HtextPersonalFame2">
                  <p className="HTextDBFame2">กรอกข้อมูลส่วนตัว</p>
                  <p className="labelformAddPersonalFame2">
                    ใส่ข้อมูลเบื้องต้นเพียงครั้งเดียวเพื่อให้ระบบเริ่มวางแผนทุกอย่างหลังจากนี้
                  </p>
                </div>
                <div className="iconPersonalFame2" />
              </div>
            </div>

            <div>
              <form as="form" onSubmit={createPerson}>
                <div className="formAddInsuranceFame2_1">
                  <label>
                    <p className="labelformAddPersonalFame2">ชื่อ</p>
                    <input
                      className="inputformAddPersonalFame2_2_1"
                      defaultValue={""}
                      name="Fname"
                      placeholder={"ชื่อ"}
                      style={{ marginRight: 106 }}
                    />
                  </label>

                  <label>
                    <p className="labelformAddPersonalFame2">นามสกุล</p>
                    <input
                      className="inputformAddPersonalFame2_2_1"
                      defaultValue={""}
                      name="Lname"
                      placeholder={"นามสกุล"}
                    />
                  </label>
                </div>

                <div className="formPersonalFame2_1">
                  <label>
                    <p className="labelformAddPersonalFame2">บัตรประชาชน</p>
                    <input
                      className="inputformAddPersonalFame2_2_1"
                      name="CitizenID"
                      placeholder={"เลข 13 หลัก ไม่ต้องเว้นวรรค/ไม่ต้องใส่ขีด"}
                    />
                  </label>
                  <div className="set">
                    <label>
                      <p className="labelformAddPersonalFame2">วันเกิด</p>
                    </label>
                    <div className="groupSelectyearPersonalFame2">
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={""}
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        name="Year"
                        options={Years_list}
                        placeholder={"ปี"}
                      />
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={""}
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        name="Month"
                        options={Months_list}
                        placeholder={"เดือน"}
                      />
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={""}
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        name="Day"
                        options={Day_List}
                        placeholder={"วันที่"}
                      />
                    </div>
                  </div>
                </div>

                <div className="formPersonalFame2_1">
                  <label>
                    <p className="labelformAddPersonalFame2">เพศ</p>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={""}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={false}
                      name="Sex"
                      options={Sexs}
                      placeholder={""}
                    />
                  </label>

                  <label>
                    <p className="labelformAddPersonalFame2">อีเมล</p>
                    <input
                      className="inputformAddPersonalFame2_2_1"
                      defaultValue={""}
                      name="Email"
                      placeholder={"john@gmail.com"}
                      style={{ marginRight: 106 }}
                    />
                  </label>
                </div>

                <div className="formPersonalFame2_1">
                  <label>
                    <p className="labelformAddPersonalFame2">เบอร์โทรศัพท์</p>
                    <div className="BoxPhone">
                      <div className="BoxPhoneInputAddPersonal">
                        <PhoneInput
                          international
                          defaultCountry="TH"
                          name="PhoneCode"
                          value={phone1}
                          onChange={setPhone1}
                        />
                      </div>
                      <input
                        className="inputformAddPersonalFame2_2Phone"
                        placeholder={"081-111-1111"}
                        name="PhoneNumber"
                      />
                    </div>
                  </label>

                  <label>
                    <p className="labelformAddPersonalFame2">สถานะสมรส</p>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={""}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={false}
                      name="MaritalStatus"
                      options={Marital_status}
                      placeholder={""}
                    />
                  </label>
                </div>

                <div className="formPersonalFame2_2">
                  <div className="HAddPersonalFame2_2">
                    <div className="HtextPersonalFame2">
                      <p className="HTextDBFame2">กรอกข้อมูลคู่สมรสของคุณ</p>
                    </div>
                    <div className="iconPersonalFame2" />
                  </div>
                  <div className="formPersonalFame2_3">
                    <label>
                      <p className="labelformAddPersonalFame2">ชื่อ</p>
                      <input
                        className="inputformAddPersonalFame2_2_1"
                        placeholder={"ชื่อ"}
                        name="MarFname"
                        style={{ marginRight: 106 }}
                      />
                    </label>

                    <label>
                      <p className="labelformAddPersonalFame2">นามสกุล</p>
                      <input
                        className="inputformAddPersonalFame2_2_1"
                        name="MarLname"
                        placeholder={"นามสกุล"}
                      />
                    </label>
                  </div>
                  <div className="formPersonalFame2_1">
                    <label>
                      <p className="labelformAddPersonalFame2">อีเมล</p>
                      <input
                        className="inputformAddPersonalFame2_1_1"
                        defaultValue={""}
                        name="MarEmail"
                        placeholder={"john@gmail.com"}
                        style={{ marginRight: 106 }}
                      />
                    </label>
                    <label>
                      <p className="labelformAddPersonalFame2">เบอร์โทรศัพท์</p>
                      <div className="BoxPhone">
                        <div className="BoxPhoneInputAddPersonal2">
                          <PhoneInput
                            international
                            defaultCountry="TH"
                            name="MarPhoneCode"
                            value={phone2}
                            onChange={setPhone2}
                          />
                        </div>
                        <input
                          className="inputformAddPersonalFame2_2Phone2"
                          name="MarPhoneNumber"
                          placeholder={"081-111-1111"}
                        />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="formPersonalFame2_4">
                  <label>
                    <p className="labelformAddPersonalFame2">
                      ที่อยู่ปัจจุบันของคุณ (optional)
                    </p>
                    <input
                      className="inputformAddPersonalFame2_2_1"
                      defaultValue={""}
                      name="Address1"
                      placeholder={"เลขที่"}
                    />
                  </label>

                  <label>
                    <p className="labelformAddInsuranceFame2_1"></p>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={""}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={false}
                      name="Address2"
                      options={Province}
                      placeholder={"จังหวัด"}
                      ref={selectRef}
                      onChange={(e) => handleChange(e)}
                    />
                  </label>
                </div>

                <div className="formPersonalFame2_1">
                  <label>
                    <p className="labelformAddPersonalFame2"></p>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={""}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={false}
                      name="Address3"
                      placeholder={"เขต/อำเภอ"}
                      options={data}
                      // ref={selectRef}
                      // onChange={(e) => handleChange(e)}
                    />
                  </label>

                  <label>
                    <p className="labelformAddPersonalFame2"></p>

                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={""}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={false}
                      name="Address4"
                      options={Marital_status}
                      placeholder={"แขวง/ตำบล"}
                    />
                  </label>
                </div>

                <div className="formPersonalFame2_1">
                  <label>
                    <input
                      className="inputformAddPersonalFame2_2_1"
                      name="PhoneCode"
                      placeholder={"รหัสไปรษณีย์"}
                      style={{ marginRight: 106 }}
                    />
                  </label>
                </div>

                <div className="formPersonalFame2_1">
                  <label>
                    <p className="labelformAddPersonalFame2">
                      มูลค่าทรัพย์สินโดยรวม
                    </p>

                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={""}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={false}
                      isRtl={false}
                      isSearchable={false}
                      name="AssetClass"
                      options={Asset_class}
                      placeholder={""}
                    />
                  </label>
                </div>
                <div className="AddPersonalFame3">
                  <div className="">
                    <div>
                      <button
                        className="cancel"
                        onClick={() => navigate("/Home")}
                      >
                        ยกเลิก
                      </button>
                      {/* {form.name("")} */}
                      <button className="save1" type="submit">
                        บันทึก
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
};
export default AddPersonal;
