import React from "react";

interface FeatureProps {
  title: string;
  subtitle: string;
}

const toPersianDigits = (num: string) => {
  return num.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};

const Feature: React.FC<FeatureProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h3 className="text-sm md:text-base font-semibold text-[#43392F] mb-2">
        {toPersianDigits(title)}
      </h3>
      <p className="text-xs md:text-sm text-[#714423]">
        {subtitle}
      </p>
    </div>
  );
};

const StatsBar: React.FC = () => {
  const features = [
    { title: "هوشمند", subtitle: "دستیار هوش مصنوعی" },
    { title: "24 ساعته", subtitle: "پشتیبانی فنی" },
    { title: "100%", subtitle: "امنیت اطلاعات" },
    { title: "24/7", subtitle: "دسترسی به سامانه" },
  ];

  return (
    <section className="bg-[#FFFBE9] border-t-4 border-[#3C3127] py-14 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <Feature key={index} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
