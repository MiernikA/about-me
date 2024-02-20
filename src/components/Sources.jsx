import React from "react";
import sources from "../constants/sources.txt";
import { Section } from "../sct";

const Sources = () => {
  return (
    <a href={sources}
      className="text-secondary block px-4 mb-4 md:mb-0 md:px-0 "
      download
    >Here are all the materials, models, assets, and graphics I've used to enhance the visual appeal of my portfolio </a>
  );
};

export default Section(Sources, "")
