import React, { useState } from "react";
import { IconButton, Box, Alert, Collapse } from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

// import { Auth } from "aws-amplify";
import ForgetPasswork from "../../img/iconforgetpassword.svg";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = (props) => {
  const navigate = useNavigate();

  // const { authState, onStateChange } = props;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [page, setPage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //   const [type, setType] = React.useState("password");
  //   const [value, setValue] = React.useState(false);

  const handleInputChange = (e) => {
    const { value, dataset } = e.target;
    const { prop } = dataset;

    setFormData({
      ...formData,
      [prop]: value,
    });
  };
  const goToLogin = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/Login");
    }, 2000);
  };
  const sendmail = async () => {
    await setPage(1);
    await setTimeout(() => {
      setPage(2);
    }, 5000);

    // try {
    //   await Auth.signUp(formData);
    //   onStateChange(authState);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      {page === "" ? (
        <div className="pageForgotPassword">
          <p className="HTextRegister">ตั้งค่ารหัสผ่านใหม่</p>
          <p className="HTextRegister2">
            ใส่อีเมลที่ใช้ในการสมัคร
            ทางเราจะส่งลิ้งค์เพื่อยืนยันตัวตนไปทางอีเมลของคุณ
            เพื่อทำการตั้งรหัสผ่านใหม่
          </p>
          <form className="formForgotPassword">
            <div className="BoxRegister">
              <label htmlFor="email"> อีเมล</label>
              <br />
              <input
                data-prop={"email"}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div className="BoxRegister2">
              <div className="INBoxRegister2">
                <button type="button" onClick={() => sendmail()}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : page === 1 ? (
        <div className="pageForgotPassword2">
          <img src={ForgetPasswork} alt="ForgetPasswork" />
          <p className="HTextForgotPassword">เปิดอีเมลเพื่อตรวจสอบ</p>
          <p className="HTextForgotPassword2">
            เราได้ส่งคำแนะนำการกู้คืนรหัสผ่าน ไปยังอีเมลของคุณแล้ว
          </p>
          <p className="HTextForgotPassword3">
            หากคุณยังไม่ได้รับอีเมล คุณสามารถเปิดดูที่ spam filter ได้
            หรือลองใส่อีเมลในการยืนยันตัวตนใหม่อีกครั้ง
          </p>
        </div>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <Collapse in={showAlert}>
              <Alert sx={{ mb: 2 }}>
                คุณได้ทำการตั้งรหัสผ่านใหม่เรียบร้อยแล้ว
              </Alert>
            </Collapse>
          </Box>

          <div className="pageForgotPassword">
            <p className="HTextForgotPassword">ตั้งรหัสเข้าใช้งานใหม่</p>
            <p className="HTextForgotPassword2">
              เราแนะนำว่ารหัสใหม่ที่คุณกำลังจะตั้งต้องแตกต่าง
              จากรหัสเดิมที่คุยได้ใช้งานก่อนหน้า
            </p>
            <form className="formForgotPassword2">
              <div className="BoxRegister">
                <label htmlFor="password">พาสเวิร์ด</label>
                <div>
                  <input
                    data-prop={"password"}
                    onChange={handleInputChange}
                    type={showPassword ? "text" : "password"}
                    autoComplete="on"
                  ></input>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className="IconButtonregister"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>

                <p style={{ marginTop: -18, marginBottom: 20 }}>
                  ใส่รหัสอย่างน้อย 8 ตัว
                </p>
              </div>
              <div className="BoxRegister">
                <label htmlFor="confirmpassword">ยืนยันพาสเวิร์ด</label>
                <br />

                <input
                  data-prop={"confirmpassword"}
                  onChange={handleInputChange}
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
                ></input>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  className="IconButtonregister"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <div className="BoxRegister2">
                <div className="INBoxForgotPassword2">
                  <button type="button" onClick={() => goToLogin()}>
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default ForgotPassword;
