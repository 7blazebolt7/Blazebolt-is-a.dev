"use client";

import { useState } from "react";
import { mockStudents } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Search, 
  CheckCircle2, 
  BookOpen,
  RotateCcw,
  Calendar,
  ChevronLeft
} from "lucide-react";

export default function ProgressPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [progressData, setProgressData] = useState<Record<string, { memorization: number; revision: number; notes: string }>>({});

  const filteredStudents = mockStudents.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStudent = (studentId: string) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const updateProgress = (studentId: string, field: string, value: any) => {
    setProgressData(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value
      }
    }));
  };

  const handleSubmitAll = () => {
    alert(`تم تسجيل إنجاز ${selectedStudents.length} طالب بنجاح!`);
    setSelectedStudents([]);
    setProgressData({});
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">تسجيل الإنجاز</h1>
          <p className="text-slate-500 mt-1">تسجيل حفظ ومراجعة الطلاب</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedStudents.length > 0 && (
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary-600" />
            <span className="font-medium text-primary-900">
              تم اختيار {selectedStudents.length} طالب
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => setSelectedStudents([])}>
              إلغاء
            </Button>
            <Button size="sm" onClick={handleSubmitAll}>
              تسجيل الإنجاز
            </Button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <Input
          placeholder="البحث عن طالب..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10"
        />
      </div>

      {/* Students List */}
      <div className="space-y-4">
        {filteredStudents.map((student) => {
          const isSelected = selectedStudents.includes(student.id);
          const progress = progressData[student.id] || { memorization: 0, revision: 0, notes: "" };

          return (
            <div 
              key={student.id}
              className={cn(
                "bg-white rounded-2xl border transition-all duration-200",
                isSelected ? "border-primary-500 shadow-md shadow-primary-500/10" : "border-slate-100"
              )}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleStudent(student.id)}
                    className={cn(
                      "h-6 w-6 rounded-lg border-2 flex items-center justify-center transition-colors",
                      isSelected 
                        ? "bg-primary-600 border-primary-600 text-white" 
                        : "border-slate-300 hover:border-primary-400"
                    )}
                  >
                    {isSelected && <CheckCircle2 className="h-4 w-4" />}
                  </button>

                  {/* Student Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{student.name}</h3>
                          <p className="text-sm text-slate-500">
                            الهدف: {student.dailyTargetLines} أسطر | {student.revisionTargetPages} وجه مراجعة
                          </p>
                        </div>
                      </div>
                      <Badge variant={isSelected ? "info" : "default"}>
                        {isSelected ? "جاهز للتسجيل" : "لم يتم التسجيل"}
                      </Badge>
                    </div>

                    {/* Progress Inputs - Show when selected */}
                    {isSelected && (
                      <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 animate-fade-in">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            الحفظ (أسطر)
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min="0"
                              max="20"
                              value={progress.memorization}
                              onChange={(e) => updateProgress(student.id, 'memorization', parseInt(e.target.value))}
                              className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                            />
                            <span className="w-10 text-center font-bold text-slate-900 bg-slate-100 rounded-lg py-1">
                              {progress.memorization}
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            المراجعة (أوجه)
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min="0"
                              max="10"
                              value={progress.revision}
                              onChange={(e) => updateProgress(student.id, 'revision', parseInt(e.target.value))}
                              className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
                            />
                            <span className="w-10 text-center font-bold text-slate-900 bg-slate-100 rounded-lg py-1">
                              {progress.revision}
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            ملاحظات
                          </label>
                          <input
                            type="text"
                            placeholder="أضف ملاحظة..."
                            value={progress.notes}
                            onChange={(e) => updateProgress(student.id, 'notes', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-16">
          <div className="h-20 w-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <Search className="h-10 w-10 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">لا توجد نتائج</h3>
        </div>
      )}
    </div>
  );
}
