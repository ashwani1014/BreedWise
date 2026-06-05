export default function AuthCard({ subtitle, children, footer }) {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 h-full bg-slate-50 overflow-y-auto">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#4F378A] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Breedwise
          </h2>
          {subtitle && (
            <p className="text-base text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>{subtitle}</p>
          )}
        </div>

        {/* Main content (form etc.) */}
        {children}

        {/* Footer link row */}
        {footer && <div className="mt-8 text-center">{footer}</div>}
      </div>
    </div>
  );
}
