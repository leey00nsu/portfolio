import Image from "next/image";
import SideProject from "./components/SideProject";
import { sideProjectData } from "./data/sideProjectData";
import Experience from "./components/Experience";
import { experienceData } from "./data/experienceData";
import ScrollText from "./components/ScrollText";

export default function Home() {
  return (
    <main className="flex justify-center py-20">
      <section className="flex flex-col max-w-xl md:max-w-3xl 3xl:max-w-6xl gap-12">
        {/* 인삿말 */}
        <article>
          <h1 className="text-4xl lg:text-6xl font-semibold">안녕하세요.</h1>
          <div className="flex gap-2">
            <ScrollText />

            <h1 className="text-4xl lg:text-6xl font-semibold">
              개발자 이윤수입니다<span className="dot">.</span>
            </h1>
          </div>
        </article>

        {/* 소개 */}
        <article>
          <p className=" text-base lg:text-2xl font-medium">
            프론트엔드 개발자로서 유저를 생각하는 UI/UX 구현을 지향합니다.
          </p>
          <p className="text-base lg:text-2xl font-medium">
            좋은 프론트엔드 개발자는 유저와 백엔드 개발자, 기획자, 디자이너간의
            중간점 역할을 잘 하는 것이라고 믿습니다.
          </p>
          <p className="text-base lg:text-2xl font-medium">
            주도적으로 문제를 해결할 수 있는 환경을 선호합니다.
          </p>
        </article>

        {/* 좋아하는 것 */}
        <article>
          <h2 className="text-3xl font-semibold mb-2">
            좋아하는 것<span className="dot">.</span>
          </h2>
          <p className="text-md font-light">
            문제를 해결하는 과정을 좋아합니다.
          </p>
          <p className="text-md font-light">
            더 나은 방식 , Best Practice를 찾는 것을 좋아합니다.
          </p>
          <p className="text-md font-light">
            목적중심적인 개발로 서비스를 빠르게 만드는 것을 좋아합니다.
          </p>
        </article>

        {/* 사이드 프로젝트 */}
        <article>
          <h2 className="text-3xl font-semibold">
            Side Project<span className="dot">.</span>
          </h2>

          {sideProjectData.map((project) => (
            <SideProject key={project.title} {...project} />
          ))}
        </article>

        {/* 경험 */}
        <article>
          <h2 className="text-3xl font-semibold">
            Experience<span className="dot">.</span>
          </h2>

          {experienceData.map((experience) => (
            <Experience key={experience.title} {...experience} />
          ))}
        </article>
      </section>
    </main>
  );
}
