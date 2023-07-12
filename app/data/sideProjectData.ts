export interface SideProjectData {
  imgSrc: string;
  url: string;
  title: string;
  role: string;
  date: string;
  stack: string[];
  description: string[];
  contribution: string[];
  review?: { title: string; url: string }[];
}

export const sideProjectData = [
  {
    imgSrc: "/artfolio.png",
    url: "https://github.com/SW-Contest/ArtFolio-FE",
    title: "아트폴리오",
    role: "Frontend Developer",
    date: "2023.04 ~ (진행중)",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React-Query",
      "Zustand",
      "msw",
    ],
    description: ["청년 예술가를 위한 예술품 큐레이팅 경매 서비스"],
    contribution: [
      "React-Query를 통한 무한 스크롤",
      "Nivo Chart 라이브러리를 통한 차트",
      "msw를 이용한 백엔드 API 모킹",
      "모바일 웹 레이아웃 구성",
    ],
  },
  {
    imgSrc: "/syuCharacterMaker.png",
    url: "https://github.com/leey00nsu/syu-character-maker",
    title: "나만의 수야 수호 만들기",
    role: "Frontend Developer",
    date: "2023.04",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recoil", "Konva"],
    description: ["나만의 수야 수호를 만들고 공유하는 웹 어플리케이션"],
    contribution: ["Konva를 이용한 그림 그리기 및 레이어 구현"],
    review: [
      {
        title: "Canvas를 이용해 그림 그리기",
        url: "https://leeyoonsu-blog.vercel.app/Canvas-%EB%8B%A4%EB%A3%A8%EA%B8%B0",
      },
      {
        title: "리액트에서 CSS 변수 다루기",
        url: "https://leeyoonsu-blog.vercel.app/CSS-%EB%B3%80%EC%88%98-%EB%8B%A4%EB%A3%A8%EA%B8%B0",
      },
    ],
  },
  {
    imgSrc: "/syuclubfest.png",
    url: "https://github.com/leey00nsu/SYU-2023-CLUBFEST-FE",
    title: "삼육대학교 동아리제 페이지",
    role: "Frontend Developer",
    date: "2023.04",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description: ["2023년 삼육대학교 동아리제 홍보 페이지"],
    contribution: ["모바일 웹 레이아웃 구성"],
  },
  {
    imgSrc: "/takingMeal.jpg",
    url: "https://github.com/TakingMeal/TakingMeal",
    title: "밥 한 끼 하자",
    role: "Frontend Developer",
    date: "2022.09",
    stack: ["React Native", "Redux"],
    description: [
      "저소득층 아이들을 위한 급식카드 가맹점 및 선한영향력 가게 제공 어플리케이션",
    ],
    contribution: ["영양성분 데이터 조회 및 그래프", "식단 검색 및 추가 기능"],
    review: [
      {
        title: "밥 한끼 하자 프로젝트 회고",
        url: "https://leeyoonsu-blog.vercel.app/%EB%B0%A5-%ED%95%9C%EB%81%BC-%ED%95%98%EC%9E%90",
      },
    ],
  },
];
