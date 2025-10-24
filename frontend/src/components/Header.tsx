import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "صفحه اصلی", path: "/home" },
    { label: "درباره ما", path: "/about" },
    { label: "حوزه فعالیت", path: "/activities" },
    { label: "تماس با ما", path: "/contact" },
  ];

  return (
    <header className="bg-[#43392F] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* ✅ لوگو + نام برند بدون لینک */}
          <div className="flex items-center space-x-3 space-x-reverse">
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
                className="hover:text-[#2F1B12] cursor-pointer transition-colors duration-300 font-medium"
                >
                {item.label}
                </span>
            ))}
            </nav>

          {/* ✅ دکمه منوی موبایل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ✅ منوی موبایل */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {menuItems.map((item, index) => (
              <span
                key={index}
                className="block py-2 hover:text-[#D4A574] cursor-pointer transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
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
