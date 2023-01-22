import React, { useState } from "react";
import google from "../../img/google.svg";

// import { Auth } from "aws-amplify";

import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./Login.css";
const Login = ({ onSignin }) => {
  // const { authState, onStateChange } = props;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const signIn = async () => {
    try {
      // const user = await Auth.signIn(formData);
      navigate("/Home");
      onSignin();
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const [type, setType] = React.useState("password");
  // const [value, setValue] = React.useState(false);

  const handleInputChange = (e) => {
    const { value, dataset } = e.target;
    const { prop } = dataset;
    setFormData({
      ...formData,
      [prop]: value,
    });
  };

  // const signInClick = async () => {
  //   // try {
  //   //   await Auth.signIn(formData);
  //   //   onStateChange(authState);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  //   navigate("/Home");
  // };

  return (
    <div>
      <>
        <p className="HTextRegister">เข้าสู่บัญชีของคุณ</p>
        <p className="HTextRegister2">Please login to continue using our app</p>
        <form className="from">
          <div className="BoxRegister">
            <label htmlFor="email"> อีเมล</label>
            <br />
            <input
              data-prop={"email"}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className="BoxLogin">
            <label htmlFor="password">พาสเวิร์ด</label>
            <br />

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

            <Link to="/ForgotPassword">
              <p className="textlogin">Forgot Password?</p>
            </Link>
          </div>

          <div className="BoxLogin2">
            <div className="INBoxRegister2">
              <button type="button" onClick={() => signIn()}>
                ล็อกอิน
              </button>
            </div>

            <div className="BoxtextFrame">
              <p>ยังไม่มีบัญชี? </p>
              <Link to="/Register">
                <p className="Textp">สร้างบัญชี</p>
              </Link>
            </div>
            <p className="TextRegisterbtt">หรือใช้บัญชี</p>
            <button className="google">
              <img src={google} alt="google" />
            </button>
          </div>
        </form>
      </>
    </div>
  );
};
export default Login;
