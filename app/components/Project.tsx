import React from "react";
import Image from "next/image";
import { ProjectData } from "../data/ProjectData";
import Dot from "./Dot";

const Project = (props: ProjectData) => {
  return (
    <div className="flex flex-col border-b border-gray-400/50 py-10 gap-4">
      {/* 이미지 */}
      <a href={props.url} target="_blank" className="flex h-96 relative">
        <Image
          className="object-cover"
          fill
          src={props.imgSrc}
          alt={props.title}
        />
      </a>

      {/* 타이틀 */}
      <div>
        <h4 className="text-2xl font-medium">
          <a href={props.url} target="_blank" className="external-link">
            {props.title}
            <Dot />
          </a>
        </h4>
        <p className="text-md font-light">{props.role}</p>
        <p className="text-md font-light">{props.date}</p>
      </div>

      {/* 상세 설명 */}
      <div className="flex flex-col gap-2">
        <div>
          <h6 className="text-lg font-medium">기술 스택</h6>
          <p className="text-md font-light">{props.stack.join(", ")}</p>
        </div>

        <div>
          <h6 className="text-lg font-medium">프로젝트 설명</h6>
          <p className="text-md font-light">{props.description}</p>
        </div>

        <div>
          <h6 className="text-lg font-medium">프로젝트 기여</h6>
          <ul>
            {props.contribution.map((contribution) => (
              <li key={contribution} className="text-md font-light">
                {contribution}
              </li>
            ))}
          </ul>
        </div>

        {/* 문서 */}
        {props.docs && (
          <div>
            <h6 className="text-lg font-medium">문서</h6>
            <ul>
              {props.docs.map((doc) => (
                <div key={doc.title}>
                  <a
                    target="_blank"
                    href={doc.url}
                    className="text-md font-light external-link"
                  >
                    {doc.title}
                  </a>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
