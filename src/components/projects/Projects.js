import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SEEKDAILY WEBSITE"
          des=" Meditate in the Word of God and Grow in knowledge"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Vikkymedia E-commerce is your one-stop destination for seamless online shopping experiences. With a diverse range of products, easy navigation, and secure payment options, we make it convenient for customers to find and purchase exactly what they need."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Vikkymedia Chat is the ultimate platform for seamless communication and connection. With our intuitive interface and robust features, users can easily chat with friends, family, and colleagues in real-time, whether through text, voice, or video. "
          src={projectThree}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Vikkymedia Chat is the ultimate platform for seamless communication and connection. With our intuitive interface and robust features, users can easily chat with friends, family, and colleagues in real-time, whether through text, voice, or video. "
          src={projectThree}
        />
        <ProjectsCard
          title="SEEKDAILY WEBSITE"
          des=" Meditate in the Word of God and Grow in knowledge"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Vikkymedia E-commerce is your one-stop destination for seamless online shopping experiences. With a diverse range of products, easy navigation, and secure payment options, we make it convenient for customers to find and purchase exactly what they need."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects