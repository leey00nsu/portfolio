import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <section className="flex flex-col max-w-6xl">
        <article className="mb-6 ">
          <h1 className="text-5xl font-semibold">안녕하세요.</h1>
          <div className="flex">
            <h1 className="text-5xl font-semibold">발전하는</h1>
            <h1 className="text-5xl font-semibold">개발자 이윤수입니다.</h1>
          </div>
        </article>

        <article className="mb-6 ">
          <p>프론트엔드 개발자로서 유저를 생각하는 UI/UX 구현을 지향합니다.</p>
          <p>
            좋은 프론트엔드 개발자는 유저와 백엔드 개발자, 디자이너간의 중간다리
            역할을 잘 하는 것이라고 믿습니다.
          </p>
          <p>주도적으로 문제를 해결할 수 있는 환경을 선호합니다.</p>
        </article>

        <article className="mb-6 ">
          <h2 className="text-3xl font-semibold">좋아하는 것</h2>
          <ul>
            <li>문제를 해결하는 과정을 좋아합니다.</li>
            <li>더 나은 방식 , Best Practice를 찾는 것을 좋아합니다.</li>
            <li>목적중심적인 개발로 서비스를 빠르게 만드는 것을 좋아합니다.</li>
          </ul>
        </article>

        <article className="mb-6 ">
          <h2 className="text-3xl font-semibold">Side Project</h2>
          <p>문제를 해결하는 과정을 좋아합니다.</p>
          <p>더 나은 방식 , Best Practice를 찾는 것을 좋아합니다.</p>
          <p>목적중심적인 개발로 서비스를 빠르게 만드는 것을 좋아합니다.</p>
        </article>
      </section>
    </main>
  );
}
