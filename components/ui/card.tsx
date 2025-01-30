import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-md shadow-md border overflow-hidden h-auto ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = " overflow-hidden",
}: CardProps) {
  return <div className={` ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`px-4 py-2 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
}
