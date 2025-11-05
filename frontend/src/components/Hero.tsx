import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Hero: React.FC = () => {
  const navigate = useNavigate(); // برای هدایت به صفحات دیگر

  return (
    <section className="relative bg-[#FFFBE9] text-[#2C1810] min-h-[70vh] flex items-center px-6 md:px-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
        {/* بخش متن */}
        <div className="text-center md:text-right md:w-[60%] space-y-6">
          <div className="md:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug whitespace-nowrap">
              حفاظت از حقوق شما، تعهد ماست
            </h1>

            <p className="text-lg md:text-2xl text-[#8B6B4E] leading-relaxed mt-4 whitespace-nowrap md:mr-12">
              ارائه خدمات تخصصی حقوقی و وکالت در تمامی حوزه‌ها با تجربه و تعهد
            </p>

            <div className="mt-8 flex justify-center md:justify-end">
              <Button
                variant="tertiary"
                onClick={() => navigate("/login")} // ✅ هدایت به صفحه ورود
                className="w-44 py-2.5 text-sm md:text-base font-medium"
              >
                ورود به اپلیکیشن
              </Button>
            </div>
          </div>
        </div>

        {/* بخش تصویر */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="/img/gavel.png"
            alt="چکش قانون"
            className="relative z-10 w-64 md:w-[420px] lg:w-[460px] h-auto object-contain translate-x-2 md:translate-x-8"
          />
          <div className="absolute bottom-0 w-[65%] h-[24px] bg-[#6B4B2E]/30 blur-xl rounded-full translate-x-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
