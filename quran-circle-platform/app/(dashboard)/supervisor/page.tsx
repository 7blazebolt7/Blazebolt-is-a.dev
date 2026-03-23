"use client";

import { StatsCard } from "@/components/dashboard/stats-card";
import { StudentCard } from "@/components/dashboard/student-card";
import { Button } from "@/components/ui/button";
import { mockDashboardStats, mockStudents } from "@/lib/mock-data";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Activity,
  Plus,
  ArrowLeft,
  Flame,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function SupervisorDashboard() {
  const stats = mockDashboardStats;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">لوحة التحكم</h1>
          <p className="text-slate-500 mt-1">نظرة عامة على أداء الحلقة</p>
        </div>
        <Link href="/supervisor/students/new">
          <Button className="gap-2">
            <Plus className="h-5 w-5" />
            طالب جديد
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="إجمالي الطلاب"
          value={stats.totalStudents}
          description="طالب مسجل"
          trend="up"
          trendValue="12%"
          icon={<Users className="h-6 w-6" />}
          color="primary"
        />
        <StatsCard
          title="الطلاب النشطين"
          value={stats.activeStudents}
          description="طالب نشط هذا الأسبوع"
          trend="up"
          trendValue="5%"
          icon={<Activity className="h-6 w-6" />}
          color="success"
        />
        <StatsCard
          title="إنجاز اليوم"
          value={stats.todayProgress}
          description="طالب سجل إنجاز"
          trend="neutral"
          trendValue="92%"
          icon={<Calendar className="h-6 w-6" />}
          color="info"
        />
        <StatsCard
          title="المعدل الأسبوعي"
          value={`${stats.weeklyAverage}%`}
          description="معدل الإنجاز العام"
          trend="up"
          trendValue="3%"
          icon={<TrendingUp className="h-6 w-6" />}
          color="warning"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Top Performers */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">أفضل الطلاب أداءً</h2>
            <Link href="/supervisor/students">
              <Button variant="ghost" className="gap-2">
                عرض الكل
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.topPerformers.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">إجراءات سريعة</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/supervisor/progress">
                <Button variant="secondary" className="w-full justify-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="text-right">
                    <div className="font-medium">تسجيل إنجاز</div>
                    <div className="text-xs text-slate-500">للطلاب</div>
                  </div>
                </Button>
              </Link>
              <Link href="/supervisor/reports">
                <Button variant="secondary" className="w-full justify-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent-50 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-accent-600" />
                  </div>
                  <div className="text-right">
                    <div className="font-medium">التقارير</div>
                    <div className="text-xs text-slate-500">الأسبوعية</div>
                  </div>
                </Button>
              </Link>
              <Link href="/supervisor/calendar">
                <Button variant="secondary" className="w-full justify-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-right">
                    <div className="font-medium">التقويم</div>
                    <div className="text-xs text-slate-500">الدراسي</div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">النشاط الأخير</h3>
            <div className="space-y-4">
              {stats.recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-700">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                      <span>{activity.userName}</span>
                      <span>•</span>
                      <span>منذ ساعة</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Streaks */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-6 w-6" />
              <h3 className="text-lg font-bold">أعلى متتالية</h3>
            </div>
            <div className="text-4xl font-bold mb-2">15 يوم</div>
            <p className="text-amber-100 text-sm">محمد عبدالله يحافظ على إنجازه اليومي</p>
          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900">مواعيد قادمة</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <p className="font-medium text-slate-900">اختبار شهري</p>
                  <p className="text-xs text-slate-500">جميع الطلاب</p>
                </div>
                <span className="text-sm text-primary-600 font-medium">الخميس</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <p className="font-medium text-slate-900">اجتماع المعلمين</p>
                  <p className="text-xs text-slate-500">مبنى الحلقة</p>
                </div>
                <span className="text-sm text-primary-600 font-medium">السبت</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
