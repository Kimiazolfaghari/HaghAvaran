import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = ''
}: ButtonProps) {
  const sizeClasses = {
    primary: 'w-80 py-4 text-lg',
    secondary: 'w-80 py-3.5 text-base',
    tertiary: 'w-64 py-3 text-base'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-[#8f7357] 
        hover:bg-[#7d6248] 
        active:bg-[#6b5340]
        disabled:bg-[#a39388]
        disabled:cursor-not-allowed
        text-white 
        font-semibold 
        rounded-2xl 
        transition-all
        duration-200
        shadow-md
        hover:shadow-lg
        ${sizeClasses[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// نمونه استفاده
function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
      <div className="bg-white p-12 rounded-3xl border-4 border-dashed border-purple-300 shadow-xl">
        <div className="space-y-6 flex flex-col items-center">
          <Button variant="primary" onClick={() => alert('دکمه اول کلیک شد!')}>
            اعمال تغییرات
          </Button>
          
          <Button variant="secondary" onClick={() => alert('دکمه دوم کلیک شد!')}>
            اعمال تغییرات
          </Button>
          
          <Button variant="tertiary" onClick={() => alert('دکمه سوم کلیک شد!')}>
            اعمال تغییرات
          </Button>

          <Button variant="primary" disabled>
            غیرفعال
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Demo };