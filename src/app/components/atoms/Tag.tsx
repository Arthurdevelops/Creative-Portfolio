"use client";

export default function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm ${className}`}
    >
      {children}
    </span>
  );
}
