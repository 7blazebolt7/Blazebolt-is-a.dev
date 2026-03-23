"use client";

import { useState } from "react";
import { mockStudents } from "@/lib/mock-data";
import { StudentCard } from "@/components/dashboard/student-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Grid3X3, 
  List,
  Download,
  Users
} from "lucide-react";
import Link from "next/link";

export default function StudentsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = mockStudents.filter((student) => {
    return student.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">الطلاب</h1>
          <p className="text-slate-500 mt-1">إدارة بيانات طلاب الحلقة</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="gap-2">
            <Download className="h-4 w-4" />
            تصدير
          </Button>
          <Link href="/supervisor/students/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              طالب جديد
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary-600" />
          <span className="text-sm text-slate-600">إجمالي الطلاب:</span>
          <span className="font-bold text-slate-900">{mockStudents.length}</span>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2">
          <Badge variant="success">42 نشط</Badge>
          <Badge variant="warning">3 غائب</Badge>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            placeholder="البحث عن طالب..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="secondary"
            size="sm"
          >
            الكل
          </Button>
          <div className="w-px h-8 bg-slate-200 mx-2" />
          <Button
            variant={viewMode === "grid" ? "primary" : "ghost"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-5 w-5" />
          </Button>
          <Button
            variant={viewMode === "list" ? "primary" : "ghost"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Students Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard 
              key={student.id} 
              student={{
                ...student,
                completionRate: Math.floor(Math.random() * 40) + 60,
                streak: Math.floor(Math.random() * 10),
              }} 
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="divide-y divide-slate-100">
            {filteredStudents.map((student) => (
              <StudentCard 
                key={student.id} 
                student={{
                  ...student,
                  completionRate: Math.floor(Math.random() * 40) + 60,
                  streak: Math.floor(Math.random() * 10),
                }}
                viewMode="list"
              />
            ))}
          </div>
        </div>
      )}

      {filteredStudents.length === 0 && (
        <div className="text-center py-16">
          <div className="h-20 w-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <Search className="h-10 w-10 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">لا توجد نتائج</h3>
          <p className="text-slate-500">جرب البحث بكلمات مختلفة</p>
        </div>
      )}
    </div>
  );
}
