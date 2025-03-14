import { useEffect, useState } from "react";
import logo from "../assets/logo.avif";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// RoleRotator Component with Fixed Height
const RoleRotator = () => {
  const roles = ["Full Stack Developer", "DevOps Engineer", "Frontend Developer", "Backend Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing in milliseconds

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timer;

    if (!isDeleting) {
      // Typing logic
      if (currentText.length < role.length) {
        timer = setTimeout(() => {
          setCurrentText(role.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Wait for a bit before starting to delete
        timer = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // Deleting logic
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(role.slice(0, currentText.length - 1));
        }, typingSpeed / 2); // Faster deletion
      } else {
        // Move to the next role after deleting
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <motion.span
      variants={childVariants}
      className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent pt-6 inline-block h-[60px] overflow-hidden" // Fixed height and overflow hidden
    >
      {currentText}
    </motion.span>
  );
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={logo}
              alt="Abhay Joshi"
              className="border border-stone-900 rounded-3xl"
              height={450}
              width={450}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Abhay Joshi
            </motion.h2>
            <motion.div variants={childVariants} className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available to work
            </motion.div>
            {/* Replace the static role with RoleRotator */}
            <RoleRotator />
            <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl text-center md:text-left leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
            variants={childVariants}
              href="/Abhay_Joshi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 inline-flex items-center gap-2"
            >
              Download Resume
              <IoMdDownload className="text-base" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
