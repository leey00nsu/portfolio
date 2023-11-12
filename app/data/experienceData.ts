export interface ExperienceData {
  title: string;
  role: string;
  date: string;
  description: string;
  docs?: { title: string; url: string }[];
}

export const experienceData = [
  {
    title: "멋쟁이사자처럼",
    role: "멤버,운영진",
    date: "2022 ~ 2023",
    description:
      "멋쟁이사자처럼 삼육대에서 2022년에 멤버로 활동하였고, 쌓은 지식을 기반으로 운영진으로 활동하였습니다. 프론트엔드 파트를 맡으며 세션 강의 및 동아리 활동을 지원하고 있습니다.",
    docs: [
      {
        title: "react 세션 - TODO 리스트 만들기",
        url: "https://www.youtube.com/watch?v=1c94yAUNE5Q&feature=youtu.be&ab_channel=%EC%9D%B4%EC%9C%A4%EC%88%98",
      },
      {
        title: "react 세션 - MBTI 테스트 만들기",
        url: "https://www.youtube.com/watch?si=6XvzWzSVobQ8c2de&v=QnetBbp3Ndk&feature=youtu.be",
      },
    ],
  },
  {
    title: "GDSC",
    role: "멤버",
    date: "2022 ~ 2023",
    description:
      "Google Developer Student Clubs 삼육대에서 멤버로 활동하며 세션과 스터디에 참여하고 있습니다.",
  },
  {
    title: "삼육대학교",
    role: "컴퓨터공학과",
    date: "2022.03 ~ 2024.02",
    description:
      "2022년에 컴퓨터공학과로 편입하여 자료구조, 알고리즘, 데이터베이스 등을 배우며 기초를 중시하는 개발자를 지향하고 있습니다.",
  },
];
