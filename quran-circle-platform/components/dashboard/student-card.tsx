"use client";

import Link from "next/link";
import { Student } from "@/types";
import { ProgressRing } from "./progress-ring";
import { Badge } from "@/components/ui/badge";
import { cn, getProgressColor, getProgressBarColor } from "@/lib/utils";
import { TrendingUp, Flame, Calendar } from "lucide-react";

interface StudentCardProps {
  student: Student & {
    completionRate?: number;
    streak?: number;
    lastActivity?: Date;
  };
  viewMode?: "grid" | "list";
}

export function StudentCard({ student, viewMode = "grid" }: StudentCardProps) {
  const rate = student.completionRate || 0;
  const colorClass = getProgressColor(rate);
  const barColor = getProgressBarColor(rate);

  if (viewMode === "list") {
    return (
      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all">
        <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
          {student.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900">{student.name}</h4>
          <p className="text-sm text-slate-500">الهدف: {student.dailyTargetLines} أسطر يومياً</p>
        </div>
        <div className="flex items-center gap-2">
          {student.streak && student.streak > 0 && (
            <Badge variant="warning" className="gap-1">
              <Flame className="h-3 w-3" />
              {student.streak} يوم
            </Badge>
          )}
          <div className={cn("px-3 py-1 rounded-full text-sm font-medium", colorClass)}>
            {rate}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/student/${student.uniqueLinkToken}`}>
      <div className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-xl">
              {student.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                {student.name}
              </h3>
              <p className="text-sm text-slate-500">طالب</p>
            </div>
          </div>

          {student.streak && student.streak > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-medium">
              <Flame className="h-3 w-3" />
              {student.streak}
            </div>
          )}
        </div>

        {/* Progress Section */}
        <div className="flex items-center gap-4 mb-4">
          <ProgressRing progress={rate} size={80} strokeWidth={6} color={barColor.replace("bg-", "#").replace("emerald", "10b981").replace("amber", "f59e0b").replace("rose", "ef4444")}>
            <span className="text-lg font-bold text-slate-900">{rate}%</span>
          </ProgressRing>
          <div className="flex-1">
            <p className="text-sm text-slate-500 mb-1">معدل الإنجاز</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={cn("h-full rounded-full transition-all duration-500", barColor)}
                style={{ width: `${rate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary-50">
              <TrendingUp className="h-4 w-4 text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">الحفظ اليومي</p>
              <p className="text-sm font-semibold text-slate-900">{student.dailyTargetLines} أسطر</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-accent-50">
              <Calendar className="h-4 w-4 text-accent-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">المراجعة</p>
              <p className="text-sm font-semibold text-slate-900">{student.revisionTargetPages} وجه</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
