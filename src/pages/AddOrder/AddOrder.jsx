import React, { useState } from "react";

// import Select from "react-select";

import { useNavigate } from "react-router-dom";

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import "./AddOrder.css";

const AddOrder = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(1);

  return (
    <div className="AddInsurance">
      <div className="AddInsuranceFame1">
        <p className="HTextAddInsuranceFame1">Dashboard </p>
        <p className="HTextAddInsuranceFame1_2">{">"}</p>
        <p className="HTextAddInsuranceFame1_2">บันทึกคำสั่งเสีย</p>
      </div>

      <div className="AddInsuranceFame2">
        <p className="HTextAddInsuranceFame2">บันทึกคำสั่งเสีย</p>

        <div className="InPersonalFame2">
          <div className="HAddPersonalFame2">
            <div className="HtextPersonalFame2">
              <p className="HTextDBFame2">ระบุคำสั่งเสียสุดท้าย</p>
              <p className="labelformAddOrder2">
                อยากจะบอกกล่าวข้อความใดให้คนที่คุณรัก เพื่อช่วยให้
                เขาจดจําและผ่านช่วงเวลาหลังจากไม่มีคุณไปได้
              </p>
            </div>
            <div className="iconPersonalFame2" />
          </div>
        </div>

        {type === 1 ? (
          <>
            <div className="AddLegacyManagerFame2">
              <div className="rowAddLegacyManagerFame2">
                <button
                  className="boxAddLegacyManagerFame2"
                  onClick={() => setType(1)}
                >
                  <div className="iconAddLegacyManagerFame2_1" />
                  <p className="HTextAddLegacyManagerFame2">บันทึกสารณะ</p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(2)}
                >
                  <div className="iconAddLegacyManagerFame2_2" />
                  <p className="HTextAddLegacyManagerFame2">บันทึกระบุผู้รับ</p>
                </button>
              </div>
            </div>
            <form>
              <div className="formAddInsuranceFame2_2">
                <label>
                  <p className="labelformAddOrder2">หัวข้อ</p>
                  <input
                    className="inputformAddInsuranceFame2_2"
                    defaultValue={""}
                    name="Agent"
                    placeholder={"หัวข้อจดหมายคำบอกกล่าวสุดท้าย"}
                  />
                </label>
              </div>

              <div className="formAddInsuranceFame2_2">
                <label>
                  <p className="labelformAddOrder2">คำบอกกล่าว</p>
                  <textarea
                    className="textareaformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="more"
                    maxlength="100"
                    placeholder={
                      "คำที่อยากบอกกล่าว เพื่อส่งถึงคนที่คนรักก่อนลาจาก"
                    }
                    style={{ marginRight: 130 }}
                  />
                </label>
              </div>

              <div className="formAddInsuranceFame2_2">
                <label>
                  <p className="labelformAddOrder2">โน๊ตเพิ่มเติม</p>
                  <textarea
                    className="textareaformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="more"
                    maxlength="100"
                    placeholder={"โน๊ตเพิ่มเติม"}
                    style={{ marginRight: 130 }}
                  />
                </label>
              </div>

              <div className="InAddOrderFame3">
                <div className="HAddInsuranceFame3">
                  <div className="iconAddInsuranceFame3" />
                  <div className="HtextAddInsuranceFame3">
                    <p className="HTextDBFame2">อัพโหลดคำสั่งเสีย</p>
                    <p className="labelformAddOrder2">
                      จำนวนเอกสาร 3 ไฟล์
                    </p>
                  </div>
                </div>
                <div className="areaUploadAddInsuranceFame3">
                  <p>
                    อยากเขียนคำสั่งเสียด้วยมือตัวเองใช่ไหม?
                    เขียนเสร็จแล้วนำไฟล์เข้าคอมพิวเตอร์แล้วอัพโหลด
                  </p>
                  <p>(เป็นไฟล์ PDF หรือ JPG ขนาดไม่เกิน 1 mb)</p>
                </div>
                <button
                  className="buttonUploadAddInsuranceFame3"
                  // onClick={()=>updateList()}
                >
                  อัพโหลดเอกสาร
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="AddLegacyManagerFame2">
              <div className="rowAddLegacyManagerFame2">
                <button
                  className="boxAddLegacyManagerFame2_1"
                  onClick={() => setType(1)}
                >
                  <div className="iconAddLegacyManagerFame2_1" />
                  <p className="HTextAddLegacyManagerFame2">บันทึกสารณะ</p>
                </button>

                <button
                  className="boxAddLegacyManagerFame2"
                  onClick={() => setType(2)}
                >
                  <div className="iconAddLegacyManagerFame2_2" />
                  <p className="HTextAddLegacyManagerFame2">บันทึกระบุผู้รับ</p>
                </button>
              </div>
            </div>

            <div className="AddLegacyManagerFame2">
              <p className="HTextDBFame2">
                เพิ่มผู้รับบันทึกคำสั่งเสีย
              </p>
              <button className="AddOrderbuttonFrame7">
                <div className="iconDBbuttonplusFrame7" />
                <p className="TextDBbuttonFrame7">เพิ่มผู้รับบันทึกคำสั่งเสีย</p>
              </button>
            </div>
            <form>
              <div className="formAddInsuranceFame2_2">
                <label>
                  <p className="labelformAddOrder2">หัวข้อ</p>
                  <input
                    className="inputformAddInsuranceFame2_2"
                    defaultValue={""}
                    name="Agent"
                    placeholder={"หัวข้อจดหมายคำบอกกล่าวสุดท้าย"}
                  />
                </label>
              </div>

              <div className="formAddInsuranceFame2_2">
                <label>
                  <p className="labelformAddOrder2">คำบอกกล่าว</p>
                  <textarea
                    className="textareaformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="more"
                    maxlength="100"
                    placeholder={
                      "คำที่อยากบอกกล่าว เพื่อส่งถึงคนที่คนรักก่อนลาจาก"
                    }
                    style={{ marginRight: 130 }}
                  />
                </label>
              </div>

              <div className="formAddInsuranceFame2_2">
                <label>
                  <p className="labelformAddOrder2">โน๊ตเพิ่มเติม</p>
                  <textarea
                    className="textareaformAddInsuranceFame2_1"
                    defaultValue={""}
                    name="more"
                    maxlength="100"
                    placeholder={"โน๊ตเพิ่มเติม"}
                    style={{ marginRight: 130 }}
                  />
                </label>
              </div>

              <div className="InAddOrderFame3">
                <div className="HAddInsuranceFame3">
                  <div className="iconAddInsuranceFame3" />
                  <div className="HtextAddInsuranceFame3">
                    <p className="HTextDBFame2">อัพโหลดคำสั่งเสีย</p>
                    <p className="labelformAddOrder2">
                      จำนวนเอกสาร 3 ไฟล์
                    </p>
                  </div>
                </div>
                <div className="areaUploadAddInsuranceFame3">
                  <p>
                    อยากเขียนคำสั่งเสียด้วยมือตัวเองใช่ไหม?
                    เขียนเสร็จแล้วนำไฟล์เข้าคอมพิวเตอร์แล้วอัพโหลด
                  </p>
                  <p>(เป็นไฟล์ PDF หรือ JPG ขนาดไม่เกิน 1 mb)</p>
                </div>
                <button
                  className="buttonUploadAddInsuranceFame3"
                  // onClick={()=>updateList()}
                >
                  อัพโหลดเอกสาร
                </button>
              </div>
            </form>
          </>
        )}
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
export default AddOrder;
