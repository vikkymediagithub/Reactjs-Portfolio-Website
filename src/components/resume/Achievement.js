import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CLOUDWARE TECHNOLOGIES"
            subTitle="CloudWare Technologies is  a global technology powerhouse."
            result="IBADAN"
            des="CloudWare Technologies designs, develop, web mobile applications to power your businesses. We help deploy, integrate technology solutions to solve business, public and social problems."
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
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
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
    </motion.div>
  );
};

export default Achievement;
