import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "صفحه اصلی", path: "/" },
    { label: "درباره ما", path: "/about" },
    { label: "حوزه فعالیت", path: "/activities" },
    { label: "تماس با ما", path: "/contact" },
  ];

  return (
    <header className="bg-[#43392F] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* ✅ لوگو + نام برند */}
          <div
            className="flex items-center space-x-3 space-x-reverse cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/img/logo.svg"
              alt="Logo"
              className="w-9 h-9 object-contain"
            />
            <h1 className="text-xl font-bold text-[#FFFFFF]">حق‌آوران</h1>
          </div>

          {/* ✅ منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <span
                key={index}
                onClick={() => navigate(item.path)} // 👈 اینجا مسیر تغییر می‌کنه
                className="hover:text-[#D4A574] cursor-pointer transition-colors duration-300 font-medium"
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>

        {/* ✅ منوی موبایل */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {menuItems.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  navigate(item.path); // 👈 اینجا هم مسیر تغییر می‌کنه
                  setIsMenuOpen(false);
                }}
                className="block py-2 hover:text-[#D4A574] cursor-pointer transition-colors duration-300 font-medium"
              >
                {item.label}
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
