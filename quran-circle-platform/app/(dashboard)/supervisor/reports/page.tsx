"use client";

import { useState } from "react";
import { mockStudents } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/dashboard/progress-ring";
import { cn, getProgressBarColor } from "@/lib/utils";
import { 
  FileText, 
  Download, 
  Calendar,
  TrendingUp,
  Users,
  Award,
  ChevronDown,
  Filter
} from "lucide-react";

const weeklyData = [
  { week: "الأسبوع 1", memorization: 85, revision: 90, attendance: 95 },
  { week: "الأسبوع 2", memorization: 88, revision: 85, attendance: 92 },
  { week: "الأسبوع 3", memorization: 92, revision: 88, attendance: 96 },
  { week: "الأسبوع 4", memorization: 90, revision: 92, attendance: 94 },
];

const topStudents = [
  { name: "فهد سالم", rate: 98, memorized: 140, streak: 15 },
  { name: "محمد عبدالله", rate: 95, memorized: 135, streak: 12 },
  { name: "عبدالرحمن محمد", rate: 92, memorized: 128, streak: 8 },
  { name: "سعد أحمد", rate: 90, memorized: 125, streak: 6 },
  { name: "ناصر علي", rate: 88, memorized: 120, streak: 5 },
];

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">التقارير</h1>
          <p className="text-slate-500 mt-1">إحصائيات وتحليلات أداء الحلقة</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="gap-2">
            <Filter className="h-4 w-4" />
            تصفية
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit">
        {[
          { id: "week", label: "أسبوعي" },
          { id: "month", label: "شهري" },
          { id: "term", label: "فصلي" },
        ].map((period) => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all",
              selectedPeriod === period.id
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <span className="text-sm text-slate-500">معدل الحفظ</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">88.75%</p>
          <p className="text-sm text-emerald-600 mt-1">+2.5% عن الشهر الماضي</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-accent-50 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-accent-600" />
            </div>
            <span className="text-sm text-slate-500">معدل المراجعة</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">88.75%</p>
          <p className="text-sm text-emerald-600 mt-1">+1.2% عن الشهر الماضي</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-sm text-slate-500">نسبة الحضور</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">94.25%</p>
          <p className="text-sm text-emerald-600 mt-1">+0.8% عن الشهر الماضي</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <span className="text-sm text-slate-500">الطلاب المتميزين</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">12</p>
          <p className="text-sm text-slate-500 mt-1">من أصل 45 طالب</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6">التقدم الأسبوعي</h2>
          <div className="space-y-6">
            {weeklyData.map((week, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">{week.week}</span>
                  <span className="text-sm text-slate-500">متوسط: {Math.round((week.memorization + week.revision + week.attendance) / 3)}%</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-500">الحفظ</span>
                      <span className="font-medium text-slate-700">{week.memorization}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-500 rounded-full transition-all duration-500"
                        style={{ width: `${week.memorization}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-500">المراجعة</span>
                      <span className="font-medium text-slate-700">{week.revision}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent-500 rounded-full transition-all duration-500"
                        style={{ width: `${week.revision}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-500">الحضور</span>
                      <span className="font-medium text-slate-700">{week.attendance}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${week.attendance}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6">أفضل الطلاب أداءً</h2>
          <div className="space-y-4">
            {topStudents.map((student, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm",
                  index === 0 ? "bg-amber-100 text-amber-700" :
                  index === 1 ? "bg-slate-200 text-slate-700" :
                  index === 2 ? "bg-orange-100 text-orange-700" :
                  "bg-slate-100 text-slate-600"
                )}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{student.name}</p>
                  <p className="text-xs text-slate-500">{student.memorized} سطر محفوظ</p>
                </div>
                <div className="text-left">
                  <ProgressRing progress={student.rate} size={50} strokeWidth={4} color={getProgressBarColor(student.rate).replace('bg-', '#').replace('emerald', '10b981').replace('amber', 'f59e0b').replace('rose', 'ef4444')}>
                    <span className="text-xs font-bold">{student.rate}%</span>
                  </ProgressRing>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Report Table */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">تقرير تفصيلي</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">الطالب</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">أيام الحضور</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">الحفظ</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">المراجعة</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">المعدل</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockStudents.map((student, index) => {
                const rate = [95, 88, 92, 85, 90][index];
                return (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600">{20 - index}/22</td>
                    <td className="px-6 py-4 text-center text-slate-600">{110 - index * 5} سطر</td>
                    <td className="px-6 py-4 text-center text-slate-600">{25 - index} وجه</td>
                    <td className="px-6 py-4 text-center">
                      <span className={cn("font-bold", rate >= 90 ? "text-emerald-600" : rate >= 70 ? "text-amber-600" : "text-rose-600")}>
                        {rate}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant={rate >= 90 ? "success" : rate >= 70 ? "warning" : "error"}>
                        {rate >= 90 ? "ممتاز" : rate >= 70 ? "جيد" : "يحتاج متابعة"}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
