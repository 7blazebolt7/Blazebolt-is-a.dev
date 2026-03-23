import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "حلقتي - منصة إدارة حلقات القرآن",
  description: "منصة رقمية متكاملة لإدارة حلقات القرآن الكريم ومتابعة تقدم الطلاب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic">
        {children}
      </body>
    </html>
  );
}
