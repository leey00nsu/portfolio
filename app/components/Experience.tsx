import React from "react";
import Dot from "./Dot";
import { ExperienceData } from "../data/experienceData";
import Paragraph from "./common/Paragraph";
import Heading3 from "./common/Heading3";
import Heading4 from "./common/Heading4";
import A from "./common/A";

const Experience = (props: ExperienceData) => {
  return (
    <div className="flex flex-col border-b border-gray-400/50 py-10 gap-2">
      <div>
        <Heading3>
          {props.title}
          <Dot />
        </Heading3>
      </div>
      <div>
        <Paragraph size="sm" weight="light">
          {props.role}
        </Paragraph>
        <Paragraph size="sm" weight="light">
          {props.date}
        </Paragraph>
      </div>
      <div className="flex flex-col ">
        <Paragraph size="sm" weight="light">
          {props.description}
        </Paragraph>
      </div>
      {/* 후기 */}
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
  );
};

export default Experience;
