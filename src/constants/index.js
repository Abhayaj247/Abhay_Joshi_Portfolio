import Traffic from "../assets/projects/Traffic.jpg";
import Realtime from "../assets/projects/Realtime.png";
import tunehub from "../assets/projects/tunehub.png";
import cicd from "../assets/projects/cicd.jpg";
import brainly from "../assets/projects/brainly.png";

export const HERO_CONTENT = `A versatile full-stack developer proficient in Java, Python, and JavaScript, with strong expertise in the MERN stack, Spring Boot, and Django. Experienced in developing scalable applications, optimizing CI/CD pipelines, and delivering innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2023 - May 2023",
    role: "Full Stack Developer Intern",
    company: "Kodnest",
    description: `Worked on Java, SQL, HTML, CSS, JavaScript, Expressjs, Typescript, Redis, BullMq.
    I Designed and implemented a job queue system using Redis and BullMQ,improving concurrency and task scalability.Enhanced real-time inter-service communication with Redis Pub/Sub, optimizing system responsiveness.`,
    technologies: ["Java", "SQL", "HTML", "CSS", "JavaScript", "Express.js", "Typescript", "Redis", "BullMq"],
  },
];

export const PROJECTS = [
  {
    title: " Brainly Application",
    image: brainly,
    description:
      "Developed a MERN-based web app to save and organize resources like YouTube videos, tweets, and other resources,with a unique sharing feature. Built secure authentication using JWT, RESTful APIs, and a clean UI with TypeScript and TailwindCSS.",
    technologies: [ "ReactJS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "JWT"],
  },
  {
    title: "CI/CD Pipeline with Dockerized Jenkins",
    image: cicd,
    description:
      "Architected a containerized CI/CD environment using Docker, Jenkins, and Docker Compose. Implemented pipeline automation for build, test, and deployment stages. Configured nested container orchestration for isolated build environments",
    technologies: ["Docker", "Jenkins", "Docker Compose", "Linux"],
  },
  {
    title: "Tune Hub Application",
    image: tunehub,
    description:
      "Developed a Spotify-like platform for music streaming with features like user authentication, playlist management,and music uploads. Implemented a microservices architecture to handle user management and content delivery. Optimized streaming performance using caching mechanisms and integrated cloud storage for media files.",
    technologies: [ "Spring Boot", "MySQL", "React.js", "Thyme Leaf"],
  },
  {
    title: "Real-time Chat Application",
    image: Realtime,
    description:
      "Developed a chat application supporting instant messaging with real-time broadcasting using WebSocket. Designed a responsive front-end with React.js and implemented secure WebSocket server protocols.",
    technologies: ["React.js", "TypeScript", "WebSocket", "Tailwind CSS"],
  },
  {
    title: "Emergency Vehicle Traffic Assistance System",
    image: Traffic,
    description:
      "Built an ML-powered real-time traffic management system with vehicle detection using TensorFlow and OpenCV. Designed REST APIs for data exchange and integrated geolocation services to assist emergency vehicles. Developed a responsive UI using HTML5 and CSS3 for enhanced user interaction.",
    technologies: ["Python", "Django", "TensorFlow", "OpenCV", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Jamkhandi, Karnataka, India - 587301 ",
  phoneNo: "",
  email: "abhayjoshi2830@gmail.com",
};
