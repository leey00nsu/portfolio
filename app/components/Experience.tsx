import React from "react";
import Dot from "./Dot";
import { ExperienceData } from "../data/experienceData";

const Experience = (props: ExperienceData) => {
  return (
    <div className="flex flex-col border-b border-gray-400/50 py-10 gap-2">
      <div>
        <h4 className="text-2xl font-medium">
          {props.title}
          <Dot />
        </h4>
      </div>
      <div>
        <p className="text-md font-light">{props.role}</p>
        <p className="text-md font-light">{props.date}</p>
      </div>
      <div className="flex flex-col ">
        <p className="text-md font-light">{props.description}</p>
      </div>
      {/* 후기 */}
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
  );
};

export default Experience;
