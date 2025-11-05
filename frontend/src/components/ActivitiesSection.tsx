import React from "react";
import Button from "../components/Button";

const ActivitiesSection: React.FC = () => {
  const fields = [
    {
      title: "حقوق مدنی",
      desc: "دعاوی مربوط به قراردادها، املاک و معاملات مدنی",
    },
    {
      title: "حقوق کیفری",
      desc: "دفاع در پرونده‌های کیفری و جرایم مختلف",
    },
    {
      title: "حقوق خانواده",
      desc: "طلاق، نفقه، حضانت و مسائل خانوادگی",
    },
    {
      title: "حقوق اداری",
      desc: "دعاوی اداری مربوط‌به اختلافات با ارگان‌ها",
    },
    {
      title: "حقوق کار",
      desc: "اختلافات کاری، مطالبات و قراردادهای کار",
    },
    {
      title: "حقوق تجاری",
      desc: "شرکت‌ها، قراردادهای بازرگانی و اختلافات تجاری",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#f5f0e8] py-12 px-4 text-[#43392F]"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        {/* 🔹 بخش معرفی حوزه‌ها */}
        <div className="bg-[#9F8772]/30 rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-right md:pr-8">
            حوزه‌های تخصصی فعالیت
          </h2>

          <p className="leading-relaxed mb-6 max-w-sm md:max-w-md mx-auto text-[#97704F] text-base md:text-lg text-center">
            دفتر وکالت ما با تیمی مجرب و متخصص، آماده ارائه خدمات حقوقی در
            زمینه‌های مختلف حقوقی می‌باشد.
          </p>

          {/* ✅ دکمه مشاوره رایگان */}
          <div className="flex justify-end mt-8">
            <Button
              variant="tertiary"
              onClick={() =>
                alert("در حال انتقال به صفحه مشاوره رایگان...")
              }
            >
              مشاوره رایگان
            </Button>
          </div>
        </div>

        {/* 🔹 کارت‌های زمینه‌های تخصصی */}
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
          زمینه‌های تخصصی ما
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fields.map((item, index) => (
            <div
              key={index}
              className="bg-[#9F8772]/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center p-6 aspect-square"
            >
              <h4 className="text-lg font-bold mb-3">{item.title}</h4>
              <p className="text-sm leading-relaxed text-[#97704F]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
