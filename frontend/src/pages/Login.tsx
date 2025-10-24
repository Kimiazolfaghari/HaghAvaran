import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 6) {
      setPasswordError("رمز عبور حداقل باید 6 کاراکتر باشد");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Right Section */}
        <div className="w-1/2 bg-[#43392F] p-12 flex flex-col justify-center items-center text-white text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">حق آوران</h1>
              <img src="/img/logo.svg" alt="logo" className="w-24 h-auto mx-auto" />


              <h2 className="text-2xl font-semibold">خوش آمدید</h2>
            </div>

            <p className="text-sm leading-relaxed max-w-xs mx-auto opacity-90">
              به سامانه حق آوران خوش آمدید. با ورود به حساب خود، از تمام خدمات حقوقی ما بهره‌مند شوید.
            </p>
          </div>
        </div>

        {/* Left Section */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full space-y-6">
            <div className="text-right space-y-2">
              <h2 className="text-3xl font-bold" style={{ color: "#43392F" }}>
                ورود
              </h2>         
              <p className="text-gray-500 text-sm">وارد حساب کاربری خود شوید.</p>
            </div>

            <div className="space-y-4">
              <Input
                label="ایمیل"
                placeholder="example@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید."
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
              />
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm hover:underline transition-colors"
                style={{
                  color: "#DEAF84",
                }}
              >
                رمز عبور را فراموش کرده‌اید؟
              </Link>
            </div>

            <Button variant="primary" onClick={handleLogin}>ورود</Button>

            <p className="text-sm text-center" style={{ color: "#43392F" }}>
              حساب کاربری ندارید؟{" "}
              <Link
                to="/signup"
                className="text-sm hover:underline font-medium transition-colors"
                style={{ color: "#DEAF84" }}
              >
                ثبت‌نام کنید
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}