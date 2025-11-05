import React from 'react';
import { User, Bell, Menu, Folder, Clock, CheckSquare, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // تبدیل تاریخ میلادی به شمسی
  const getPersianMonth = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      calendar: 'persian'
    };
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
  };

  const getPersianYear = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      calendar: 'persian',
      numberingSystem: 'latn'
    };
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
  };

  const getPersianDay = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      calendar: 'persian',
      numberingSystem: 'latn'
    };
    return parseInt(new Intl.DateTimeFormat('fa-IR', options).format(date));
  };

  const currentMonth = getPersianMonth(selectedDate);
  const currentYear = getPersianYear(selectedDate);
  const today = getPersianDay(new Date());
  
  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  
  // ساخت تقویم ماه جاری
  const getCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = (firstDay.getDay() + 1) % 7;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[][] = [];
    let week: (number | null)[] = new Array(firstDayOfWeek).fill(null);
    
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        days.push(week);
        week = [];
      }
    }
    
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      days.push(week);
    }
    
    return days;
  };

  const calendarDays = getCalendarDays();

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  // داده‌های نمودار فعالیت
  const months = ['اسفند', 'بهمن', 'دی', 'آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'];
  const activityData = [3, 5, 2, 6, 4, 7, 3, 8, 5, 7, 4, 6];

  return (
    <div className="min-h-screen bg-[#f5f0e8]" dir="rtl">
      {/* Header */}
      <header className="bg-[#43392F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[#5a5046] rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 className="text-xl font-bold">داشبورد</h1>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-[#5a5046] rounded-lg transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-[#5a5046] rounded-full transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#4a4036] text-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 left-6 p-2 hover:bg-[#5a5046] rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="mt-20 space-y-1">
            <a
              href="/dashboard"
              className="flex items-center justify-end gap-4 px-6 py-4 hover:bg-[#5a5046] transition-colors border-r-4 border-transparent hover:border-white"
            >
              <span className="text-base font-medium">داشبورد</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </a>

            <a
              href="/profile"
              className="flex items-center justify-end gap-4 px-6 py-4 hover:bg-[#5a5046] transition-colors border-r-4 border-transparent hover:border-white"
            >
              <span className="text-base font-medium">پروفایل</span>
              <User className="w-6 h-6" />
            </a>

            <a
              href="/contacts"
              className="flex items-center justify-end gap-4 px-6 py-4 hover:bg-[#5a5046] transition-colors border-r-4 border-transparent hover:border-white"
            >
              <span className="text-base font-medium">مخاطبین</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            <a
              href="/wallet"
              className="flex items-center justify-end gap-4 px-6 py-4 hover:bg-[#5a5046] transition-colors border-r-4 border-transparent hover:border-white"
            >
              <span className="text-base font-medium">کیف پول</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </a>

            <a
              href="/subscription"
              className="flex items-center justify-end gap-4 px-6 py-4 hover:bg-[#5a5046] transition-colors border-r-4 border-transparent hover:border-white"
            >
              <span className="text-base font-medium">مدیریت اشتراک</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* بخش چپ - تقویم و رویدادها */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* تقویم */}
            <div className="bg-[#F6F6F6] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="text-center">
                  <span className="font-bold text-gray-800">{currentMonth} {currentYear}</span>
                </div>
                <button 
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* هفته */}
              <div className="grid grid-cols-7 gap-2 mb-3">
                {weekDays.map((day, index) => (
                  <div key={index} className="text-center text-sm text-gray-600 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* روزها */}
              <div className="space-y-2">
                {calendarDays.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-2">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`
                          text-center text-sm py-3 rounded-xl transition-all
                          ${day ? 'hover:bg-gray-50 cursor-pointer' : ''}
                          ${day && getPersianDay(new Date()) === day && selectedDate.getMonth() === new Date().getMonth() && selectedDate.getFullYear() === new Date().getFullYear() 
                            ? 'bg-[#8b7355] text-white font-bold shadow-md' 
                            : day ? 'text-gray-700 font-medium' : ''}
                        `}
                      >
                        {day || ''}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* رویدادهای پیش رو */}
            <div className="bg-[#F6F6F6] rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">رویداد های پیش رو</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-[#F6F6F6] rounded-2xl">
                  <Calendar className="w-5 h-5 text-[#714423] flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">۴ مرداد ۱۴۰۴</p>
                    <p className="text-xs text-gray-600 mt-1">08:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F6F6F6] rounded-2xl">
                  <Calendar className="w-5 h-5 text-[#714423] flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">۲۳ مرداد ۱۴۰۴</p>
                    <p className="text-xs text-gray-600 mt-1">14:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* بخش راست - آمار و نمودار */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
            {/* کارت‌های آماری */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* پرونده‌ها */}
              <div className="bg-[#F6F6F6] rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">3</h3>
                    <p className="text-gray-700 text-sm">پرونده‌ها</p>
                  </div>
                  <Folder className="w-10 h-10 text-[#714423]" />
                </div>
              </div>

              {/* جلسات */}
              <div className="bg-[#F6F6F6] rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">3</h3>
                    <p className="text-gray-700 text-sm">جلسات</p>
                  </div>
                  <Clock className="w-10 h-10 text-[#714423]" />
                </div>
              </div>

              {/* وظایف */}
              <div className="bg-[#F6F6F6] rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">3</h3>
                    <p className="text-gray-700 text-sm">وظایف</p>
                  </div>
                  <CheckSquare className="w-10 h-10 text-[#714423]" />
                </div>
              </div>
            </div>

            {/* نمودار فعالیت */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-8 text-right">فعالیت</h2>
              <div className="relative">
                <div className="flex justify-between mb-2 text-xs text-gray-600">
                  {months.map((month, index) => (
                    <span key={index}>{month}</span>
                  ))}
                </div>
                <div className="h-64">
                  <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="600" y2="0" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="50" x2="600" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="100" x2="600" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="150" x2="600" y2="150" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="200" x2="600" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                    
                    {/* Line chart */}
                    <polyline
                      points={activityData.map((value, index) => {
                        const x = (index / (activityData.length - 1)) * 600;
                        const y = 200 - (value / 10) * 180;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#8b7355"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Points */}
                    {activityData.map((value, index) => {
                      const x = (index / (activityData.length - 1)) * 600;
                      const y = 200 - (value / 10) * 180;
                      return <circle key={index} cx={x} cy={y} r="4" fill="#8b7355" />;
                    })}
                  </svg>
                </div>
              </div>
            </div>

            {/* فعالیت‌های سریع */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">فعالیت های سریع</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-[#8b7355] hover:bg-[#7a6348] text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition-colors font-medium text-base">
                  <span>+</span>
                  <span>افزودن وظیفه</span>
                </button>
                <button className="bg-[#8b7355] hover:bg-[#7a6348] text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition-colors font-medium text-base">
                  <span>+</span>
                  <span>افزودن جلسه</span>
                </button>
                <button className="bg-[#8b7355] hover:bg-[#7a6348] text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition-colors font-medium text-base">
                  <span>+</span>
                  <span>افزودن پرونده</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;