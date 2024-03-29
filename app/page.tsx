import Image from "next/image";
import Project from "./components/Project";
import { ProjectData } from "./data/ProjectData";
import Experience from "./components/Experience";
import { experienceData } from "./data/experienceData";
import ScrollText from "./components/ScrollText";
import Dot from "./components/Dot";
import Paragraph from "./components/common/Paragraph";
import Heading1 from "./components/common/Heading1";
import Heading2 from "./components/common/Heading2";

export default function Home() {
  return (
    <main className="flex justify-center py-20">
      <section className="flex flex-col max-w-md sm:max-w-xl lg:max-w-4xl  gap-12">
        {/* 인삿말 */}
        <article>
          <Heading1>
            안녕하세요
            <Dot />
          </Heading1>
          <div className="flex gap-2">
            <ScrollText />
            <Heading1>
              개발자 이윤수입니다
              <Dot />
            </Heading1>
          </div>
        </article>

        {/* 소개 */}
        <article>
          <Paragraph size="base" weight="medium">
            프론트엔드 개발자로서 유저를 생각하는 UI/UX 구현을 지향합니다.
          </Paragraph>
          <Paragraph size="base" weight="medium">
            좋은 프론트엔드 개발자는 유저와 백엔드 개발자, 기획자, 디자이너간의
            중간점이 되는 것이라고 믿습니다.
          </Paragraph>
          <Paragraph size="base" weight="medium">
            주도적으로 문제를 해결할 수 있는 환경을 선호합니다.
          </Paragraph>
        </article>

        {/* 좋아하는 것 */}
        <article>
          <Heading2 className="mb-2">
            Like
            <Dot />
          </Heading2>
          <Paragraph size="sm" weight="light">
            문제를 해결하는 과정을 좋아합니다.
          </Paragraph>
          <Paragraph size="sm" weight="light">
            더 나은 방식 , Best Practice를 찾는 것을 좋아합니다.
          </Paragraph>
          <Paragraph size="sm" weight="light">
            목적중심적인 개발로 서비스를 빠르게 만드는 것을 좋아합니다.
          </Paragraph>
        </article>

        {/* 프로젝트 */}
        <article>
          <Heading2>
            Project
            <Dot />
          </Heading2>

          {ProjectData.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </article>

        {/* 경험 */}
        <article>
          <Heading2>
            Experience
            <Dot />
          </Heading2>

          {experienceData.map((experience) => (
            <Experience key={experience.title} {...experience} />
          ))}
        </article>

        <div className="flex items-center justify-center gap-2">
          <a href="https://github.com/leey00nsu" target="_blank">
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
          </a>
          <a href="https://blog.leey00nsu.site/" target="_blank">
            <img src="https://img.shields.io/badge/blog-%23121011.svg?style=for-the-badge&logoColor=white" />
          </a>
        </div>
      </section>
    </main>
  );
}
