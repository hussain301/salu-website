import Button from "./helper/Button";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const VirtualTour = () => {
  return (
    <section className="p-4 lg:p-8 bg-[#2c3366]">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col  overflow-hidden rounded-md shadow-sm lg:flex-row">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex flex-col justify-center flex-1 p-6 text-[#b9bbcc]"
          >
            <span className="text-xs mb-3 uppercase">welcome to </span>
            <h3 className="text-3xl font-bold">
              Virtual Tour of Shah Abdul Latif University
            </h3>
            <motion.p className="my-6">
              Shah Abdul Latif University in Khairpur offers diverse academic
              disciplines, including Natural Sciences, Social Sciences, and Law.
              With over 234 faculty members, the University uses innovative
              teaching methods and audiovisual tools to prepare students for the
              job market. The campus is easily accessible by air, railway, and
              bus services, and is surrounded by historic sites and culturally
              rich areas. The University covers an area of 302-22 acres with
              lush green lawns, play grounds, and trees, and has over 13,000
              students enrolled in various programs, with 70% male and 30%
              female students.
            </motion.p>
            <Button className="w-fit">Read More</Button>
          </motion.div>

          <iframe
            src="https://player.vimeo.com/video/803137895?h=167d187b50"
            alt="video of the salu"
            allowFullScreen
            className="h-64 rounded-lg aspect-video"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
