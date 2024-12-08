import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "السورية الحرة",
  description: "توثيق تاريخ الثورة السورية وأحداثها",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-gradient-to-b from-green-500 via-white to-black text-white flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
