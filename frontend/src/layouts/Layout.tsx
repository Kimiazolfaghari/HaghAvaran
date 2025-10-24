import React from "react";
import { Outlet } from "react-router-dom"; // 👈 اضافه کن
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* 👈 اینجا صفحات داخلی (Home و غیره) نمایش داده می‌شن */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
