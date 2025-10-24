import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#43392F] text-white py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* بخش اصلی سه ستونه */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-center">
          {/* ستون ۱ */}
          <div>
            <h3 className="relative inline-block text-lg font-semibold text-white mb-0">
              خدمات ما
              <span className="block w-24 h-[2px] bg-white mx-auto mt-2"></span>
            </h3>
            <ul className="space-y-2 mt-4">
              <li>مدیریت پرونده‌ها</li>
              <li>سیستم پیام‌رسانی</li>
              <li>پشتیبانی جلسات دادگاه</li>
              <li>مشاوره حقوقی هوشمند</li>
            </ul>
          </div>

          {/* ستون ۲ */}
          <div>
            <h3 className="relative inline-block text-lg font-semibold text-white mb-0">
              دسترسی سریع
              <span className="block w-24 h-[2px] bg-white mx-auto mt-2"></span>
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  to="/login"
                  className="hover:text-[#2F1B12] transition-colors duration-300"
                >
                  ورود
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="hover:text-[#2F1B12] transition-colors duration-300"
                >
                  ثبت‌نام
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2F1B12] transition-colors duration-300"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-[#2F1B12] transition-colors duration-300"
                >
                  حوزه‌های فعالیت
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#2F1B12] transition-colors duration-300"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون ۳ */}
          <div>
            <h3 className="relative inline-block text-lg font-semibold text-white mb-0">
              تماس با ما
              <span className="block w-24 h-[2px] bg-white mx-auto mt-2"></span>
            </h3>
            <ul className="space-y-2 mt-4">
              <li>۰۲۱-۸۸۸۸۸۸۸۸</li>
              <li>HaghAvaran@gmail.com</li>
              <li>۹ صبح تا ۶ عصر</li>
            </ul>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-white/30 my-6"></div>

        {/* بخش پایینی */}
        <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
            <img
            src="/img/logo.svg"
            alt="HaghAvaran Logo"
            className="w-8 h-8 object-contain"
            />
            <p className="text-sm text-white font-semibold">حق‌آوران</p>
        </div>
        <p className="text-xs text-gray-300">
             © ۱۴۰۴ تمامی حقوق برای سامانه حق‌آوران محفوظ است.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
