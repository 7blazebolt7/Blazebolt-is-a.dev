"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, getArabicDayName, arabicDays } from "@/lib/utils";
import { 
  ChevronLeft, 
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  Plus,
  BookOpen,
  Users
} from "lucide-react";

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const events = [
  { date: 5, title: "اختبار تحفيظ", type: "exam", color: "rose" },
  { date: 12, title: "اجتماع المعلمين", type: "meeting", color: "primary" },
  { date: 15, title: "تكريم الطلاب", type: "ceremony", color: "amber" },
  { date: 20, title: "اختبار مراجعة", type: "exam", color: "rose" },
  { date: 25, title: "يوم مفتوح", type: "event", color: "emerald" },
];

const workingDays = [0, 1, 2, 3, 4]; // Sunday to Thursday

export default function CalendarPage() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 0).getDay();

  const monthNames = [
    "يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">التقويم الدراسي</h1>
          <p className="text-slate-500 mt-1">إدارة المواعيد والأحداث</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          إضافة حدث
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              {monthNames[month]} {year}
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevMonth}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {arabicDays.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}

            {/* Days */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dayOfWeek = (firstDayOfMonth + index) % 7;
              const isWorkingDay = workingDays.includes(dayOfWeek);
              const dayEvents = events.filter(e => e.date === day);
              const isToday = day === new Date().getDate() && month === currentMonth && year === currentYear;
              const isSelected = selectedDate === day;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "aspect-square rounded-xl p-2 transition-all text-right relative",
                    !isWorkingDay && "bg-slate-50 text-slate-400",
                    isWorkingDay && "bg-white hover:bg-slate-50 text-slate-900",
                    isToday && "ring-2 ring-primary-500 ring-offset-2",
                    isSelected && "bg-primary-50 border-2 border-primary-500"
                  )}
                >
                  <span className={cn(
                    "text-sm font-medium",
                    isToday && "text-primary-600"
                  )}>
                    {day}
                  </span>
                  {dayEvents.length > 0 && (
                    <div className="absolute bottom-1 left-1 right-1 flex gap-1 justify-center">
                      {dayEvents.slice(0, 3).map((event, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            event.color === "rose" && "bg-rose-500",
                            event.color === "primary" && "bg-primary-500",
                            event.color === "amber" && "bg-amber-500",
                            event.color === "emerald" && "bg-emerald-500"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="text-sm text-slate-600">اختبار</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="text-sm text-slate-600">اجتماع</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm text-slate-600">تكريم</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-600">فعالية</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <span className="text-sm text-slate-600">عطلة</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Date Events */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {selectedDate ? `أحداث ${selectedDate} ${monthNames[month]}` : "الأحداث القادمة"}
            </h3>
            <div className="space-y-3">
              {(selectedDate ? events.filter(e => e.date === selectedDate) : events.slice(0, 4)).map((event, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-2",
                    event.color === "rose" && "bg-rose-500",
                    event.color === "primary" && "bg-primary-500",
                    event.color === "amber" && "bg-amber-500",
                    event.color === "emerald" && "bg-emerald-500"
                  )} />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{event.title}</p>
                    <p className="text-xs text-slate-500">{event.date} {monthNames[month]}</p>
                  </div>
                </div>
              ))}
              {(selectedDate ? events.filter(e => e.date === selectedDate) : events.slice(0, 4)).length === 0 && (
                <p className="text-center text-slate-500 py-4">لا توجد أحداث</p>
              )}
            </div>
          </div>

          {/* Academic Term Info */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <CalendarIcon className="h-6 w-6" />
              <h3 className="text-lg font-bold">الفصل الدراسي الحالي</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-primary-100">بداية الفصل</span>
                <span className="font-medium">1 سبتمبر 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-100">نهاية الفصل</span>
                <span className="font-medium">30 مايو 2025</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-100">أيام الدراسة</span>
                <span className="font-medium">الأحد - الخميس</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-100">الأيام المتبقية</span>
                <span className="text-2xl font-bold">45</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">إحصائيات الشهر</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">أيام الدراسة</p>
                  <p className="font-bold text-slate-900">22 يوم</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-rose-50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-rose-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">الاختبارات</p>
                  <p className="font-bold text-slate-900">4 اختبارات</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">الفعاليات</p>
                  <p className="font-bold text-slate-900">3 فعاليات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
