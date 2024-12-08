import "./globals.css";

export const metadata = {
  title: "السورية الحرة",
  description: "توثيق تاريخ الثورة السورية وأحداثها",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-gradient-to-b from-green-500 via-white to-black text-white">
      <header className="p-4 bg-black bg-opacity-50 fixed w-full z-10">
  <nav className="flex justify-center space-x-4 md:space-x-8">
    <a href="/stories" className="hover:underline px-4 py-2">
      قصص شخصية
    </a>
    <a href="/testimonies" className="hover:underline px-4 py-2">
      شهادات حية
    </a>
    <a href="/martyrs" className="hover:underline px-4 py-2">
      الشهداء
    </a>
    <a href="/art" className="hover:underline px-4 py-2">
      القسم الفني
    </a>
    <a href="/donation" className="hover:underline px-4 py-2">
      التبرع
    </a>
    <a href="/hope" className="hover:underline px-4 py-2">
      رسائل أمل
    </a>
    <a href="/heritage" className="hover:underline px-4 py-2">
      توثيق التراث
    </a>
  </nav>
</header>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
