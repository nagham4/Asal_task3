
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus, faLink } from "@fortawesome/free-solid-svg-icons";

import "./Portfolio.css";
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image7 from './images/image7.png';

const projectsData = [
    { id: 1, category: "APP", img: image1, link: "#", title: "Weather App" , description: "A weather application that provides real-time weather updates and forecasts." },
    { id: 2, category: "WEBSITE", img: image5, link: "#", title: "Restaurant" , description: "A restaurant website showcasing the menu, location, and contact information." },
    { id: 3, category: "APP", img: image3, link: "#", title: "Task Manager", description: "An application that helps users manage their tasks and schedules." },
    { id: 4, category: "WEBSITE", img: image7, link: "#", title: "Medcare Hospital" , description: "A hospital website providing information about services, doctors, and patient care." },
    { id: 5, category: "APP", img: image2, link: "#", title: "Crypto App", description: "A cryptocurrency application that tracks prices and market trends." },
    { id: 6, category: "WEBSITE", img: image4, link: "#", title: "Health Care Clinic", description: "A healthcare clinic website offering information about services, doctors, and patient resources." },
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const categories = ["ALL", "APP", "WEBSITE"];
    const filteredProjects =
    selectedCategory === "ALL" ? projectsData : projectsData.filter((p) => p.category === selectedCategory);

    return (
    <div className="portfolioContainer">
        <h1 className="portfolioTitle">Portfolio</h1>
        <p className="portfolioDescription">
        Here are some of the projects I have worked on. Each project showcases my skills and creativity in web development and design.
        </p>

      {/* Category Filter */}
        <div className="portfolioFilters">
        {categories.map((cat) => (
            <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
            >
            {cat}
            </button>
        ))}
        </div>

      {/* Portfolio Grid */}

        <motion.div layout className="portfolioGrid">
        <AnimatePresence>
        {filteredProjects.map((project, idx) => (
            <motion.div
            key={project.id}
            layout
            //   initial={{ opacity: 0, y: 50, x:  }} // يدخل من تحت ويسار
              initial={{ opacity: 0, y: 50, x: 50 }} // يدخل من تحت ويسار
              animate={{ opacity: 1, y: 0 }} // يبقى ثابت
              exit={{ opacity: 0, transition: { duration: 0 } }}            transition={{ duration: 0.2,  delay: idx * 0.10 }} // تأخير بسيط لكل عنصر
            className="portfolioItem"
            >
            <img src={project.img} alt={project.title} />
            <div className="overlay">
                <div className="side"><h5>  {project.title}  </h5>    </div>
                <div className="icons">
                <a href={project.img} target="_blank" ><FontAwesomeIcon icon={faMagnifyingGlassPlus} className="zoom"/></a>
                <a href="#" target="_blank" ><FontAwesomeIcon icon={faLink} className="link"/></a></div>
                <p>{project.description}</p>
            </div>
            </motion.div>
        ))}
        </AnimatePresence>
        </motion.div>

    </div>
    );
}
