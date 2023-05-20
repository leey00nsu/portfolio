import "./globals.css";

export const metadata = {
  title: "이력서",
  description: "이윤수의 이력서 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
