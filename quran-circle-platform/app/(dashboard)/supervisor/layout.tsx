import { Sidebar } from "@/components/dashboard/sidebar";

export default function SupervisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar role="SUPERVISOR" />
      <main className="mr-72 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
