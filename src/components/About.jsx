import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { Section } from "../sct";
import { fadeIn, textVariant } from "../utils/motion";


const TiltCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[320px] w-full h-[150px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border-orange-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 25,
          scale: 1,
          speed: 250,
        }}
        className='bg-black rounded-[20px] py-5 px-2 min-h-[120px] flex items-center justify-center'
      >
        <h3 className='text-white text-[22px] font-bold text-left px-5'>
          {title}
        </h3>
        <img
          src={icon}
          className='w-14 h-14 object-contain rounded-[10px] mr-2'
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className=" relative w-full border-l-2  border-[#ffc83d] rounded  mx-auto bg-section-patter bg-contain bg-no-repeat px-8 " >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionMainText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have been passionate about programming since high school, with a particular focus on UI design and frontend development.
        I am a quick learner and enjoy collaborating with people. I am eager to leverage my knowledge and skills in commercial projects,
        contributing to their success and am equally committed to gaining valuable insights from seasoned programmers to enhance my learning journey.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-x-10 gap-y-0 cursor-default'>
        {skills.map((skill, index) => (
          <TiltCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </section >
  );
};

export default Section(About, "about");
