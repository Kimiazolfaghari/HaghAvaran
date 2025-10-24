import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button"; 

const CTA: React.FC = () => {
  return (
    <section className="bg-[#43392F] py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-[#FFFBE9] text-center rounded-2xl py-16 px-8 md:px-20 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#43392F] mb-6">
            با اشتراک رایگان شروع کنید
          </h2>

          <p className="text-[#43392F]/80 text-xl leading-relaxed mb-10">
            همین حالا به‌ صورت رایگان عضو شوید و به مشاوره اولیه،{" "}
            <br />
            پنل کاربری اختصاصی و مدیریت یک پرونده دسترسی پیدا کنید.
          </p>

          <Link to="/signup" className="inline-block">
            <Button variant="primary" className="mx-auto">
              ثبت نام رایگان
            </Button>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-[#43392F]/80 text-base">
            <div className="flex items-center gap-2">
              <Check size={18} strokeWidth={2} />
              <span>مشاوره اولیه رایگان</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} strokeWidth={2} />
              <span>مدیریت پرونده</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} strokeWidth={2} />
              <span>پشتیبانی کامل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
