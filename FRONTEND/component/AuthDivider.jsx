export default function AuthDivider({ label = "or sign in with email" }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="h-px bg-gray-200 flex-1" />
      <span className="text-sm font-medium text-gray-400 whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </span>
      <div className="h-px bg-gray-200 flex-1" />
    </div>
  );
}
