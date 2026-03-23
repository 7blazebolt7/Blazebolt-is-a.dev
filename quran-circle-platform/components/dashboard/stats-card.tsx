"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon: React.ReactNode;
  color?: "primary" | "success" | "warning" | "info";
}

const colorVariants = {
  primary: "from-primary-500 to-primary-600",
  success: "from-emerald-500 to-emerald-600",
  warning: "from-amber-500 to-amber-600",
  info: "from-sky-500 to-sky-600",
};

const bgVariants = {
  primary: "bg-primary-50 text-primary-700",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  info: "bg-sky-50 text-sky-700",
};

export function StatsCard({
  title,
  value,
  description,
  trend,
  trendValue,
  icon,
  color = "primary",
}: StatsCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "text-emerald-600" : trend === "down" ? "text-rose-600" : "text-slate-500";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Accent line */}
      <div className={cn("absolute top-0 left-0 w-1 h-full bg-gradient-to-b", colorVariants[color])} />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>

          {(trend || description) && (
            <div className="mt-2 flex items-center gap-2">
              {trend && (
                <span className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
                  <TrendIcon className="h-4 w-4" />
                  {trendValue}
                </span>
              )}
              {description && (
                <span className="text-sm text-slate-500">{description}</span>
              )}
            </div>
          )}
        </div>

        <div className={cn("rounded-xl p-3", bgVariants[color])}>
          {icon}
        </div>
      </div>
    </div>
  );
}
