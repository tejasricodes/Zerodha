import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "./images/kitelogo.png";
import zerodha from "./images/zerodhalogo.svg";
import FormPropsTextFields from "../../components/inputfield";
import Password from "../../components/password";

export default function Login() {
  const navigate = useNavigate();
  const phoneNumber = "Phone Number and User ID";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "tejasri" && password === "teju@123") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex-col justify-center">
      <div className="p-[40px] m-[60px] bg-[#1c1c1c] w-[360px] flex items-center mx-auto flex-col rounded-[5px] mb-[5px]">
        <img
          src={profileImage}
          alt="Profile"
          className="w-[80px] h-[80px] flex items-center mx-auto my-0"
        />
        <br />
        <p className="text-white text-[24px] mb-[10px]">Login to Kite</p>

        {/* Username field (custom component) */}
        <FormPropsTextFields
          defaultValue={phoneNumber}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password field (custom component) */}
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-[300px] bg-[#ff5722] border-[#ff5722] rounded-[3px] p-2 mt-5 text-white cursor-pointer"
        >
          Login
        </button>

        <p className="text-[#9b9b9b] text-[12px] mt-3">
          Forgot user ID or password?
        </p>
      </div>

      <img
        src={zerodha}
        alt="Zerodha logo"
        className="w-[100px] h-[55px] flex items-center mx-auto"
      />

      <p className="text-center text-[#9B9B9B] text-[14px]">
        Don't have an account? Signup now!
      </p>

      <div className="text-center text-[#9B9B9B] text-[10px] mt-4">
        <p>
          Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. <br />
          INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha <br />
          Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | <br />
          Smart Online Dispute Resolution | SEBI SCORES
          <br />
          v3.0.0
        </p>
      </div>
    </div>
  );
}
