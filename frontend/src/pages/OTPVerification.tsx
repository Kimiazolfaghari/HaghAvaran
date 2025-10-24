import { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      console.log("OTP Verified:", otpValue);
      setIsVerified(true);
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimeLeft(120);
    setIsTimeOver(false);
    inputRefs.current[0]?.focus();
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isOtpComplete = otp.every(digit => digit !== "");

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
        
        {/* Left Section - Form */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full space-y-6">
            <div className="text-right space-y-2">
              <h2 className="text-3xl font-bold" style={{ color: "#43392F" }}>
                تأیید کد OTP
              </h2>         
              <p className="text-gray-500 text-sm">
                {isVerified 
                  ? "کد OTP شما با موفقیت تأیید شد."
                  : "کد تأیید 6 رقمی را که برای شما ارسال شده وارد کنید."
                }
              </p>
            </div>

            {!isVerified ? (
              <>
                <div className="space-y-4">
                  <div className="flex justify-center gap-2 ltr">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#DEAF84] focus:outline-none transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  {!isTimeOver ? (
                    <p className="text-sm text-gray-600">
                      زمان باقی‌مانده: <span style={{ color: "#DEAF84" }} className="font-bold">
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-red-600">کد منقضی شد. لطفا دوباره بخواهید.</p>
                  )}
                </div>

                <Button 
                  variant="primary" 
                  onClick={handleVerify}
                  disabled={!isOtpComplete || isTimeOver}
                >
                  تأیید کد
                </Button>

                {isTimeOver && (
                  <Button 
                    variant="primary" 
                    onClick={handleResend}
                  >
                    درخواست کد جدید
                  </Button>
                )}
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm">
                    ✓ کد OTP با موفقیت تأیید شد
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

              

              
            </div>

            <p className="text-sm leading-relaxed max-w-xs mx-auto opacity-90">
              برای حفاظت از حساب شما، لطفا کد تأیید ارسال شده برای شماره تلفن یا ایمیل خود را وارد کنید.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}