import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { Section } from "../sct";
import { fadeIn, textVariant } from "../utils/motion";
import { Helmet } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_r96tk4w',
        'template_dnojwqn',
        {
          from_name: form.name,
          to_name: "Adrian",
          from_email: form.email,
          to_email: "adrianmiernik@gmail.com",
          message: form.message,
        },
        'rcDc419xLjvE00F58',
      )
      .then(
        () => {
          setLoading(false);
          alert("Your email has been successfully delivered");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          error("Your email delivery was unsuccessful.")
        }
      );
  };

  return (
    <section className="relative w-full border-l-2 border-[#ffc83d] rounded mx-auto bg-section-patter bg-contain bg-no-repeat px-8 py-12">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionMainText}>Contact</h2>
      </motion.div>

      <motion.div variants={fadeIn("bottom", "spring", 0.5, 0.75)}>

        <div>
          <div
            className='mt-4 rounded flex flex-col gap-8  z-10 w-full border-orange-gradient p-[1px] shadow-card '
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='bg-black p-4 rounded'

            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-2 ml-2 text-[17px]'>Your Name: </span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className=' py-3 px-4 placeholder-text-secondary text-white rounded-lg outline-none border-white font-medium mb-6 border-2 bg-section-pattern bg-cover mr-8'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-2 ml-2 text-[17px]'>Your Email: </span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className=' py-3 px-4 placeholder-text-secondary text-white rounded-lg outline-none border-white font-medium mb-6 border-2 bg-section-pattern bg-cover mr-8'

                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white text-[17px] font-medium mb-2 ml-2'>Your Message: </span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What do you want to say?'
                  className=' py-3 px-4 placeholder-text-secondary text-white rounded-lg outline-none border-white font-medium mb-6 border-2 bg-section-pattern bg-contain bg-cover mr-8'

                />
              </label>
              <div className=" border-orange-gradient w-max rounded-lg p-1">
                <button
                  type='submit'
                  className='  bg-section-pattern bg-contain py-3 px-12 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-none'
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Helmet style={{ zIndex: 2 }} />
      </motion.div>
    </section>
  );

};

export default Section(Contact, "contact");
