import React from "react";

export interface ExperienceDataProps {
  title: string;
  role: string;
  date: string;
  description: string;
}

const Experience = (props: ExperienceDataProps) => {
  return (
    <div className="flex flex-col border-b border-gray-400/50 py-10 gap-2">
      <div>
        <h4 className="text-2xl font-medium">{props.title}<span className="dot">.</span></h4>
      </div>
      <div>
        <p className="text-md font-light">{props.role}</p>
        <p className="text-md font-light">{props.date}</p>
      </div>
      <div className="flex flex-col ">
        <p className="text-md font-light">{props.description}</p>
      </div>
    </div>
  );
};

export default Experience;
