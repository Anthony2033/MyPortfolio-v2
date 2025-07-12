import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Anthony Colangelo",
  title: "Full Stack Developer",
  email: "anthonyc2366@gmail.com",
  linkedin: "https://www.linkedin.com/in/anthony-colangelo-625794277/",
  github: "https://github.com/Anthony2033",
  resumeLink: "/resume.pdf", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web." // For Hero section
};





export const education = [
  {
    institution: "Florida State University",
    degree: "Bachelor of Science in Computer Science",
    duration: "Aug 2020 – Apr 2024"
  }
];

export const projects = [
  {
    title: "Chef Maria",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    description: "Created a Modern Private Chef Next.js web app with dynamic calander booking system, admin dashboard, and database integration for persistent storage of client requests and calander events.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/Anthony2033/Chef-Maria", // Replace with actual link
    liveLink: "https://chef-maria-v2.vercel.app/", // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Bulk Page Generator",
    tech: ["Python", "PHP", "OpenAI API", "Wordpress"],
    description: "Developed, Documented, and Maintained an internal wordpress bulk content deployment tool while working at a marketing company for a little under a year. This program allows you to uses city and state data as input and sends API requests to ChatGPT using a custom prompt to create unique city location content. A php script would then use this content to generate bulk business relevant service pages that our design team would then apply custom styling on.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/Anthony2033/Bulk-Page-Generator", // Replace with actual link
    //liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  {
    title: "DataDawg",
    tech: ["JS", "CSS", "HTML"],
    description: "A one page site I made for a small business with a few friends that was eventually abandoned. It was built using just vanilla js, html, and css.",
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/Anthony2033/old-data-dawgs",
    liveLink: "https://anthony2033.github.io/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
    { name: "Wordpress", icon: <FaWordpress /> },
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    { name: "Google Cloud Platform", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
