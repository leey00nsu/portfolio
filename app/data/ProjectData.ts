export interface ProjectData {
  imgSrc: string;
  url: string;
  title: string;
  role: string;
  date: string;
  stack: string[];
  description: string[];
  contribution: string[];
  docs?: { title: string; url: string }[];
}

export const ProjectData = [
  {
    imgSrc: "/project/artfolio.png",
    url: "https://github.com/leey00nsu/ArtFolio-FE",
    title: "아트폴리오",
    role: "Frontend Developer",
    date: "2023.04 ~ 2023.09",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React-Query",
      "Zustand",
      "Framer-motion",
      "msw",
    ],
    description: ["AI 기반 예술품 경매 서비스"],
    contribution: [
      "React-Query를 통한 실시간 경매",
      "Nivo Chart를 통한 실시간 차트",
      "msw를 이용한 백엔드 API 모킹",
      "Framer-motion을 이용한 웹뷰식 슬라이드 애니메이션",
    ],
    docs: [
      {
        title: "react-query 왜 사용할까?",
        url: "https://blog.leey00nsu.site/blog/react-query-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C",
      },
      {
        title: "nivo chart 사용기",
        url: "https://blog.leey00nsu.site/blog/nivo-chart-%EC%82%AC%EC%9A%A9%EA%B8%B0",
      },
      {
        title: "msw로 모킹하기",
        url: "https://blog.leey00nsu.site/blog/msw%EB%A1%9C-%EB%AA%A8%ED%82%B9%ED%95%98%EA%B8%B0",
      },
      {
        title: "framer-motion으로 슬라이드 애니메이션 구현하기",
        url: "https://blog.leey00nsu.site/blog/framer-motion-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",
      },
      {
        title: "무한스크롤 구현해보기",
        url: "https://blog.leey00nsu.site/blog/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%98-%EA%B5%AC%ED%98%84",
      },
    ],
  },
  {
    imgSrc: "/project/iceberg.png",
    url: "https://github.com/leey00nsu/iceberg-fe",
    title: "Iceberg",
    role: "Frontend Developer",
    date: "2023.05 ~ 2023.06",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React-hook-form",
    ],
    description: ["Github 레포지토리 연동 및 프로젝트 저장 서비스"],
    contribution: [
      "OAuth2.0을 이용한 소셜 로그인",
      "Github API를 이용한 레포지토리 연동",
    ],
    docs: [
      {
        title: "OAuth를 사용해보며",
        url: "https://blog.leey00nsu.site/blog/OAuth%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EB%A9%B0",
      },
      {
        title: "react에서 form을 구현해보자",
        url: "https://blog.leey00nsu.site/blog/react-hook-form",
      },
    ],
  },
  {
    imgSrc: "/project/syuCharacterMaker.png",
    url: "https://github.com/leey00nsu/syu-character-maker",
    title: "나만의 수야 수호 만들기",
    role: "Frontend Developer",
    date: "2023.05",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recoil", "Konva"],
    description: ["나만의 수야 수호를 만들고 공유하는 웹 어플리케이션"],
    contribution: ["Konva를 이용한 그림 그리기 및 레이어 구현"],
    docs: [
      {
        title: "Canvas를 이용해 그림 그리기",
        url: "https://blog.leey00nsu.site/blog/Canvas-%EB%8B%A4%EB%A3%A8%EA%B8%B0",
      },
      {
        title: "리액트에서 CSS 변수 다루기",
        url: "https://blog.leey00nsu.site/blog/CSS-%EB%B3%80%EC%88%98-%EB%8B%A4%EB%A3%A8%EA%B8%B0",
      },
    ],
  },
  {
    imgSrc: "/project/syuClubFest.png",
    url: "https://github.com/leey00nsu/SYU-2023-CLUBFEST-FE",
    title: "삼육대학교 동아리제 페이지",
    role: "Frontend Developer",
    date: "2023.04",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description: ["2023년 삼육대학교 동아리제 홍보 페이지"],
    contribution: ["모바일 웹 레이아웃 구성"],
  },
  {
    imgSrc: "/project/takingMeal.png",
    url: "https://github.com/TakingMeal/TakingMeal",
    title: "밥 한 끼 하자",
    role: "Frontend Developer",
    date: "2022.09",
    stack: ["React Native", "Redux"],
    description: [
      "저소득층 아이들을 위한 급식카드 가맹점 및 선한영향력 가게 제공 어플리케이션",
    ],
    contribution: ["영양성분 데이터 조회 및 그래프", "식단 검색 및 추가 기능"],
    docs: [
      {
        title: "밥 한끼 하자 프로젝트 회고",
        url: "https://blog.leey00nsu.site/article/%EB%B0%A5-%ED%95%9C%EB%81%BC-%ED%95%98%EC%9E%90-%ED%9A%8C%EA%B3%A0",
      },
    ],
  },
];
