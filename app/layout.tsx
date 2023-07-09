import "./globals.css";

export const metadata = {
  title: "포트폴리오",
  description: "이윤수의 포트폴리오 입니다.",
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
