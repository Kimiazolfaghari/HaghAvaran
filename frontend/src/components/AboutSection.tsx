import React from "react";
import Button from "../components/Button";

const AboutSection: React.FC = () => {
  const values = [
    {
      title: "اعتماد و صداقت",
      desc: "پایه کار ما بر اساس اعتماد متقابل و صداقت در ارائه خدمات حقوقی است.",
    },
    {
      title: "تخصص و تجربه",
      desc: "تیم ما متشکل از وکلای با تجربه و متخصص در زمینه‌های مختلف حقوقی می‌باشد.",
    },
    {
      title: "پاسخگویی سریع",
      desc: "پاسخگویی سریع و دقیق به سوالات و نیازهای موکلان عزیز از اصول کاری ماست.",
    },
    {
      title: "محرمانگی کامل",
      desc: "حفظ کامل اطلاعات و اسرار موکلان در بالاترین سطح اهمیت و امانتداری.",
    },
    {
      title: "عدالت‌محوری",
      desc: "تمام تلاش ما برای تحقق عدالت و احقاق حقوق قانونی موکلان است.",
    },
    {
      title: "خدمات جامع",
      desc: "ارائه خدمات کامل حقوقی از مشاوره تا پیگیری پرونده در تمامی مراحل.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#f5f0e8] py-12 px-4 text-[#43392F]"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        {/* 🔹 بخش معرفی دفتر */}
        <div className="bg-[#9F8772]/30 rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-right md:pr-8">
            درباره دفتر وکالت حق‌آوران
          </h2>

          <p className="leading-relaxed mb-6 max-w-sm md:max-w-md mx-auto text-[#97704F] text-base md:text-lg text-center">
            دفتر وکالت حق‌آوران با بیش از یک دهه تجربه در زمینه ارائه خدمات
            حقوقی، با هدف دفاع از حقوق شهروندان و ارائه مشاوره‌های تخصصی تاسیس
            شده است. ما با تکیه بر دانش روز و تجربه کافی، در خدمت عدالت‌خواهان
            هستیم.
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

        {/* 🔹 بخش ارزش‌های ما */}
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
          ارزش‌های ما
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((item, index) => (
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

export default AboutSection;
