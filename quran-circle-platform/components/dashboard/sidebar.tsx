"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

interface SidebarProps {
  role: "SUPERVISOR" | "TEACHER";
}

const supervisorLinks = [
  { href: "/supervisor", label: "الرئيسية", icon: LayoutDashboard },
  { href: "/supervisor/students", label: "الطلاب", icon: Users },
  { href: "/supervisor/teachers", label: "المعلمين", icon: GraduationCap },
  { href: "/supervisor/calendar", label: "التقويم", icon: Calendar },
  { href: "/supervisor/reports", label: "التقارير", icon: BarChart3 },
  { href: "/supervisor/settings", label: "الإعدادات", icon: Settings },
];

const teacherLinks = [
  { href: "/teacher", label: "الرئيسية", icon: LayoutDashboard },
  { href: "/teacher/students", label: "طلابي", icon: Users },
  { href: "/teacher/progress", label: "تسجيل الإنجاز", icon: BookOpen },
  { href: "/teacher/reports", label: "التقارير", icon: BarChart3 },
];

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = role === "SUPERVISOR" ? supervisorLinks : teacherLinks;

  return (
    <aside className="fixed right-0 top-0 z-40 h-screen w-72 bg-white border-l border-slate-200">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-slate-100 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/30">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">حلقتي</h1>
              <p className="text-xs text-slate-500">منصة حلقات القرآن</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary-50 text-primary-700 shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <Icon className={cn("h-5 w-5", isActive ? "text-primary-600" : "text-slate-400")} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User & Logout */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-sm font-bold text-primary-700">أم</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">أحمد المحمد</p>
              <p className="text-xs text-slate-500">
                {role === "SUPERVISOR" ? "مشرف" : "معلم"}
              </p>
            </div>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50">
            <LogOut className="h-5 w-5" />
            تسجيل الخروج
          </button>
        </div>
      </div>
    </aside>
  );
}
