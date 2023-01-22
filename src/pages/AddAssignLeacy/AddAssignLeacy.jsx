import React, { useState } from "react";

// import Select from "react-select";

import { useNavigate } from "react-router-dom";

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import "./AddAssignLeacy.css";

const AddAssignLeacy = () => {
  const navigate = useNavigate();
  //   const [type, setType] = useState(1);

  return (
    <div className="AddInsurance">
      <div className="AddInsuranceFame1">
        <p className="HTextAddInsuranceFame1">Dashboard </p>
        <p className="HTextAddInsuranceFame1_2">{">"}</p>
        <p className="HTextAddInsuranceFame1_2">มอบหมายทรัพย์สิน</p>
      </div>

      <div className="AddInsuranceFame2">
        <p className="HTextAddInsuranceFame2">มอบหมายทรัพย์สิน</p>

        <div className="InPersonalFame2">
          <div className="HAddPersonalFame2">
            <div className="HtextPersonalFame2">
              <p className="HTextDBFame2">มอบหมายมรดกแก่ผู้รับ</p>
              <p className="labelformAddOrder2">
                หลายคนเข้าใจผิดว่าผู้ที่จะมีสิทธิรับมรดกได้จะต้องมีสายเลือดเดียวกันเท่านั้นความจริงแล้วเราจะยกมรดกของ
                เราให้กับใครก็ได้ไม่ว่าจะเป็น เพื่อน หุ้นส่วน โรงเรียน บริษัท
                หรือมูลนิธิต่าง ๆ
              </p>
            </div>
            <div className="iconPersonalFame2" />
          </div>
        </div>

        <div className="AddAssignLeacyFame2">
          <p className="HTextDBFame2">ทรัพย์สินประเภทบ้านและสิ่งปลูกสร้าง</p>
          <div className="rowAddLegacyManagerFame2">
            <div className="boxAddAssignLeacyFame2_1">
              <div className="InboxAddAssignLeacyFame2_1">
                <div className="iconAddAssignLeacyame2_1" />
                <div className="textboxAddAssignLeacyFame2_1">
                  <p className="HTextAddLegacyManagerFame2">บ้านพระนครริมน้ำ</p>
                  <p className="labelformAddRecieverLeacy2">บ้านพักตากอากาศ</p>
                </div>
              </div>
              <div className="InboxAddAssignLeacyFame2_2">
                <p className="labelformAddAssignLeacy2">รายละเอียด</p>
                <p className="labelformAddAssignLeacy2_1">
                  ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81
                </p>
                <p className="labelformAddAssignLeacy2">มูลค่า</p>
                <p className="labelformAddAssignLeacy2_1">7.5 ล้านบาท</p>
              </div>
              <button className="buttonAddAssignLeacy">เพิ่มข้อมูล</button>
            </div>

            <div className="boxAddAssignLeacyFame2_1">
              <div className="InboxAddAssignLeacyFame2_1">
                <div className="iconAddAssignLeacyame2_1" />
                <div className="textboxAddAssignLeacyFame2_1">
                  <p className="HTextAddLegacyManagerFame2">บ้านพระนครริมน้ำ</p>
                  <p className="labelformAddRecieverLeacy2">บ้านพักตากอากาศ</p>
                </div>
              </div>
              <div className="InboxAddAssignLeacyFame2_2">
                <p className="labelformAddAssignLeacy2">รายละเอียด</p>
                <p className="labelformAddAssignLeacy2_1">
                  ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81
                </p>
                <p className="labelformAddAssignLeacy2">มูลค่า</p>
                <p className="labelformAddAssignLeacy2_1">7.5 ล้านบาท</p>
              </div>
              <button className="buttonAddAssignLeacy">เพิ่มข้อมูล</button>
            </div>

            <div className="boxAddAssignLeacyFame2_1">
              <div className="InboxAddAssignLeacyFame2_1">
                <div className="iconAddAssignLeacyame2_1" />
                <div className="textboxAddAssignLeacyFame2_1">
                  <p className="HTextAddLegacyManagerFame2">บ้านพระนครริมน้ำ</p>
                  <p className="labelformAddRecieverLeacy2">บ้านพักตากอากาศ</p>
                </div>
              </div>
              <div className="InboxAddAssignLeacyFame2_2">
                <p className="labelformAddAssignLeacy2">รายละเอียด</p>
                <p className="labelformAddAssignLeacy2_1">
                  ถาระติดผัน เช่น ผ่อนกับธนาคาร XYZ 30ปีจะสิ้นสุดใน กพ. 81
                </p>
                <p className="labelformAddAssignLeacy2">มูลค่า</p>
                <p className="labelformAddAssignLeacy2_1">7.5 ล้านบาท</p>
              </div>
              <button className="buttonAddAssignLeacy">เพิ่มข้อมูล</button>
            </div>
          </div>
        </div>

        <div className="AddAssignLeacyFame2">
          <p className="HTextDBFame2">
            เพิ่มข้อมูลทรัพย์สินประเภทบัญชีเงินฝากธนาคาร
          </p>
          <div className="rowAddLegacyManagerFame2">
            <div className="boxAddAssignLeacyFame2_1">
              <div className="InboxAddAssignLeacyFame2_1">
                <div className="iconAddAssignLeacyame2_2" />
                <div className="textboxAddAssignLeacyFame2_2">
                  <p className="HTextAddLegacyManagerFame2">
                    บัญชีเงินเก็บเกษียณ
                  </p>
                  <p className="labelformAddRecieverLeacy2">
                    บัญชีออมทรัพย์ ธนาคารกสิกรไทย
                  </p>
                </div>
              </div>
              <div className="InboxAddAssignLeacyFame2_2">
                <p className="labelformAddAssignLeacy2">มูลค่า</p>
                <p className="labelformAddAssignLeacy2_1">1 ล้านบาท</p>
                <p className="labelformAddAssignLeacy2">คำอธิบายเพิ่มเติม</p>
                <p className="labelformAddAssignLeacy2_1">
                  บัญชีเงินฝากที่ทำไว้ตั้งแต่หนุ่ม
                  เอาไว้ให้เป็นเงินทุนสำหรับครอบครัว
                </p>
              </div>
              <button className="buttonAddAssignLeacy">เพิ่มข้อมูล</button>
            </div>

            <div className="boxAddAssignLeacyFame2_1">
              <div className="InboxAddAssignLeacyFame2_1">
                <div className="iconAddAssignLeacyame2_2" />
                <div className="textboxAddAssignLeacyFame2_2">
                  <p className="HTextAddLegacyManagerFame2">
                    บัญชีเงินเก็บเกษียณ
                  </p>
                  <p className="labelformAddRecieverLeacy2">
                  บัญชีกระแสรายวัน ธนาคารกรุงไทย
                  </p>
                </div>
              </div>
              <div className="InboxAddAssignLeacyFame2_2">
                <p className="labelformAddAssignLeacy2">มูลค่า</p>
                <p className="labelformAddAssignLeacy2_1">1 ล้านบาท</p>
                <p className="labelformAddAssignLeacy2">คำอธิบายเพิ่มเติม</p>
                <p className="labelformAddAssignLeacy2_1">
                  บัญชีเงินฝากที่ทำไว้ตั้งแต่หนุ่ม
                  เอาไว้ให้เป็นเงินทุนสำหรับครอบครัว
                </p>
              </div>
              <button className="buttonAddAssignLeacy">เพิ่มข้อมูล</button>
            </div>
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
export default AddAssignLeacy;
