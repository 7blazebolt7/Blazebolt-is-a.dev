"use client";

import { useState } from "react";
import { mockStudents, getTeacherStudents } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/dashboard/progress-ring";
import { cn, getProgressBarColor } from "@/lib/utils";
import { 
  Users, 
  CheckCircle2, 
  Clock,
  Calendar,
  Search,
  Plus,
  BookOpen,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

export default function TeacherDashboard() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [progress, setProgress] = useState({ memorization: 0, revision: 0 });
  const myStudents = getTeacherStudents("2");

  const handleSubmitProgress = () => {
    alert("تم تسجيل الإنجاز بنجاح!");
    setSelectedStudent(null);
    setProgress({ memorization: 0, revision: 0 });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">لوحة المعلم</h1>
          <p className="text-slate-500 mt-1">تسجيل ومتابعة إنجاز الطلاب</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-left">
            <p className="text-sm text-slate-500">تاريخ اليوم</p>
            <p className="font-semibold text-slate-900">{new Date().toLocaleDateString('ar-SA')}</p>
          </div>
          <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center">
            <Calendar className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl bg-primary-50 flex items-center justify-center">
              <Users className="h-7 w-7 text-primary-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{myStudents.length}</p>
              <p className="text-sm text-slate-500">طلابي</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">3/5</p>
              <p className="text-sm text-slate-500">تم تسجيلهم اليوم</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl bg-amber-50 flex items-center justify-center">
              <Clock className="h-7 w-7 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">2</p>
              <p className="text-sm text-slate-500">متبقي للتسجيل</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Progress Entry */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">تسجيل إنجاز سريع</h2>
              <p className="text-sm text-slate-500">اختر الطالب وسجل إنجازه</p>
            </div>
          </div>

          {!selectedStudent ? (
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input placeholder="البحث عن طالب..." className="pr-10" />
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {myStudents.map((student) => (
                  <button
                    key={student.id}
                    onClick={() => setSelectedStudent(student.id)}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-primary-50 transition-colors text-right"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{student.name}</p>
                        <p className="text-xs text-slate-500">الهدف: {student.dailyTargetLines} أسطر</p>
                      </div>
                    </div>
                    <ChevronLeft className="h-5 w-5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-800 font-bold">
                    {myStudents.find(s => s.id === selectedStudent)?.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-slate-900">
                    {myStudents.find(s => s.id === selectedStudent)?.name}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  تغيير
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    الحفظ (عدد الأسطر)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={progress.memorization}
                      onChange={(e) => setProgress({...progress, memorization: parseInt(e.target.value)})}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <span className="w-12 text-center font-bold text-slate-900">{progress.memorization}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    المراجعة (عدد الأوجه)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={progress.revision}
                      onChange={(e) => setProgress({...progress, revision: parseInt(e.target.value)})}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
                    />
                    <span className="w-12 text-center font-bold text-slate-900">{progress.revision}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    ملاحظات
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                    rows={3}
                    placeholder="أضف ملاحظات عن أداء الطالب..."
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleSubmitProgress} className="flex-1">
                    تسجيل الإنجاز
                  </Button>
                  <Button variant="secondary" onClick={() => setSelectedStudent(null)}>
                    إلغاء
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Today's Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">ملخص اليوم</h2>
            <div className="space-y-4">
              {myStudents.slice(0, 3).map((student, index) => (
                <div key={student.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{student.name}</p>
                    <p className="text-sm text-slate-500">5 أسطر حفظ • 1 وجه مراجعة</p>
                  </div>
                  <Badge variant="success">مكتمل</Badge>
                </div>
              ))}
              {myStudents.slice(3, 5).map((student) => (
                <div key={student.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl opacity-60">
                  <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{student.name}</p>
                    <p className="text-sm text-slate-500">لم يسجل بعد</p>
                  </div>
                  <Badge variant="default">معلق</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">تقدم الأسبوع</h3>
            <div className="flex items-center gap-6">
              <ProgressRing progress={75} size={100} strokeWidth={8} color="#fbbf24" bgColor="rgba(255,255,255,0.2)">
                <span className="text-2xl font-bold">75%</span>
              </ProgressRing>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-100">الحفظ</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '85%' }} />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-100">المراجعة</span>
                  <span>65%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
