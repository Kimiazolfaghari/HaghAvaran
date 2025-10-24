import React from "react";

interface FeatureCardProps {
  icon: string; // مسیر فایل آیکن
  title: string;
  items: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, items }) => {
  return (
<div className="bg-[#9F87724D] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-[#97704F] w-16 h-16 rounded-full flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>
      </div>
      <h3 className="text-base font-bold text-[#2C1810] mb-4">{title}</h3>
      <ul className="list-none text-right text-sm text-[#4A3520] leading-relaxed mx-auto inline-block">
        {items.map((item, index) => (
          <li key={index} className="relative pr-4 before:content-['•'] before:absolute before:right-0 before:text-[#97704F]">
            {item}
          </li>
        ))}
      </ul>


    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: "/img/alarm.png",
      title: "مدیریت جلسات",
      items: [
        "مشاهده و جستجوی جلسات",
        "ثبت و ویرایش اطلاعات جلسه",
        "یادآور زمان و مکان جلسه",
        "وضعیت جلسه"
      ]
    },
    {
      icon: "/img/Book open.png",
      title: "داشبورد اختصاصی",
      items: [
        "مدیریت پرونده‌ها",
        "تقویم و رویدادها",
        "وظایف و پیگیری‌ها",
        "نمودار عملکرد",
        "اقدام‌های سریع"
      ]
    },
    {
      icon: "/img/Credit card.png",
      title: "پیام‌رسان امن",
      items: [
        "گفت‌وگوی امن وکیل و موکل",
        "چت با هوش مصنوعی",
        "ارتباط مستقیم با پشتیبانی"
      ]
    },
    {
      icon: "/img/Frame 202.png",
      title: "مدیریت مالی",
      items: [
        "مشاهده موجودی کیف پول",
        "افزایش موجودی و خرید اشتراک",
        "لیست و جزئیات تراکنش‌ها",
        "پرداخت آنلاین امن"
      ]
    }
  ];

  return (
    <section className="bg-[#F5F2E8] py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
