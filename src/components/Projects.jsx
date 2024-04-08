import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { projects } from "../constants";
import { Section } from "../sct";
import { fadeIn, textVariant } from "../utils/motion";
import { github, play } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_code_link,
  index,
}) => {
  const descriptionWithBreaks = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (

    <motion.div
      variants={fadeIn("up", "spring", 0.8 * index, 0.75)}
      className='md:w-[48%] w-full md:h-[640px] border-orange-gradient p-[1px] rounded-[20px] shadow-card flex flex-col'
    >

      <div className='bg-black h-full p-[1px] rounded-[20px] shadow-card flex flex-col '>
        <div className='relative w-full h-[230px]'>

          <img
            src={image}
            alt='project_image'
            className='w-full h-[250px] object-cover rounded-t-2xl top-0 '
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          <div className='absolute inset-0 flex justify-end m-3 mr-14 card-img_hover left-0'>
            <div
              onClick={() => window.open(demo_code_link, "_blank")}
              className='border-orange-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={play}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>


          </div>


        </div>


        <div className='flex-grow  flex-col justify-end mt-2 ml-2'>
          <div className='bg-black rounded-[20px] py-5 px-2'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>


            <p className='mt-2 text-secondary text-[14px] mt-4 leading-5 text-[17px]'>{descriptionWithBreaks}</p>
          </div>
        </div>

        <div className='mt-2 flex flex-wrap gap-2 p-2 ml-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} cursor-default font-medium`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>

  );
};

const Projects = () => {
  return (
    <section className="relative w-full border-l-2 border-[#ffc83d] rounded mx-auto bg-section-patter bg-contain bg-y-repeat px-8 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>GALLERY OF MY WORK</p>
        <h2 className={styles.sectionMainText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Here are several projects I've managed to gather and believe are worth showcasing. This section is continually updated, so over time, I'll be presenting my new and hopefully increasingly better and more interesting programs.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            demo_code_link={project.demo_code_link}
            source_code_link={project.source_code_link}
          />
        ))}
      </div>
    </section>
  );
};

export default Section(Projects, "projects");
