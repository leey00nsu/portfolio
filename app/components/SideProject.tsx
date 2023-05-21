import React from "react";
import Image from "next/image";
import { sideProjectData } from "../data/sideProjectData";

export interface SideProjectDataProps {
  imgSrc: string;
  url: string;
  title: string;
  role: string;
  date: string;
  stack: string[];
  description: string[];
  contribution: string[];
}

const SideProject = (props: SideProjectDataProps) => {
  return (
    <div className="flex flex-col border-b border-gray-400/50 py-10 gap-4">
      <a href={props.url} className="flex h-96 relative">
        <Image
          className=" object-cover"
          fill
          src={props.imgSrc}
          alt={props.title}
        />
      </a>
      <div>
        <h4 className="text-2xl font-medium">
          {props.title}
          <span className="dot">.</span>
        </h4>
        <p className="text-md font-light">{props.role}</p>
        <p className="text-md font-light">{props.date}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h6 className="text-lg font-medium">기술 스택</h6>
          <p className="text-md font-light">{props.stack.join(",")}</p>
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
      </div>
    </div>
  );
};

export default SideProject;
