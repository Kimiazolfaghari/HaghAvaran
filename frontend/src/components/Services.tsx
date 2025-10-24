import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#2F1B12] hover:bg-[#3D2418] transition-colors duration-300 rounded-2xl p-10 text-center shadow-lg">
      {/* آیکن محلی */}
      <div className="flex justify-center mb-6">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain drop-shadow-md"
        />
      </div>

      {/* عنوان کارت */}
      <h3 className="text-2xl font-bold text-[#F6D6BA] mb-4">{title}</h3>

      {/* توضیح کارت */}
      <p className="text-[#FFFFFF] text-lg leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: "/img/vector-01.png",
      title: "وکلای متخصص",
      description: "تیمی متعهد و آموزش‌دیده برای ارائه بهترین خدمات حقوقی",
    },
    {
      icon: "/img/vector-02.png",
      title: "مشاوره حقوقی دقیق",
      description: "تحلیل کامل پرونده و ارائه راهکارهای عملی و قانونی",
    },
    {
      icon: "/img/vector-03.png",
      title: "پشتیبانی کامل",
      description: "همراهی در تمامی مراحل پرونده تا دستیابی به نتیجه",
    },
  ];

  // 🔄 برعکس کردن ترتیب کارت‌ها
  const reversedServices = [...services].reverse();

  return (
    <section className="bg-[#43392F] py-20 px-6 text-center">
      <div className="container mx-auto max-w-6xl">
        {/* عنوان اصلی بخش */}
        <h2 className="text-4xl font-extrabold text-[#FFFFFF] mb-3">
          خدمات ما
        </h2>

        {/* زیرعنوان */}
        <p className="text-[#F6D6BA] text-xl mb-16">
          از مشاوره اولیه تا پیگیری پرونده، در کنار شما هستیم تا بهترین نتیجه را بگیرید.
        </p>

        {/* کارت‌ها (با ترتیب معکوس) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reversedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
