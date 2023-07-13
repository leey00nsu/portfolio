import "./globals.css";

export const metadata = {
  title: "이윤수의 포트폴리오",
  description: "이윤수의 포트폴리오 입니다.",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "이윤수의 포트폴리오",
    description: "이윤수의 포트폴리오 입니다.",
    url: "https://leeyoonsu-portfolio.vercel.app/",
    siteName: "이윤수의 포트폴리오",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
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
