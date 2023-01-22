import React from "react";
import Premium from "../../img/iconDashboard1.svg";
// import Dashboard1 from "../../img/Dashboard1.svg";
// import DashboardSearching from "../../img/DashboardSearching.svg";

// import { Auth } from "aws-amplify";
// import { Link } from "react-router-dom";
// import "./Login.css";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  // const width = window.innerWidth;
  const navigate = useNavigate();

  return (
    <div className="DB">
      <div className="DBFame1">
        <p className="HTextDBFame1">สวัสดี</p>
        <p className="HTextDBFame1_2">
          ยังไม่มีข้อมูลในระบบ มาเริ่มต้นทำบันทึกข้อมูลกัน
        </p>
      </div>

      <div className="DBFame2">
        <div className="BoxDBFame2">
          <img src={Premium} alt="Premium" />
          <div>
            <p className="HTextDBFame2">
              ปลดล็อคฟีเจอร์ง่ายๆแค่สมัคร เป็นPremium
            </p>
            <p className="HTextDBFame2_1">
              จ่ายเพียงครั้งเดียวหมดความกังวลตลอดชีวิต
              รองรับฟีเจอร์ใหม่ๆที่จะเกิดขึ้นในอนาคต
            </p>
          </div>
        </div>
        <div className="BoxDBFame2_button">
          <button>อัพเกรด Premium</button>
        </div>
      </div>

      <div className="DBFame3">
        <p className="HTextDBFame1">ร่างพินัยกรรมของคุณ</p>
        <div className="InDBFame3">
          <div className="InDBFame3_1">
            <div>
              <p className="HTextDBFame2">พินัยกรรม</p>
              <p>ยังไม่มีข้อมูลสำหรับแสดงผล</p>
            </div>
            <div className="BoxiconDB1Fame3">
              <div className="iconDB1" />
              <p>คุณยังไม่ได้ทำการใส่ข้อมูลเพื่อสร้างแผนพินัยกรรม</p>
            </div>
          </div>
          <div className="DBFame3BG" />
        </div>
      </div>

      <div className="DBFrame6">
        <div className="InDBFrame6">
          <div className="BoxDBFrame6">
            <p className="HBoxDBFrame6">ยังไม่มีการอัพเดท</p>
            <p className="HBoxDBFrame6_1">ข้อมูลส่วนตัว</p>
            <p className="HBoxDBFrame6_2">ระบุข้อมูลพื้นฐานส่วนบุคคล</p>
            <div className="iconDB01" />
            <div className="progress">
              <div className="progress-value"></div>
            </div>
            <div className="progresstext">
              <p className="progressP">Progress</p>
              <p className="p0">0%</p>
            </div>
            <button onClick={() => navigate("/AddPersonal")}>Add info</button>
          </div>

          <div className="BoxDBFrame6">
            <p className="HBoxDBFrame6">ยังไม่มีการอัพเดท</p>
            <p className="HBoxDBFrame6_1">ข้อมูลทรัพย์สิน</p>
            <p className="HBoxDBFrame6_2">ระบุสินทรัพย์แยกหมวดหมู่</p>
            <div className="iconDB02" />
            <div className="progress">
              <div className="progress-value"></div>
            </div>
            <div className="progresstext">
              <p className="progressP">Progress</p>
              <p className="p0">0%</p>
            </div>
            <button>Add info</button>
          </div>

          <div className="BoxDBFrame6" style={{ marginRight: 0 }}>
            <p className="HBoxDBFrame6">ยังไม่มีการอัพเดท</p>
            <p className="HBoxDBFrame6_1">สัตว์เลี้ยง</p>
            <p className="HBoxDBFrame6_2">ระบุข้อมูลสัตว์เลี้ยงแสนรัก</p>
            <div className="iconDB03" />
            <div className="progress">
              <div className="progress-value"></div>
            </div>
            <div className="progresstext">
              <p className="progressP">Progress</p>
              <p className="p0">0%</p>
            </div>
            <button>Add info</button>
          </div>
        </div>

        <div className="InDBFrame6">
          <div className="BoxDBFrame6">
            <p className="HBoxDBFrame6">ยังไม่มีการอัพเดท</p>
            <p className="HBoxDBFrame6_1">จัดงานศพ</p>
            <p className="HBoxDBFrame6_2">ระบุรูปแบบงานศพและความประสงค์</p>
            <div className="iconDB04" />
            <div className="progress">
              <div className="progress-value"></div>
            </div>
            <div className="progresstext">
              <p className="progressP">Progress</p>
              <p className="p0">0%</p>
            </div>
            <button onClick={() => navigate("/AddFuneral")}>Add info</button>
          </div>

          <div className="BoxDBFrame6">
            <p className="HBoxDBFrame6">ยังไม่มีการอัพเดท</p>
            <p className="HBoxDBFrame6_1">มอบหมายมรดก</p>
            <p className="HBoxDBFrame6_2">เลือกผู้ที่เหมาะสมจะดูแลมรดก</p>
            <div className="iconDB05" />
            <div className="progress">
              <div className="progress-value"></div>
            </div>
            <div className="progresstext">
              <p className="progressP">Progress</p>
              <p className="p0">0%</p>
            </div>
            <button onClick={()=>navigate("/AddAssignLeacy")}>Add info</button>
          </div>

          <div className="BoxDBFrame6" style={{ marginRight: 0 }}>
            <p className="HBoxDBFrame6">ยังไม่มีการอัพเดท</p>
            <p className="HBoxDBFrame6_1">ระบุผู้จัดการมรดก</p>
            <p className="HBoxDBFrame6_2">แต่งตั้งผู้จัดการที่คุณไว้วางใจ</p>
            <div className="iconDB06" />
            <div className="progress">
              <div className="progress-value"></div>
            </div>
            <div className="progresstext">
              <p className="progressP">Progress</p>
              <p className="p0">0%</p>
            </div>
            <button onClick={() => navigate("/AddLegacyManager")}>
              Add info
            </button>
          </div>
        </div>
       
        <>
          <div className="DBFrame7">
            <p className="HTextDBFame1">จดหมายร่างพินัยกรรม</p>
            <p className="HBoxDBFrame6_2">
              ปรินท์เอกสารพินัยกรรมที่อัพเดทมีลายเซ็นครบ
              ถ้วนอยู่เสมอและเก็บไว้ในตู้เซฟ
            </p>
            <div className="">
              <div className="InDBFrame7">
                <div className="DBFrame7BG" />
                <div className="InDBFame7_1">
                  <div className="iconDBFrame7_1" />
                  <div className="BoxDBTextFrame7">
                    <p className="HBoxDBFrame6">คุณยังไม่ได้ใส่ข้อมูล</p>
                    <p className="HBoxDBFrame6">
                      เพื่อทำการร่างจดหมายพินัยกรรมนี้ ใส่ข้อมูลต่างๆ
                      ในแผนพินัยกรรมเพื่อ ทำการร่างจดหมายฉบับนี้
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="DBFrame7">
            <p className="HTextDBFame1">ผู้รับมรดก</p>
            <div className="InDBFrame7">
              <div className="DBFrame8BG" />
              <div className="InDBFame7_1">
                <div className="iconDBFrame7_2" />
                <p className="HTextDBFame7">เพิ่มคนสำคัญ</p>
                <p className="HFrame7_2">ที่คุณอยากส่งต่อพินัยกรรมนี้</p>
                <button className="DBbuttonFrame7" onClick={() => navigate("/AddRecieverLeacy")}>
                  <div className="iconDBbuttonplusFrame7" />
                  <p className="TextDBbuttonFrame7">เพิ่มผู้รับมรดก</p>
                </button>
              </div>
            </div>
          </div>

          <div className="DBFrame7">
            <p className="HTextDBFame1">บันทึกคำสั่งเสีย</p>
            <div className="">
              <div className="InDBFrame7">
                <div className="DBFrame9BG" />
                <div className="InDBFame7_1">
                  <div className="iconDBFrame7_3" />
                  <p className="HTextDBFame7">เพิ่มคำบอกกล่าวสุดท้าย</p>
                  <p className="HFrame7_2">ถึงคนที่คุณรัก</p>
                  <button className="DBbuttonFrame7" onClick={()=>navigate("/AddOrder")}>
                    <div className="iconDBbuttonplusFrame7" />
                    <p className="TextDBbuttonFrame7">เพิ่มคำสั่งเสีย</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="DBFrame7">
            <p className="HTextDBFame1">เอกสารเพิ่มเติม</p>
            <div className="">
              <div className="InDBFrame7">
                <div className="DBFrame10BG" />
                <div className="InDBFame7_1">
                  <div className="iconDBFrame7_4" />
                  <p className="HTextDBFame7">เอกสารต่างๆที่ใช้ใน</p>
                  <p className="HFrame7_2">การประกอบการทำพินัยกรรม</p>
                  <p className="HBoxDBFrame6">
                    (เป็นไฟล์ PDF หรือ JPG ขนาดไม่เกิน 150kb)
                  </p>
                  <button className="DBbuttonFrame7" onClick={()=>navigate("/AddDocument")}>
                    <div className="iconDBbuttonplusFrame7" />
                    <p>อัพโหลดเอกสาร</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="DBFrame7">
            <p className="HTextDBFame1">ประกันชีวิตที่คุณถือไว้</p>
            <div className="">
              <div className="InDBFrame7">
                <div className="DBFrame11BG" />
                <div className="InDBFame7_1">
                  <div className="iconDBFrame7_5" />
                  <p className="HTextDBFame7">
                    เพิ่มข้อมูลประกันที่คุณทำเอาไว้
                  </p>
                  <p className="HFrame7_2">เพื่อบอกให้คนที่คุณรักทราบ</p>
                  <button
                    className="DBbuttonFrame7"
                    onClick={() => navigate("/AddInsurance")}
                  >
                    <div className="iconDBbuttonplusFrame7" />
                    <p>เพิ่มข้อมูลประกัน</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* )} */}
      </div>
    </div>
  );
};
export default Dashboard;
