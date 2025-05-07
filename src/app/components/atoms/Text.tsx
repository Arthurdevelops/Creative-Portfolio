"use client";

type TextVariant = "h1" | "h2" | "h3" | "body" | "small";

export default function Text({
  children,
  variant = "body",
  className = "",
}: {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case "h1":
        return "text-6xl font-bold";
      case "h2":
        return "text-3xl font-bold";
      case "h3":
        return "text-2xl font-semibold";
      case "body":
        return "text-base";
      case "small":
        return "text-sm";
      default:
        return "text-base";
    }
  };

  return (
    <>
      <div className={`${getVariantClasses()} ${className}`}>{children}</div>
      <h2 className="text-3xl font-bold">h2</h2>
    </>
  );
}
