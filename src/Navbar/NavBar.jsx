import {
  Link,
  // useMatch,
  // useResolvedPath
  useNavigate,
} from "react-router-dom";
import icon from "../img/logo1.svg";
import "./NavBar.css";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
export default function Navbar() {
  // function CustomLink({ to, children, ...props }) {
  //   const resolvedPath = useResolvedPath(to);
  //   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  //   return (
  //     <li className={isActive ? "active" : ""}>
  //       <Link to={to} {...props}>
  //         {children}
  //       </Link>
  //     </li>
  //   );
  // }

  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/Register");
  };
  const goToHome = () => {
    navigate("/");
  };
  const pathname = window.location.pathname;
  return (
    <>
      {pathname === "/" ? (
        <nav className="nav">
          <div className="site-title">
            <div className="iconBar">
              <FaBars />
            </div>

            <Link to="/">
              <img src={icon} alt="Logo" className="Logo" />
            </Link>
          </div>
          <ul>
            <button className="MakeAWill" onClick={() => goToRegister()}>
              สร้างพินัยกรรม
            </button>
          </ul>
        </nav>
      ) : pathname === "/Login" || pathname === "/Register" ? (
        <nav id="navRes" className="nav">
          <div className="site-title">
            <Link to="/"  className="Logo2">
              <img src={icon} alt="Logo"  />
            </Link>
          </div>
          <ul>
            <button className="btn" onClick={() => goToHome()}>
              <ImCross />
            </button>
          </ul>
        </nav>
      ) : (
        <nav className="nav">
          <div className="site-title">
            <div className="iconBar">
              <FaBars />
            </div>
            <Link to="/Home">
              <img src={icon} alt="Logo" className="Logo" />
            </Link>
          </div>
          <ul>
            <FaUserCircle className="user" />
          </ul>
        </nav>
      )}
    </>
  );
}
