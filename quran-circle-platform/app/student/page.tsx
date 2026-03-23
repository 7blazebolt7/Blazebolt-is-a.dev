"use client";

import { useState } from "react";
import { ProgressRing } from "@/components/dashboard/progress-ring";
import { Badge } from "@/components/ui/badge";
import { cn, getArabicDayName } from "@/lib/utils";
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Award,
  Flame,
  Share2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Mock data for demonstration
const studentData = {
  name: "محمد عبدالله",
  center: "حلقة الفرقان",
  teacher: "خالد العمري",
  dailyTarget: 5,
  revisionTarget: 1,
  currentStreak: 8,
  bestStreak: 15,
  weeklyProgress: [
    { day: "الأحد", memorized: 5, revision: 1, completed: true },
    { day: "الإثنين", memorized: 5, revision: 1, completed: true },
    { day: "الثلاثاء", memorized: 4, revision: 1, completed: true },
    { day: "الأربعاء", memorized: 5, revision: 2, completed: true },
    { day: "الخميس", memorized: 0, revision: 0, completed: false },
    { day: "الجمعة", memorized: 0, revision: 0, completed: false },
    { day: "السبت", memorized: 0, revision: 0, completed: false },
  ],
  stats: {
    totalMemorized: 450,
    totalRevision: 120,
    attendanceRate: 92,
    averageDaily: 4.8,
  },
  achievements: [
    { name: "المتميز", description: "إنجاز 100% لمدة أسبوع", icon: "🌟", date: "2024-03-15" },
    { name: "الملتزم", description: "30 يوم متتالية", icon: "🔥", date: "2024-03-10" },
    { name: "المحفظ", description: "حفظ 10 أوجه", icon: "📖", date: "2024-03-01" },
  ],
};

export default function StudentProfilePage({ params }: { params: { token: string } }) {
  const [currentWeek, setCurrentWeek] = useState(0);
  const completedDays = studentData.weeklyProgress.filter(d => d.completed).length;
  const weeklyRate = Math.round((completedDays / 7) * 100);

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-bold text-slate-900">حلقتي</span>
          </div>
          <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <Share2 className="h-5 w-5 text-slate-600" />
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg shadow-primary-500/30">
              {studentData.name.charAt(0)}
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">{studentData.name}</h1>
            <p className="text-slate-500 mb-4">{studentData.center}</p>
            <div className="flex items-center gap-2">
              <Badge variant="info" className="gap-1">
                <BookOpen className="h-3 w-3" />
                {studentData.teacher}
              </Badge>
              <Badge variant="success" className="gap-1">
                <Flame className="h-3 w-3" />
                {studentData.currentStreak} يوم متتالي
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary-600" />
              </div>
              <span className="text-sm text-slate-500">إجمالي الحفظ</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{studentData.stats.totalMemorized}</p>
            <p className="text-xs text-slate-500 mt-1">سطر</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-accent-600" />
              </div>
              <span className="text-sm text-slate-500">نسبة الحضور</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{studentData.stats.attendanceRate}%</p>
            <p className="text-xs text-slate-500 mt-1">هذا الشهر</p>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">تقدم هذا الأسبوع</h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentWeek(c => c + 1)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </button>
              <span className="text-sm text-slate-500">الأسبوع الحالي</span>
              <button 
                onClick={() => setCurrentWeek(c => Math.max(0, c - 1))}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
                disabled={currentWeek === 0}
              >
                <ChevronLeft className="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <ProgressRing progress={weeklyRate} size={100} strokeWidth={8} color="#4f46e5">
              <div className="text-center">
                <span className="text-2xl font-bold text-slate-900">{completedDays}</span>
                <span className="block text-xs text-slate-500">/ 7 أيام</span>
              </div>
            </ProgressRing>
            <div className="flex-1">
              <p className="text-sm text-slate-500 mb-2">معدل الإنجاز الأسبوعي</p>
              <p className="text-3xl font-bold text-slate-900">{weeklyRate}%</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-slate-500">الهدف اليومي:</span>
                <span className="text-sm font-semibold text-slate-900">{studentData.dailyTarget} أسطر</span>
              </div>
            </div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2">
            {studentData.weeklyProgress.map((day, index) => (
              <div 
                key={index}
                className={cn(
                  "text-center p-3 rounded-xl transition-all",
                  day.completed 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "bg-slate-50 text-slate-400"
                )}
              >
                <p className="text-xs mb-1 opacity-70">{day.day}</p>
                <div className={cn(
                  "w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-bold",
                  day.completed ? "bg-emerald-500 text-white" : "bg-slate-200"
                )}>
                  {day.completed ? "✓" : index + 1}
                </div>
                {day.completed && (
                  <p className="text-xs mt-1 font-medium">{day.memorized}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">الإنجازات</h2>
          </div>
          <div className="space-y-4">
            {studentData.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{achievement.name}</h3>
                  <p className="text-sm text-slate-500">{achievement.description}</p>
                </div>
                <span className="text-xs text-slate-400">{achievement.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-sm text-slate-400">
            تم التحديث آخر مرة: {new Date().toLocaleDateString('ar-SA')}
          </p>
          <p className="text-xs text-slate-300 mt-2">
            منصة حلقتي - لإدارة حلقات القرآن الكريم
          </p>
        </div>
      </main>
    </div>
  );
}
