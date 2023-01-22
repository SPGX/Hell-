import React from 'react';
// import Dashboard from ".././Dashboard/Dashboard";
// import { IconButton } from "@mui/material";

// import { Visibility, VisibilityOff } from "@mui/icons-material";

// import google from "../../img/google.svg";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import { Auth } from "aws-amplify";

import {
	//Link,
	useNavigate,
} from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';
// import { API, Storage, Auth } from "aws-amplify";
import {Authenticator} from '@aws-amplify/ui-react';

import './Register.css';
const Register = props => {
	// const { authState, onStateChange } = props;
	const navigate = useNavigate();

	// const [formData, setFormData] = useState({
	//   username: "",
	//   email: "",
	//   password: "",
	//   phone_number: "",
	// });
	// const [page, setPage] = useState("");
	// const [showPassword, setShowPassword] = useState(false);

	// const handleClickShowPassword = () => setShowPassword((show) => !show);

	// const handleMouseDownPassword = (event) => {
	//   event.preventDefault();
	// };

	// const width = window.innerWidth;

	// const handleClickShowPassword = () => {
	//   if (type === "password") {
	//     setValue(!value);
	//     setType("text");
	//   } else if (type === "text") {
	//     setValue(!value);
	//     setType("password");
	//   }
	// };

	// const handleInputChange = (e) => {
	//   const { value, dataset } = e.target;
	//   const { prop } = dataset;
	//   setFormData({
	//     ...formData,
	//     [prop]: value,
	//   });
	// };

	const signUpClick = () => {
		navigate('/Home');
	};

	const formFields = {
		signIn: {
			username: {
				dialCodeList: ['+66'],
			},
		},
		signUp: {
			email: {
				order: 1,
			},
			phone_number: {
				dialCodeList: ['+66'],
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
		// <Authenticator formFields={formFields}>
		//   {({ signOut, user }) => (
		<div className='page1'>
			<div className='InFrameRegis1'>
				<div className='InFrame1_1Regis1'>
					<p className='TextInFrame1_1Regis1'>Welcome</p>
					<p className='TextInFrame1_1_2Regis1'>เริ่มสร้างบัญชีเพื่อเข้าถึงเครื่องมือจัดการสุดพิเศษ</p>
				</div>
			</div>

			<div className='InFrameRegis1_2'>
				<button onClick={() => signUpClick()}>เข้าสู่ระบบ</button>
			</div>
		</div>
		//   )}
		// </Authenticator>
		//<div>
		//   {page === "" ? (
		//     <div className="page1">
		//       <div className="InFrameRegis1">
		//         <div className="InFrame1_1Regis1">
		//           <p className="TextInFrame1_1Regis1">Welcome</p>
		//           <p className="TextInFrame1_1_2Regis1">
		//             เริ่มสร้างบัญชีเพื่อเข้าถึงเครื่องมือจัดการสุดพิเศษ
		//           </p>
		//         </div>
		//       </div>
		//       <div className="InFrameRegis1_2">
		//         <button onClick={() => setPage(1)}>สร้างบัญชี</button>
		//         <div className="BoxtextFrame">
		//           <p>มีบัญชีอยู่แล้ว?</p>
		//           <Link to="/Login">
		//             <p className="Textp">เข้าสู่ระบบ</p>
		//           </Link>
		//         </div>
		//       </div>
		//     </div>
		//   ) : (
		//     <>
		//       <p className="HTextRegister">สร้างบัญชี</p>
		//       <p className="HTextRegister2">
		//         Please fill the details and create account
		//       </p>
		//       <form className="from">
		//         <div className="BoxRegister">
		//           <label htmlFor="username"> ชื่อผู้ใช้งาน</label>
		//           <br />
		//           <input
		//             data-prop={"username"}
		//             onChange={handleInputChange}
		//             type="text"
		//             placeholder="username"
		//           />
		//         </div>
		//         <div className="BoxRegister">
		//           <label htmlFor="email"> อีเมล</label>
		//           <br />
		//           <input
		//             data-prop={"email"}
		//             onChange={handleInputChange}
		//             type="text"
		//             placeholder="email"
		//           />
		//         </div>
		//         <div className="BoxRegister">
		//           <label htmlFor="password">พาสเวิร์ด</label>
		//           <br />
		//           <input
		//             data-prop={"password"}
		//             onChange={handleInputChange}
		//             type={showPassword ? "text" : "password"}
		//             autoComplete="on"
		//           ></input>
		//           <IconButton
		//             aria-label="toggle password visibility"
		//             onClick={handleClickShowPassword}
		//             onMouseDown={handleMouseDownPassword}
		//             edge="end"
		//             className="IconButtonregister"
		//           >
		//             {showPassword ? <VisibilityOff /> : <Visibility />}
		//           </IconButton>

		//           <p style={{ marginTop: -18, marginBottom: 20 }}>
		//             Password must be atlease 8 Characters
		//           </p>
		//         </div>
		//         <div className="BoxRegister">
		//           <label htmlFor="phone_number">เบอร์โทร</label>
		//           <br />
		//           <input
		//             data-prop={"phone_number"}
		//             onChange={handleInputChange}
		//             type="text"
		//           ></input>
		//         </div>
		//         <div className="BoxRegister2">
		//           <div className="INBoxRegister2">
		//             <button type="button" onClick={() => signUpClick()}>
		//               ลงทะเบียน
		//             </button>
		//           </div>

		//           <div className="BoxtextFrame">
		//             <p>มีบัญชีอยู่แล้ว?</p>
		//             <Link to="/Login">
		//               <p className="Textp">เข้าสู่ระบบ</p>
		//             </Link>
		//           </div>
		//           <p className="TextRegisterbtt">หรือใช้บัญชี</p>
		//           <button className="google">
		//             <img src={google} alt="google" />
		//           </button>
		//         </div>
		//       </form>
		//     </>
		//   )}
		// </div>
	);
};
export default Register;
