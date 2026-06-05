export default function BrandingPanel({
  imageSrc,
  imageAlt,
  headline,
  tagline,
  badges = [],
}) {
  return (
    <div className="hidden lg:flex w-1/2 relative bg-violet-100 h-full overflow-hidden">
      {/* Hero image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4F378A]/85 via-[#4F378A]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col justify-end h-full text-white w-full">
        <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6 max-w-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {headline}
        </h1>
        <p className="text-lg leading-relaxed mb-12 max-w-md opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
          {tagline}
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-3">
          {badges.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white"
            >
              <span className="material-symbols-outlined text-[18px]">{icon}</span>
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
