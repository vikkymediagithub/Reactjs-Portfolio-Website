import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HND in Computer Science"
            subTitle="FEDERAL SCHOOL OF STATISTIC (2020 - 2024)"
            result="3.90/4"
            des="As a dedicated learner at FSS, I am passionate about expanding my knowledge and skills in FULL STACK to prepare myself for a successful career in the field."
          />
          <ResumeCard
            title="STILL LOADING......."
            subTitle="Still Loading......."
            result="Pending"
            des="Still Loading..................."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
}

export default Education