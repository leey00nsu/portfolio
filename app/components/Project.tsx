import React from "react";
import Image from "next/image";
import { ProjectData } from "../data/ProjectData";
import Dot from "./Dot";
import Paragraph from "./common/Paragraph";
import Heading3 from "./common/Heading3";
import Heading4 from "./common/Heading4";
import A from "./common/A";

const Project = (props: ProjectData) => {
  return (
    <div className="flex flex-col border-b border-gray-400/50 py-10 gap-4">
      {/* 이미지 */}
      <A href={props.url} className="flex h-96 relative">
        <Image
          className="object-cover"
          fill
          src={props.imgSrc}
          alt={props.title}
        />
      </A>

      {/* 타이틀 */}
      <div>
        <Heading3>
          <A href={props.url}>
            {props.title}
            <Dot />
          </A>
        </Heading3>
        <Paragraph size="sm" weight="light">
          {props.role}
        </Paragraph>
        <Paragraph size="sm" weight="light">
          {props.date}
        </Paragraph>
      </div>

      {/* 상세 설명 */}
      <div className="flex flex-col gap-2">
        <div>
          <Heading4>기술 스택</Heading4>
          <Paragraph size="sm" weight="light">
            {props.stack.join(", ")}
          </Paragraph>
        </div>

        <div>
          <Heading4>프로젝트 설명</Heading4>
          <Paragraph size="sm" weight="light">
            {props.description}
          </Paragraph>
        </div>

        <div>
          <Heading4>프로젝트 기여</Heading4>
          <ul>
            {props.contribution.map((contribution) => (
              <li key={contribution}>
                <Paragraph size="sm" weight="light">
                  {contribution}
                </Paragraph>
              </li>
            ))}
          </ul>
        </div>

        {/* 문서 */}
        {props.docs && (
          <div>
            <Heading4>문서</Heading4>
            <ul>
              {props.docs.map((doc) => (
                <Paragraph key={doc.title} size="sm" weight="light">
                  <A href={doc.url}>{doc.title}</A>
                </Paragraph>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
