import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { links } from "../constants";
import { Section } from "../sct";
import { fadeIn, textVariant } from "../utils/motion";


const ExperienceCard = ({ experience, index }) => {
  return (



    <motion.div
      variants={fadeIn(index % 2 == 0 ? "right" : "left", "spring", 0.8 * index, 0.75)}
      className='w-full border-orange-gradient p-[1px]  mb-8 rounded-[20px] shadow-card'
    >
      <div className='bg-black rounded-[20px] py-5 px-2 min-h-[120px]' >

        <div className="flex items-center mb-4">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-14 h-14 border-[1.5px] border-red-400 rounded-full ml-4 "


          />
          <span className=" text-[26px] font-bold text-left px-5 ">{experience.title}</span>


        </div>

        <h3 className='text-white ml-4'>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => {
              const parts = point.split('X').filter(part => part.trim() !== '');
              return (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[17px] pl-1 tracking-wider'
                >
                  {parts.map((part, partIndex) => (
                    <React.Fragment key={`part-${partIndex}`}>
                      {partIndex % 2 === 0 ? (
                        part.trim().replace("-", " ")
                      ) : (
                        <strong className="text-[#f78c0a] hover:underline"><a target='_blank' href={links[part.trim()]}>{part.trim().replace("-", " ")}</a></strong>
                      )}
                    </React.Fragment>
                  ))}
                </li>
              );
            })}
          </ul>
          <p className="mt-4 italic font-bold text-secondary text-[18px]">
            {experience.company_name},&nbsp; {experience.date}
          </p>
        </h3>



      </div>
    </motion.div >
  );
};

const Experience = () => {
  return (
    <section className=" relative w-full border-l-2  border-[#ffc83d] rounded  mx-auto bg-section-patter bg-contain bg-y-repeat px-8 mb-20" >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My employment background</p>
        <h2 className={styles.sectionMainText}>Experience</h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>

        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`e${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Section(Experience, "work");