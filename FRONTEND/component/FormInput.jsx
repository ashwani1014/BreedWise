export default function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rightSlot,
  labelRight,
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <label className="block text-sm font-medium text-gray-700" htmlFor={id} style={{ fontFamily: 'Inter, sans-serif' }}>
          {label}
        </label>
        {labelRight}
      </div>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-14 ${
            rightSlot ? "pl-4 pr-12" : "px-4"
          } rounded-xl border border-gray-200 bg-slate-50 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all outline-none text-base text-gray-900 placeholder:text-gray-400`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
        {rightSlot && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
    </div>
  );
}
