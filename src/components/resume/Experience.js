import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SEEKDAILY WEBSITE"
            subTitle="COMPANY: Church-Unity 2019-2020"
            result="IBADAN"
            des="Description:As a Web-Developer at Church-Unity, I played a pivotal role in designing the UI/UX and the interface of a complete website for the church across various industries."
          />
          <ResumeCard
            title="STILL LOADING......."
            subTitle="Still Loading......."
            result="Pending"
            des="Still Loading..................."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SENIOR DEVELOPER"
            subTitle="Cloudware Technology (2023 - 2024)"
            result="ASHI"
            des="The training provided by the company in order to prepare students to work and to familiar to the tech world."
          />
          <ResumeCard
            title="STILL LOADING......."
            subTitle="Still Loading......."
            result="Pending"
            des="Still Loading..................."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
