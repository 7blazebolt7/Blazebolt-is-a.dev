export type UserRole = 'SUPERVISOR' | 'TEACHER' | 'STUDENT';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  centerId?: string;
  image?: string;
  createdAt: Date;
}

export interface Center {
  id: string;
  name: string;
  location: string;
  supervisorId: string;
  subscriptionStatus: 'ACTIVE' | 'PENDING' | 'EXPIRED';
  createdAt: Date;
}

export interface Student {
  id: string;
  name: string;
  centerId: string;
  uniqueLinkToken: string;
  dailyTargetLines: number;
  revisionTargetPages: number;
  teacherId?: string;
  createdAt: Date;
  // Joined fields
  teacher?: User;
  center?: Center;
}

export interface DailyProgress {
  id: string;
  studentId: string;
  date: Date;
  memorizationLines: number;
  revisionPages: number;
  notes?: string;
  teacherId: string;
  createdAt: Date;
  // Joined fields
  student?: Student;
  teacher?: User;
}

export interface AcademicCalendar {
  id: string;
  centerId: string;
  termStart: Date;
  termEnd: Date;
  workingDays: number[]; // 0-6 (Sunday-Saturday)
  holidays: Date[];
  createdAt: Date;
}

export interface WeeklyReport {
  id: string;
  studentId: string;
  weekStart: Date;
  weekEnd: Date;
  totalMemorized: number;
  totalRevision: number;
  attendanceDays: number;
  workingDays: number;
  completionRate: number;
  createdAt: Date;
}

export interface DashboardStats {
  totalStudents: number;
  activeStudents: number;
  todayProgress: number;
  weeklyAverage: number;
  topPerformers: StudentWithStats[];
  recentActivity: ActivityItem[];
}

export interface StudentWithStats extends Student {
  thisWeekProgress: number;
  completionRate: number;
  streak: number;
  lastActivity: Date;
}

export interface ActivityItem {
  id: string;
  type: 'PROGRESS' | 'REPORT' | 'LOGIN';
  description: string;
  userName: string;
  timestamp: Date;
}

export interface StudentPublicProfile {
  student: Student;
  recentProgress: DailyProgress[];
  weeklyStats: {
    weekStart: Date;
    memorized: number;
    revision: number;
    rate: number;
  }[];
  currentStreak: number;
  bestStreak: number;
}
