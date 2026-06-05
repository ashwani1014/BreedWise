export default function AlertBanner({ variant = "error", message }) {
  if (!message) return null;

  const styles = {
    error:   "bg-red-50 text-red-700 border border-red-200",
    success: "bg-green-50 text-green-700 border border-green-200",
  };

  const icons = {
    error:   "error",
    success: "check_circle",
  };

  return (
    <div
      role="alert"
      className={`p-3 rounded-xl text-sm font-medium flex items-center gap-2 ${styles[variant]}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <span className="material-symbols-outlined text-[18px]">{icons[variant]}</span>
      <span>{message}</span>
    </div>
  );
}
