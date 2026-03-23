import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, startOfWeek, addDays, isSameDay, differenceInDays } from "date-fns";
import { ar } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUniqueToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

export function formatDate(date: Date, locale: string = 'ar'): string {
  return format(date, "dd MMMM yyyy", { locale: locale === 'ar' ? ar : undefined });
}

export function formatShortDate(date: Date): string {
  return format(date, "dd/MM/yyyy");
}

export function getWeekDays(startDate: Date = new Date()): Date[] {
  const start = startOfWeek(startDate, { weekStartsOn: 0 });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function calculateCompletionRate(actual: number, target: number): number {
  if (target === 0) return 0;
  return Math.min(Math.round((actual / target) * 100), 100);
}

export function getProgressColor(rate: number): string {
  if (rate >= 90) return "text-emerald-600 bg-emerald-50";
  if (rate >= 70) return "text-amber-600 bg-amber-50";
  return "text-rose-600 bg-rose-50";
}

export function getProgressBarColor(rate: number): string {
  if (rate >= 90) return "bg-emerald-500";
  if (rate >= 70) return "bg-amber-500";
  return "bg-rose-500";
}

export function calculateStreak(progress: { date: Date; memorizationLines: number }[]): number {
  if (!progress.length) return 0;

  const sorted = [...progress].sort((a, b) => b.date.getTime() - a.date.getTime());
  let streak = 0;
  let currentDate = new Date();

  for (const entry of sorted) {
    if (isSameDay(entry.date, currentDate) || 
        (streak === 0 && differenceInDays(currentDate, entry.date) === 1)) {
      if (entry.memorizationLines > 0) {
        streak++;
        currentDate = entry.date;
      } else {
        break;
      }
    } else if (differenceInDays(currentDate, entry.date) > 1) {
      break;
    }
  }

  return streak;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "صباح الخير";
  if (hour < 18) return "مساء الخير";
  return "مساء الخير";
}

export const arabicDays = [
  "الأحد",
  "الإثنين", 
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت"
];

export function getArabicDayName(date: Date): string {
  return arabicDays[date.getDay()];
}
