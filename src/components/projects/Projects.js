import React from 'react';
import Title from '../layouts/Title';
import Project01 from '../../assets/images/projects/project01.png';
import project02 from '../../assets/images/projects/project02.png';
import project03 from '../../assets/images/projects/project03.png';
import project04 from '../../assets/images/projects/project04.png';
import project05 from '../../assets/images/projects/project05.png';
import project06 from '../../assets/images/projects/project06.png';
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="Some of the noteworthy projects i have built:"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SEEKDAILY WEBSITE"
          des="seek daily and grow daily can align with various religious or spiritual teachings that emphasize the pursuit of wisdom, understanding, and spiritual growth. Here's an interpretation from a Christian perspective:"
          src={Project01}
        />
        <ProjectsCard
          title="Daily Word of Jesus"
          des="Daily Word of Jesus typically refers to a devotional practice where individuals engage with the teachings and messages of Jesus Christ on a daily basis. This practice often involves reading a passage from the Bible, particularly from the New Testament where Jesus' words and teachings are recorded, and reflecting on its meaning and application to one's life."
          src={project02}
        />
        <ProjectsCard
          title="Chatting App"
          des="A software chatting application, often simply referred to as a chat app, is a computer program or mobile application that enables users to communicate with each other in real-time via text, voice, or video. These applications facilitate conversations between individuals or groups, allowing users to exchange messages, share media, and engage in various forms of communication. "
          src={project03}
        />
        <ProjectsCard
          title="Login Form"
          des="A login form is a user interface element commonly found in software applications, websites, and systems that require user authentication. Its primary purpose is to allow users to input their credentials, typically a username or email address and a password, in order to access a secure area or perform certain actions within the application."
          src={project04}
        />
        <ProjectsCard
          title="Web Calculator"
          des="A web calculator is a digital tool accessible through a web browser that allows users to perform mathematical calculations directly within a webpage. These calculators are typically built using web technologies such as HTML, CSS, and JavaScript, and they offer a user-friendly interface for inputting data and obtaining results."
          src={project05}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Building a client portfolio involves a comprehensive process of understanding the client's needs, constructing a tailored investment strategy, selecting appropriate investments, managing risk, monitoring performance, and maintaining communication to ensure the portfolio remains aligned with the client's goals over time."
          src={project06}
        />
      </div>
    </section>
  );
}

export default Projects