import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [userType, setUserType] = useState<'lawyer' | 'client'>('client');

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));

    let error = "";
    
    if (field === 'fullName' && value.length > 0 && value.length < 2) {
      error = "نام باید حداقل 2 کاراکتر باشد";
    }
    
    if (field === 'email' && value.length > 0 && !value.includes('@')) {
      error = "ایمیل را به درستی وارد کنید";
    }
    
    if (field === 'phone' && value.length > 0 && value.length < 11) {
      error = "شماره موبایل باید 11 رقم باشد";
    }
    
    if (field === 'password' && value.length > 0 && value.length < 6) {
      error = "رمز عبور حداقل باید 6 کاراکتر باشد";
    }
    
    if (field === 'confirmPassword' && value !== formData.password) {
      error = "رمز عبور با تکرار آن مطابقت ندارد";
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSignUp = () => {
    console.log("SignUp attempt:", { ...formData, userType });
    alert("ثبت‌نام موفقیت‌آمیز!");
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Section - SignUp Form */}
        <div className="w-1/2 p-12 flex flex-col justify-start">
          <div className="max-w-sm mx-auto w-full space-y-4">
            <div className="text-right space-y-2 mb-6">
              <h2 className="text-3xl font-bold" style={{ color: "#43392F" }}>
                ثبت نام
              </h2>         
              <p className="text-gray-500 text-sm">حساب کاربری جدید ایجاد کنید</p>
            </div>

            <div className="space-y-4">
              <Input
                label="نام و نام خانوادگی"
                placeholder="نام کامل خود را وارد کنید."
                type="text"
                value={formData.fullName}
                onChange={handleInputChange('fullName')}
                error={errors.fullName}
              />

              <Input
                label="ایمیل"
                placeholder="example@gmail.com"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={errors.email}
              />

              <Input
                label="شماره موبایل"
                placeholder="09123456789"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                error={errors.phone}
              />

              <Input
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید."
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                error={errors.password}
              />

              <Input
                label="تکرار رمز عبور"
                placeholder="رمز عبور خود را تکرار کنید."
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                error={errors.confirmPassword}
              />
            </div>

            {/* User Type Selection */}
            <div className="text-right space-y-3 pt-2">
              <label className="text-right text-base font-medium" style={{ color: "#43392F" }}>
                نوع کاربر
              </label>
              <div className="flex gap-6 justify-center">
                <label className="flex items-center gap-3 cursor-pointer">
                  <span className="text-sm font-medium" style={{ color: "#43392F" }}>وکیل</span>
                  <input
                    type="radio"
                    name="userType"
                    value="lawyer"
                    checked={userType === 'lawyer'}
                    onChange={() => setUserType('lawyer')}
                    className="w-5 h-5 cursor-pointer accent-[#8f7357]"
                  />
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <span className="text-sm font-medium" style={{ color: "#43392F" }}>موکل</span>
                  <input
                    type="radio"
                    name="userType"
                    value="client"
                    checked={userType === 'client'}
                    onChange={() => setUserType('client')}
                    className="w-5 h-5 cursor-pointer accent-[#8f7357]"
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button variant="primary" onClick={handleSignUp} className="w-full">ثبت نام</Button>
            </div>

            <p className="text-sm text-center" style={{ color: "#43392F" }}>
              حساب کاربری دارید؟{" "}
              <Link
                to="/"
                className="text-sm hover:underline font-medium transition-colors"
                style={{ color: "#DEAF84" }}
              >
                وارد شوید
              </Link>
            </p>
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
              به سامانه حق آوران خوش آمدید. با ورود به حساب کاربری خود، از تمام خدمات حقوقی ما بهره‌مند شوید.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}