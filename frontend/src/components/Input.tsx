import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
}: InputProps) {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label className="text-right text-base font-medium" style={{ color: "#43392F" }}>
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full
          border 
          ${error ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-amber-700'}
          rounded-lg 
          px-4 
          py-3 
          text-sm 
          text-right
          placeholder:text-gray-400
          bg-gray-50
          focus:outline-none 
          focus:ring-2 
          focus:bg-white
          disabled:bg-gray-100
          disabled:cursor-not-allowed
          transition-all
          duration-200
        `}
      />
      {error && (
        <p className="text-xs text-amber-600 text-right mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

// نمونه استفاده
function Demo() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value && !e.target.value.includes('@')) {
      setEmailError('ایمیل را به درستی وارد کنید.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-right text-gray-800 mb-6">
          فرم ورود
        </h2>
        
        <div className="space-y-5">
          <Input
            label="ایمیل"
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            required
          />

          <Input
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={password.length > 0 && password.length < 6 ? 'رمز عبور را فراموش نکردید؟' : ''}
            required
          />

          <Input
            label="نام کاربری"
            placeholder="نام خود را وارد کنید"
            type="text"
            value=""
            onChange={() => {}}
            disabled
          />

          <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 mt-6">
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export { Demo };