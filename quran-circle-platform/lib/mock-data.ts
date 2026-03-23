import { User, Student, DailyProgress, DashboardStats, UserRole, Center } from "@/types";

export const mockUsers: User[] = [
  {
    id: "1",
    email: "supervisor@center.com",
    name: "أحمد المحمد",
    role: "SUPERVISOR",
    centerId: "center1",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    email: "teacher1@center.com",
    name: "خالد العمري",
    role: "TEACHER",
    centerId: "center1",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "3",
    email: "teacher2@center.com",
    name: "سعد الشمري",
    role: "TEACHER",
    centerId: "center1",
    createdAt: new Date("2024-01-01"),
  },
];

export const mockCenter: Center = {
  id: "center1",
  name: "حلقة الفرقان",
  location: "الرياض",
  supervisorId: "1",
  subscriptionStatus: "ACTIVE",
  createdAt: new Date("2024-01-01"),
};

export const mockStudents: Student[] = [
  {
    id: "s1",
    name: "محمد عبدالله",
    centerId: "center1",
    uniqueLinkToken: "abc123xyz",
    dailyTargetLines: 5,
    revisionTargetPages: 1,
    teacherId: "2",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "s2",
    name: "فهد سالم",
    centerId: "center1",
    uniqueLinkToken: "def456uvw",
    dailyTargetLines: 7,
    revisionTargetPages: 2,
    teacherId: "2",
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "s3",
    name: "عبدالرحمن محمد",
    centerId: "center1",
    uniqueLinkToken: "ghi789rst",
    dailyTargetLines: 4,
    revisionTargetPages: 1,
    teacherId: "3",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "s4",
    name: "سعد أحمد",
    centerId: "center1",
    uniqueLinkToken: "jkl012opq",
    dailyTargetLines: 6,
    revisionTargetPages: 1,
    teacherId: "3",
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "s5",
    name: "ناصر علي",
    centerId: "center1",
    uniqueLinkToken: "mno345lmn",
    dailyTargetLines: 5,
    revisionTargetPages: 2,
    teacherId: "2",
    createdAt: new Date("2024-02-15"),
  },
];

export const mockProgress: DailyProgress[] = [
  {
    id: "p1",
    studentId: "s1",
    date: new Date(),
    memorizationLines: 5,
    revisionPages: 1,
    notes: "أداء ممتاز",
    teacherId: "2",
    createdAt: new Date(),
  },
  {
    id: "p2",
    studentId: "s2",
    date: new Date(),
    memorizationLines: 6,
    revisionPages: 2,
    notes: "",
    teacherId: "2",
    createdAt: new Date(),
  },
  {
    id: "p3",
    studentId: "s3",
    date: new Date(),
    memorizationLines: 4,
    revisionPages: 1,
    notes: "يحتاج مراجعة",
    teacherId: "3",
    createdAt: new Date(),
  },
  {
    id: "p4",
    studentId: "s1",
    date: new Date(Date.now() - 86400000),
    memorizationLines: 5,
    revisionPages: 1,
    notes: "",
    teacherId: "2",
    createdAt: new Date(Date.now() - 86400000),
  },
  {
    id: "p5",
    studentId: "s2",
    date: new Date(Date.now() - 86400000),
    memorizationLines: 7,
    revisionPages: 2,
    notes: "ممتاز",
    teacherId: "2",
    createdAt: new Date(Date.now() - 86400000),
  },
];

export const mockDashboardStats: DashboardStats = {
  totalStudents: 45,
  activeStudents: 42,
  todayProgress: 38,
  weeklyAverage: 87,
  topPerformers: [
    {
      ...mockStudents[1],
      thisWeekProgress: 35,
      completionRate: 95,
      streak: 12,
      lastActivity: new Date(),
    },
    {
      ...mockStudents[0],
      thisWeekProgress: 30,
      completionRate: 92,
      streak: 8,
      lastActivity: new Date(),
    },
    {
      ...mockStudents[3],
      thisWeekProgress: 28,
      completionRate: 88,
      streak: 5,
      lastActivity: new Date(Date.now() - 86400000),
    },
  ],
  recentActivity: [
    {
      id: "a1",
      type: "PROGRESS",
      description: "تم تسجيل إنجاز جديد لـ محمد عبدالله",
      userName: "خالد العمري",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "a2",
      type: "PROGRESS",
      description: "تم تسجيل إنجاز جديد لـ فهد سالم",
      userName: "خالد العمري",
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: "a3",
      type: "REPORT",
      description: "تم إنشاء التقرير الأسبوعي",
      userName: "أحمد المحمد",
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "a4",
      type: "PROGRESS",
      description: "تم تسجيل إنجاز جديد لـ عبدالرحمن",
      userName: "سعد الشمري",
      timestamp: new Date(Date.now() - 90000000),
    },
  ],
};

export function getStudentProgress(studentId: string): DailyProgress[] {
  return mockProgress.filter((p) => p.studentId === studentId);
}

export function getTeacherStudents(teacherId: string): Student[] {
  return mockStudents.filter((s) => s.teacherId === teacherId);
}

export function getStudentByToken(token: string): Student | undefined {
  return mockStudents.find((s) => s.uniqueLinkToken === token);
}
