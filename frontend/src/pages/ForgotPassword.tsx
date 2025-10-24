import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0 && !e.target.value.includes('@')) {
      setEmailError("ایمیل را به درستی وارد کنید");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (email && !emailError) {
      console.log("Password reset request for:", email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
        
        {/* Left Section - Form */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full space-y-6">
            <div className="text-right space-y-2">
              <h2 className="text-3xl font-bold" style={{ color: "#43392F" }}>
                فراموشی رمز عبور
              </h2>         
              <p className="text-gray-500 text-sm">
                {isSubmitted 
                  ? "لطفا ایمیل خود را برای دریافت لینک بازیابی رمز عبور بررسی کنید."
                  : "لطفا آدرس ایمیل خود را وارد کنید. ما یک لینک برای بازیابی رمز عبور برای شما ارسال خواهیم کرد."
                }
              </p>
            </div>

            {!isSubmitted ? (
              <>
                <Input
                  label="ایمیل"
                  placeholder="example@gmail.com"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                />

                <Button 
                  variant="primary" 
                  onClick={handleSubmit}
                  disabled={!email || !!emailError}
                >
                  ارسال رمز عبور جدید
                </Button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm">
                    ✓ ایمیل تأیید برای بازیابی رمز عبور ارسال شد
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-center pt-4">
              <Link
                to="/"
                className="text-sm hover:underline font-medium transition-colors"
                style={{ color: "#DEAF84" }}
              >
                بازگشت به صفحه ورود
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Welcome Panel */}
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

      </div>
    </div>
  );
}