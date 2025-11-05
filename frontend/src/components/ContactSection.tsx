import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button'; 

interface ContactProps {
  className?: string;
}

const ContactPage: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <div
      className={`min-h-screen bg-[#f5f0e8] py-12 px-4 text-[#43392F] ${className}`}
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        {/* 🔹 Hero Section */}
        <div className="bg-[#9F8772]/30 rounded-2xl p-8 md:p-12 mb-8 text-center shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            تماس با ما
          </h1>

        <p className="leading-relaxed mb-6 max-w-md mx-auto text-[#97704F] text-base md:text-lg text-center">
        برای دریافت مشاوره تخصصی و پاسخگویی به پرسش‌ها،  
        می‌توانید از طریق تماس تلفنی، ایمیل یا شبکه‌های اجتماعی با ما در ارتباط باشید.
      </p>


          {/* ✅ دکمه تماس فوری */}
         <div className="flex justify-end mt-8">
            <Button
              variant="tertiary"
              onClick={() => window.location.href = 'tel:02188888888'}
            >
              تماس فوری
            </Button>
          </div>

        </div>

        {/* 🔹 Contact Information */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
          اطلاعات تماس
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* تلفن */}
          <div className="bg-[#9F8772]/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <Phone className="w-8 h-8 mx-auto mb-4 text-[#43392F]" />
            <h3 className="text-lg font-bold mb-3">تلفن</h3>
            <p className="text-lg">۰۲۱-۸۸۸۸۸۸۸۸</p>
          </div>

          {/* ایمیل */}
          <div className="bg-[#9F8772]/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <Mail className="w-8 h-8 mx-auto mb-4 text-[#43392F]" />
            <h3 className="text-lg font-bold mb-3">ایمیل</h3>
            <p className="text-sm">HaghAvaran@gmail.com</p>
          </div>

          {/* آدرس */}
          <div className="bg-[#9F8772]/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-[#43392F]" />
            <h3 className="text-lg font-bold mb-3">آدرس</h3>
            <p>تهران، ولیعصر، پلاک ۱</p>
          </div>

          {/* ساعات کاری */}
          <div className="bg-[#9F8772]/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <Clock className="w-8 h-8 mx-auto mb-4 text-[#43392F]" />
            <h3 className="text-lg font-bold mb-3">ساعات کاری</h3>
            <p>۹ صبح الی ۹ عصر</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
