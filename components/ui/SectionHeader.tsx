import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <p
        className={`text-sm text-emerald-600 font-semibold mb-4 tracking-wide bg-white rounded-xl p-2 w-fit ${
          !className?.includes("items-start") && "mx-auto"
        }`}
      >
        {subtitle}
      </p>
      <h2 className='text-4xl font-bold text-gray-900 mb-4'>{title}</h2>
      {description && (
        <p className='text-gray-600 max-w-2xl mx-auto'>{description}</p>
      )}
    </div>
  );
}
