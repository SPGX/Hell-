/* eslint-disable jsx-a11y/alt-text */

import React, { useRef, useState } from "react";

import personal_finance from "../../img/icon2_1.svg";
import limpitsouniny from "../../img/icon2_2.svg";
import undraw from "../../img/icon2_3.svg";
import medicine from "../../img/icon2_4.svg";
import digital from "../../img/icon2_5.svg";
import insurance from "../../img/icon4_1.png";
import insurance2 from "../../img/icon4_2.png";
import correspondent from "../../img/icon4_3.png";
import profile from "../../img/profile1.svg";
import BGHome7 from "../../img/BGHome7_1.svg";
import BGHome7_2 from "../../img/BGHome7_2.svg";
import BGHome7_3 from "../../img/BGHome7_3.svg";
import BGHome7_4 from "../../img/BGHome7_4.svg";
import icon2 from "../../img/logo2.svg";
import Awards from "../../img/Awards.svg";
// import Logo from "../../img/logo.svg";

import { BsCheckCircle, BsYoutube, BsFacebook } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const formEl = useRef();
  const navigate = useNavigate();
  const counterRef = useRef(0);
  const width = window.innerWidth;
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    counterRef.current += 1;
    if (counterRef.current !== "") {
      const formInputs = [...formEl.current.elements].filter(
        (element) => element.type === "text"
      );
      const newSubmitted = formInputs.reduce(
        (acc, input) => {
          return {
            ...acc,
            [input.name]: input.value,
          };
        },
        { number: counterRef.current }
      );
      setSubmitted(() => [newSubmitted]);
      console.log(submitted);
    }
  };

  const goToRegister = () => {
    navigate("/Register");
  };
  const goTosocial = (x) => {
    if (x === 1) {
      window.open("https://www.youtube.com/channel/UCnRqQ0E8R_Ue-R6okznxKvA");
    } else if (x === 2) {
      window.open("https://www.facebook.com/alRIGHTs.co");
    } else {
      window.open("https://lin.ee/X3R4QM8");
    }
  };

  const Free = [
    "ลงบันทึกและสรุปสินทรัพย์",
    "ทําพินัยกรรมแบบพื้นฐานได้",
    "คําสั่งเสียและรูปแบบงานศพ",
    "ระบุสินทรัพย์ได้ 10 ชิ้น",
    "ระบผู้รับมรดกได้ 3 คน",
    "พื้นที่การเก็บข้อมูล 50 MB",
  ];

  const Premium = [
    "ครอบคลุมทุกฟีเจอร์ใช้งานใน ปัจจุบันและอนาคต",
    "มั่นใจว่าบัญชีจะไม่สูญหาย",
    "ไม่จํากัดสินทรัพย์บันทึก",
    "ไม่จํากัดข้อความสั่งเสีย",
    "มีทนายจัดทำเอกสารและตรวจสอบ",
    "พื้นที่การเก็บข้อมูล 10 GB",
  ];

  const items = [
    <div className="Carousel">
      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>

      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>

      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>
    </div>,

    <div className="Carousel">
      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>

      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>

      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>
    </div>,

    <div className="Carousel">
      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>

      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>

      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        <img src={profile} alt="profile" />
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>
    </div>,
  ];

  const items_1 = [
    <div className="Carousel">
      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        {/* <img src={profile} alt="profile" /> */}
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>
    </div>,

    <div className="Carousel">
      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        {/* <img src={profile} alt="profile" /> */}
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>
    </div>,

    <div className="Carousel">
      <div className="Boxcomment">
        <p className="TextBoxcomment">“บริการดี ใช้ง่าย”</p>
        <p className="TextBoxcomment2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          venenatis felis, eget imperdiet leo. Praesent sodales diam id.
        </p>
        {/* <img src={profile} alt="profile" /> */}
        <p className="NameBoxcomment">Ms. Natalie Portman</p>
        <p className="DateBoxcomment">12/06/2022</p>
      </div>
    </div>,
  ];

  const items01 = [
    <div className="InFrame1">
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">สร้างแผนจำลอง</p>
        <div className="BoxText1">
          <p className="TextInFrame1_2">ส่งมอบมรดก</p>
        </div>
        <p className="TextInFrame1_1_2">
          รวบรวมข้อมูลและจัดแผนแบ่งมรดกไว้ก่อน เพื่อป้องกันเรื่องไม่คาดฝัน
        </p>
        <button onClick={() => goToRegister()}>สร้างแผนพินัยกรรม</button>
      </div>
      <div className="InFrame1_2" />
    </div>,

    <div className="InFrame1">
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">อยู่ให้สุข </p>
        <div className="BoxText1">
          <p className="TextInFrame1_2">จากให้จดจำ</p>
        </div>
        <p className="TextInFrame1_1_2">
          บันทึกพินัยกรรม คำสั่งเสีย บอกกล่าวให้คนรักได้ทำ ตามความประสงค์
          สุดท้ายของคุณ
        </p>
        <button onClick={() => goToRegister()}>สร้างแผนพินัยกรรม</button>
      </div>
      <div className="InFrame1_3" />
    </div>,

    <div className="InFrame1">
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">หลังจาก</p>
        <div className="BoxText1">
          <p className="TextInFrame1_2">วาระสุดท้าย</p>
        </div>
        <p className="TextInFrame1_1">จะเกิดอะไรขึ้น?</p>
        <p className="TextInFrame1_1_2">
          ลองใช้เครื่องมือบันทึกของเราช่วยคุณดูสิ
        </p>
        <button onClick={() => goToRegister()}>สร้างแผนพินัยกรรม</button>
      </div>
      <div className="InFrame1_4" />
    </div>,
  ];

  const items02 = [
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="InFrame3">
        <div className="BoxFrame3">
          <div className="InFrame3_1" />
        </div>
        <div className="InFrame3_1_2">
          <div className="icon3_1" />
          <p className="TextInFrame3_1">
            บันทึกสรุปสินทรัพย์ ทำพินัยกรรมพื้นฐาน
          </p>
        </div>
      </div>
      <div className="InFrame3">
        <div className="BoxFrame3">
          <div className="InFrame3_2" />
        </div>
        <div className="InFrame3_1_2">
          <div className="icon3_2" />
          <p className="TextInFrame3_1">
            ส่งต่อสัตว์เลี้ยงแสนรักให้ผู้ดูแลหลังจากไป
          </p>
        </div>
      </div>
    </div>,

    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="InFrame3">
        <div className="BoxFrame3">
          <div className="InFrame3_2" />
        </div>
        <div className="InFrame3_1_2">
          <div className="icon3_2" />
          <p className="TextInFrame3_1">
            ส่งต่อสัตว์เลี้ยงแสนรักให้ผู้ดูแลหลังจากไป
          </p>
        </div>
      </div>
      <div className="InFrame3">
        <div className="BoxFrame3">
          <div className="InFrame3_3" />
        </div>
        <div className="InFrame3_1_2">
          <div className="icon3_3" />
          <p className="TextInFrame3_1">
            จัดเก็บเอกสารสำคัญต่างๆ ในชีวิตไว้ในที่เดียว
          </p>
        </div>
      </div>
    </div>,

    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="InFrame3">
        <div className="BoxFrame3">
          <div className="InFrame3_3" />
        </div>
        <div className="InFrame3_1_2">
          <div className="icon3_3" />
          <p className="TextInFrame3_1">
            จัดเก็บเอกสารสำคัญต่างๆ ในชีวิตไว้ในที่เดียว
          </p>
        </div>
      </div>
      <div className="InFrame3">
        <div className="BoxFrame3">
          <div className="InFrame3_4" />
        </div>
        <div className="InFrame3_1_2">
          <div className="icon3_4" />
          <p className="TextInFrame3_1">ปรึกษาทนายความเพื่อ อำนวยความสะดวก</p>
        </div>
      </div>
    </div>,
  ];

  const items03 = [
    <div className="InFrame1">
      <div className="InFrame1_2" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">หลังจากวาระสุดท้าย จะเกิดอะไรขึ้น</p>
        <p className="TextInFrame1_1_2">
          การจากลาไม่ควรเป็นภาระ ลองใช้เครื่องมือบันทึก ของเราช่วยคุณดูสิ
        </p>
      </div>
    </div>,

    <div className="InFrame1">
      <div className="InFrame1_3" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">อยู่ให้สุข จากให้จดจำ </p>
        <p className="TextInFrame1_1_2">
          บันทึกพินัยกรรม คำสั่งเสีย บอกกล่าวให้คนรักได้ทำ ตามความประสงค์
          สุดท้ายของคุณ
        </p>
      </div>
    </div>,

    <div className="InFrame1">
      <div className="InFrame1_4" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">ส่งมอบสินทรัพย์มรดกให้ถูกต้องชอบธรรม</p>
        <p className="TextInFrame1_1_2">
          รวบรวมข้อมูลและจัดการ แบ่งมรดกไว้ก่อน เพื่อป้องกันเรื่องไม่คาดฝัน
        </p>
      </div>
    </div>,
  ];

  const items04 = [
    <div className="InFrame1">
      <div className="InFrame3_1" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">บันทึกสรุปสินทรัพย์ เพื่อทำพินัยกรรม</p>
        <p className="TextInFrame1_1_2">
          Lörem ipsum dire pror erad krod salig serade. Venagt vidaska
        </p>
      </div>
    </div>,

    <div className="InFrame1">
      <div className="InFrame3_2" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">ส่งต่อสัตว์แสนรักให้ผู้ดูแล</p>
        <p className="TextInFrame1_1_2">
          Lörem ipsum dire pror erad krod salig serade. Venagt vidaska
        </p>
      </div>
    </div>,

    <div className="InFrame1">
      <div className="InFrame3_3" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">จัดเก็บเอกสารสำคัญในชีวิต </p>
        <p className="TextInFrame1_1_2">
          Lörem ipsum dire pror erad krod salig serade. Venagt vidaska
        </p>
      </div>
    </div>,

    <div className="InFrame1">
      <div className="InFrame3_4" />
      <div className="InFrame1_1">
        <p className="TextInFrame1_1">ปรึกษาทนายความเพื่อ อำนวยความสะดวก </p>
        <p className="TextInFrame1_1_2">
          Lörem ipsum dire pror erad krod salig serade. Venagt vidaska
        </p>
      </div>
    </div>,
  ];
  const items05 = [
    <div className="Packages">
      <div className="BoxFrame4">
        <div className="BoxImgFrame4">
          {/* <img src={insurance} alt="insurance" /> */}
        </div>
        <div className="BoxTextFrame4">
          <p className="HBoxFrame4">Free ID</p>
          <p className="HBoxFrame4_1">Worry-Free Life</p>
          <p className="HBoxFrame4_2">ใช้ฟรีตลอดไป</p>
          {Free.map((free) => (
            <div className="InBoxFrame4" key={free}>
              <BsCheckCircle className="Check" />
              <p>{free}</p>
            </div>
          ))}
          <button className="bttonFrame4" onClick={() => goToRegister()}>
            Get Free
          </button>
        </div>
      </div>
    </div>,

    <div className="Packages">
      <div className="BoxFrame4">
        <div className="BoxImgFrame4">
          {/* <img src={insurance2} alt="insurance2" /> */}
        </div>
        <div className="BoxTextFrame4">
          <p className="HBoxFrame4">Premium ID</p>
          <p className="HBoxFrame4_1">Everything will be Alright</p>
          <div className="HBoxFrame4_2In">
            <p className="HBoxFrame4_4">4,500 บาท</p>
            <p className="HBoxFrame4_3">จ่ายครั้งเดียวใช้ได้ตลอดชีวิต</p>
          </div>

          {Premium.map((Premium) => (
            <div className="InBoxFrame4" key={Premium}>
              <BsCheckCircle className="Check" />
              <p>{Premium}</p>
            </div>
          ))}
          <button className="bttonFrame4_2" onClick={() => goToRegister()}>
            Get Premium
          </button>
        </div>
      </div>
    </div>,

    <div className="Packages">
      <div className="BoxFrame4">
        <div className="BoxImgFrame4">
          {/* <img src={correspondent} alt="insurance3" className="ImgPackages3" /> */}
        </div>
        <div className="BoxTextFrame4">
          <p className="HBoxFrame4">Online Attorney</p>
          <p className="HBoxFrame4_1">ปรึกษาทนายความออนไลน์</p>
          <div className="HBoxFrame4_2In2">
            <p className="HBoxFrame4_4">1,000 บาท</p>
            <p className="HBoxFrame4_3">ระยะเวลา 30 นาที</p>
          </div>

          <div className="InBoxFrame4">
            <p>
              เมื่อคุณมีความไม่แน่ใจในร่างพินัยกรรมที่คุณกรอกให้ทนายความของเราช่วย
              ให้คําปรึกษาและแก้พินัยกรรม ให้เหมาะสมได้
            </p>
          </div>

          <button className="bttonFrame4_3" onClick={() => goToRegister()}>
            นัดหมาย
          </button>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="Home">
      <div className="Frame1">
        {width <= 500 ? (
          <AliceCarousel
            mouseTracking
            items={items03}
            disableButtonsControls
            autoPlay={false}
            disableDotsControls
            autoPlayInterval={5000}
            infinite
          />
        ) : (
          <AliceCarousel
            mouseTracking
            items={items01}
            disableButtonsControls
            autoPlay={false}
            disableDotsControls
            autoPlayInterval={5000}
            infinite
          />
        )}
      </div>

      <div className="Frame2">
        <div className="boxFrame2">
          <p className="HFrame2">เราจะช่วยอะไรคุณได้บ้าง?</p>
          {width <= 640 ? (
            <>
              <div className="InboxFrame2">
                <>
                  <div className="BGimgFrame2">
                    {/* <img
                      // src={personal_finance}
                      alt="personal_finance"
                      className="imgFrame2"
                    /> */}
                    <div className="TextFrame2">
                      <p className="HTextFrame2">สินทรัพย์</p>
                      <p className="TextDFrame2">
                        จัดหมวดหมู่ประเภทสินทรัพย์ของคุณ
                        ให้สะดวกในการตรวจสอบและประเมิน
                        ความมั่งคั่งได้วางแผนให้การส่งต่อ ทรัพย์สิน
                        ต้ังแต่วันนี้ เพื่อตวามสบายใจในวันข้างหน้า
                      </p>
                    </div>
                  </div>
                </>
                <>
                  <div className="BGimgFrame2">
                    {/* <img
                      // src={limpitsouniny}
                      alt="limpitsouniny"
                      className="imgFrame2"
                    /> */}
                    <div className="TextFrame2">
                      <p className="HTextFrame2">กฏหมาย</p>
                      <p className="TextDFrame2">
                        ออกแบบพินัยกรรมที่ถูกต้องตามกฏหมายปลอดภัย
                        และสะดวกสบายในการปรับแก้ไขได้ตลอดช่วงชีวิต ของคุณ
                      </p>
                    </div>
                  </div>
                </>
              </div>

              <div className="InboxFrame2">
                <>
                  <div className="BGimgFrame2">
                    {/* <img src={undraw} alt="undraw" className="imgFrame2" /> */}
                    <div className="TextFrame2">
                      <p className="HTextFrame2">พิธีการงานศพ</p>
                      <p className="TextDFrame2">
                        คำขอสุดท้ายเพื่อเป็นเกียรติแก่ตัวคุณ
                        แจ้งความประสงค์ให้ผู้จัดการงานได้
                        แสดงความรักให้กับคุณอย่างเหมาะสม
                      </p>
                    </div>
                  </div>
                </>

                <>
                  <div className="BGimgFrame2">
                    {/* <img src={medicine} alt="medicine" className="imgFrame2" /> */}
                    <div className="TextFrame2">
                      <p className="Future">Future</p>
                      <p className="HTextFrame2">ข้อมูลสุขภาพจําเป็น</p>
                      <p className="TextDFrame2">
                        กรอกข้อมูลสุขภาพที่จําเป็นต้องรู้ ระบุโรค
                        ยาและแพทย์ที่ทําการรักษาให้ผู้ดูแลคุณได ้ทราบและสื่อสาร
                        กับแพทย์ได้ถูกต้อง
                      </p>
                    </div>
                  </div>
                </>
              </div>

              <div className="InboxFrame2">
                <>
                  <div className="BGimgFrame2">
                    {/* <img src={digital} alt="digital" className="imgFrame2" /> */}
                    <div className="TextFrame2">
                      <p className="Future">Future</p>
                      <p className="HTextFrame2">ดิจิตอลฟุตปริ้น</p>
                      <p className="TextDFrame2">
                        แจ้งความประสงค์ในการจัดการกับ ไอดี ต่างๆของคุณบนออนไลน์
                        เลือกที่จะเก็บ ส่งต่อและทำลายได้
                      </p>
                    </div>
                  </div>
                </>
              </div>
            </>
          ) : (
            <>
              <div className="InboxFrame2">
                <>
                  <div className="BGimgFrame2">
                    <img
                      src={personal_finance}
                      alt="personal_finance"
                      className="imgFrame2"
                    />
                  </div>
                  <div className="TextFrame2">
                    <p className="HTextFrame2">สินทรัพย์</p>
                    <p className="TextDFrame2">
                      จัดหมวดหมู่ประเภทสินทรัพย์ของคุณ
                      ให้สะดวกในการตรวจสอบและประเมิน
                      ความมั่งคั่งได้วางแผนให้การส่งต่อ ทรัพย์สิน ต้ังแต่วันนี้
                      เพื่อตวามสบายใจในวันข้างหน้า
                    </p>
                  </div>
                </>
                <>
                  <div className="BGimgFrame2_2">
                    <img
                      src={limpitsouniny}
                      alt="limpitsouniny"
                      className="imgFrame2"
                    />
                  </div>
                  <div className="TextFrame2">
                    <p className="HTextFrame2">กฏหมาย</p>
                    <p className="TextDFrame2">
                      ออกแบบพินัยกรรมที่ถูกต้องตามกฏหมายปลอดภัย
                      และสะดวกสบายในการปรับแก้ไขได้ตลอดช่วงชีวิต ของคุณ
                    </p>
                  </div>
                </>
              </div>

              <div className="InboxFrame2">
                <>
                  <div className="BGimgFrame2">
                    <img src={undraw} alt="undraw" className="imgFrame2" />
                  </div>
                  <div className="TextFrame2">
                    <p className="HTextFrame2">พิธีการงานศพ</p>
                    <p className="TextDFrame2">
                      คำขอสุดท้ายเพื่อเป็นเกียรติแก่ตัวคุณ
                      แจ้งความประสงค์ให้ผู้จัดการงานได้
                      แสดงความรักให้กับคุณอย่างเหมาะสม
                    </p>
                  </div>
                </>

                <>
                  <div className="BGimgFrame2_2">
                    <img src={medicine} alt="medicine" className="imgFrame2" />
                  </div>
                  <div className="TextFrame2">
                    <div className="Frame2Future" style={{ opacity: "30%" }}>
                      <p>Future</p>
                    </div>
                    <p className="HTextFrame2">ข้อมูลสุขภาพจําเป็น</p>
                    <p className="TextDFrame2">
                      กรอกข้อมูลสุขภาพที่จําเป็นต้องรู้ ระบุโรค
                      ยาและแพทย์ที่ทําการรักษาให้ผู้ดูแลคุณได ้ทราบและสื่อสาร
                      กับแพทย์ได้ถูกต้อง
                    </p>
                  </div>
                </>
              </div>

              <div className="InboxFrame2">
                <>
                  <div className="BGimgFrame2">
                    <img src={digital} alt="digital" className="imgFrame2" />
                  </div>
                  <div className="TextFrame2">
                    <div className="Frame2Future">
                      <p>Future</p>
                    </div>

                    <p className="HTextFrame2">ดิจิตอลฟุตปริ้น</p>
                    <p className="TextDFrame2">
                      แจ้งความประสงค์ในการจัดการกับ ไอดี ต่างๆของคุณบนออนไลน์
                      เลือกที่จะเก็บ ส่งต่อและทำลายได้
                    </p>
                  </div>
                </>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="Frame3">
        <>
          <p className="HTextFrame3">Key Features</p>
          {width <= 500 ? (
            <AliceCarousel
              mouseTracking
              items={items04}
              disableButtonsControls
              autoPlay={true}
              disableDotsControls
              autoPlayInterval={5000}
              infinite
            />
          ) : (
            <AliceCarousel
              mouseTracking
              items={items02}
              disableButtonsControls
              autoPlay={false}
              // disableDotsControls
              autoPlayInterval={5000}
              infinite
            />
          )}
        </>
      </div>

      <div className="Frame4">
        <p className="HFrame4">Packages</p>

        <p className="HFrame4_1">
          เริ่มต้นใช้บริการได้ฟรี! ไม่มีค่าใช้จ่ายใดๆ
          หากพึงพอใจต้องการฟีเจอร์ที่มากกว่าสมัคร Premium
        </p>

        <div className="ProPackages">
          {width <= 912 ? (
            <AliceCarousel
              mouseTracking
              items={items05}
              disableButtonsControls
              // autoPlay={true}
              disableDotsControls
              autoPlayInterval={5000}
              // infinite
            />
          ) : (
            <>
              <div className="Packages">
                <div className="BoxFrame4">
                  <div className="BoxImgFrame4">
                    <img src={insurance} alt="insurance" />
                  </div>
                  <div className="BoxTextFrame4">
                    <p className="HBoxFrame4">Free ID</p>
                    <p className="HBoxFrame4_1">Worry-Free Life</p>
                    <div className="HBoxFrame4_2">
                      <p>ใช้ฟรีตลอดไป</p>
                    </div>
                    {Free.map((free) => (
                      <div className="InBoxFrame4" key={free}>
                        <BsCheckCircle className="Check" />
                        <p>{free}</p>
                      </div>
                    ))}
                    <button
                      className="bttonFrame4"
                      onClick={() => goToRegister()}
                    >
                      Get Free
                    </button>
                  </div>
                </div>
              </div>

              <div className="Packages">
                <div className="BoxFrame4">
                  <div className="BoxImgFrame4">
                    <img src={insurance2} alt="insurance2" />
                  </div>
                  <div className="BoxTextFrame4">
                    <p className="HBoxFrame4">Premium ID</p>
                    <p className="HBoxFrame4_1">Everything will be Alright</p>
                    <div className="HBoxFrame4_2In">
                      <p className="HBoxFrame4_4">4,500 บาท</p>
                      <p className="HBoxFrame4_3">
                        จ่ายครั้งเดียวใช้ได้ตลอดชีวิต
                      </p>
                    </div>

                    {Premium.map((Premium) => (
                      <div className="InBoxFrame4" key={Premium}>
                        <BsCheckCircle className="Check" />
                        <p>{Premium}</p>
                      </div>
                    ))}
                    <button
                      className="bttonFrame4_2"
                      onClick={() => goToRegister()}
                    >
                      Get Premium
                    </button>
                  </div>
                </div>
              </div>

              <div className="Packages">
                <div className="BoxFrame4">
                  <div className="BoxImgFrame4">
                    <img
                      src={correspondent}
                      alt="insurance3"
                      className="ImgPackages3"
                    />
                  </div>
                  <div className="BoxTextFrame4">
                    <p className="HBoxFrame4">Online Attorney</p>
                    <p className="HBoxFrame4_1">ปรึกษาทนายความออนไลน์</p>
                    <div className="HBoxFrame4_2In2">
                      <p className="HBoxFrame4_4">1,000 บาท</p>
                      <p className="HBoxFrame4_3">ระยะเวลา 30 นาที</p>
                    </div>

                    <div className="InBoxFrame4">
                      <p>
                        เมื่อคุณมีความไม่แน่ใจในร่างพินัยกรรมที่คุณกรอกให้ทนายความของเราช่วย
                        ให้คําปรึกษาและแก้พินัยกรรม ให้เหมาะสมได้
                      </p>
                    </div>

                    <button
                      className="bttonFrame4_3"
                      onClick={() => goToRegister()}
                    >
                      นัดหมาย
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="Frame5">
        <div className="imgFrame5">
          <div className="InFrame5">
            <div className="BoxHInFrame5">
              <p className="HFrame5">ต้องการคำปรึกษา จากทนายของเรา</p>
              <p className="HFrame5_2">
                ไว้วางใจในทนายมืออาชีพที่มีประสบการณ์จัดการมรดกมากว่า 10 ปี
                พร้อมให้คำปรึกษาคุณ
              </p>
              <button className="bttonFrame5" onClick={() => goToRegister()}>
                ปรึกษาทนาย
              </button>
              <div className="InFrame5_1" />
              <p className="HFrame5_3">รีวิวจากผู้ใช้งาน</p>

              {width <= 820 ? (
                <AliceCarousel
                  mouseTracking
                  items={items_1}
                  disableButtonsControls
                />
              ) : (
                <AliceCarousel
                  mouseTracking
                  items={items}
                  disableButtonsControls
                />
              )}
            </div>
            <div className="Frame6">
              <p className="BoxHFrame6">ติดตามเรา</p>
              <p className="HFrame6">กดบอกรับข้อมูลข่าวสารที่เป็นประโยชน์</p>
              <form ref={formEl} onSubmit={handleSubmit}>
                <input
                  id="name-input"
                  name="name"
                  placeholder="Your Email"
                  className="inputFrame6"
                />
                <button type="submit" className="bttonFrame6">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="Frame7_1">
              <div className="HTextFrame7_1">
                <p className="BoxHFrame6">บทความ</p>
                <p className="HFrame6">
                  แหล่งรวมสาระข้อมูลบทความที่เป็นประโยชน์​กับการวางแผนส่งต่อสินทรัพย์และจัดการมรดก
                </p>
              </div>

              <div className="contentFrame7_1">
                <div className="rowcontentFrame7_1">
                  <div className="BoxcontentFrame7_1">
                    <img src={BGHome7} alt="BGHome7_1" className="BGHome7" />
                    <p>How to Find the Best Life Insurance Policy Companies</p>
                    <div className="BoxHcontentFrame7_1">
                      <div className="BoxHFrame7_1">
                        <p>Healthy Life</p>
                      </div>
                      <div className="BoxHFrame7_1">
                        <p>Will Trust</p>
                      </div>
                    </div>
                  </div>
                  <div className="BoxcontentFrame7_1">
                    <img src={BGHome7_2} alt="BGHome7_2" className="BGHome7" />
                    <p>How to Find the Best Life Insurance Policy Companies</p>
                    <div className="BoxHcontentFrame7_1">
                      <div className="BoxHFrame7_1">
                        <p>Healthy Life</p>
                      </div>
                      <div className="BoxHFrame7_1">
                        <p>Will Trust</p>
                      </div>
                      <div className="BoxHFrame7_1">
                        <p>Insurance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rowcontentFrame7_1">
                  <div className="BoxcontentFrame7_1">
                    <img src={BGHome7_3} alt="BGHome7_3" className="BGHome7" />
                    <p>How to Find the Best Life Insurance Policy Companies</p>
                    <div className="BoxHcontentFrame7_1">
                      <div className="BoxHFrame7_1">
                        <p>Healthy Life</p>
                      </div>
                      <div className="BoxHFrame7_1">
                        <p>Will Trust</p>
                      </div>
                    </div>
                  </div>
                  <div className="BoxcontentFrame7_1">
                    <img src={BGHome7_4} alt="BGHome7_4" className="BGHome7" />
                    <p>How to Find the Best Life Insurance Policy Companies</p>
                    <div className="BoxHcontentFrame7_1">
                      <div className="BoxHFrame7_1">
                        <p>Healthy Life</p>
                      </div>
                      <div className="BoxHFrame7_1">
                        <p>Will Trust</p>
                      </div>
                      <div className="BoxHFrame7_1">
                        <p>Insurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hrFrame7_1" />
            </div>

            <div className="Frame7">
              <div className="BoxFrame7">
                <p className="HFrame7_1">About us</p>
                <p className="">
                  เราทุกคน..ซักวันก็คงต้องลาจากโลกนี้ไปช่วงเวลาของการส่งต่อความรัก
                  เรื่องราวและทรัพย์สินให้กับคนที่คุณรักควรจะเรียบง่ายและผ่อนคลายalRIGHTs.
                  จึงสร้างเครื่องมือที่ช่วยจดจำ และจัดการสำหรับคนไทยโดยเฉพาะ
                  เพื่อให้การจากลามีแต่ความทรงจำที่ดีๆ
                </p>
              </div>
            </div>

            <div className="Frame8">
              <div className="BoxFrame8">
                <div>
                  <img src={icon2} alt="icon2" />
                  <br />
                  <button onClick={() => goToRegister()}>
                    สร้างแผนพินัยกรรม
                  </button>
                </div>
                <div>
                  <img src={Awards} alt="Awards" id="awards" />
                  <img src={Awards} alt="Awards2" id="awards" />
                </div>
              </div>
              <hr className="hrBoxFrame8" />
              <div className="BoxFrame8_2">
                <p>Follow Us on</p>
                <div onClick={() => goTosocial(1)}>
                  <BsYoutube id="BoxFrame8_2" />
                </div>
                <div onClick={() => goTosocial(2)}>
                  <BsFacebook id="BoxFrame8_2" />
                </div>
              </div>
            </div>

            <div className="Frame9">
              <p>©Copyright Alrights 2022</p>
            </div>

            <div className="Frame10">
              <div className="BoxtextFrame10">
                <p>
                  เว็บไซต์มีการจัดเก็บข้อมูลจากเบราว์เซอร์ของคุณในรูปแบบคุกกี้เพื่อมอบประสบการณ์การ
                  ใช้งานที่ดียิ่งขึ้นให้แก่คุณอ่านรายละเอียดการใช้คุกกี้ตาม
                </p>
                <p style={{ color: "#F9A826", padding: "0px 10px 0px 10px" }}>
                  นโยบายความเป็นส่วนตัว
                </p>
                <p>ของเราได้ที่นี่</p>
              </div>
              <div>
                <div className="ButtonF10">
                  <button className="ButtonFrame10">ยอมรับ</button>
                  <button className="ButtonFrame10_2">ปฏิเสธ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
