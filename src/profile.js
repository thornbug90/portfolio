// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "David Hodgson",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I'm excited to make a big impact at a high growth company.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "REACT",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "popl.co",
    skills: ["Shopify, Liquid, JS"],
    url: "https://github.com/thornbug90",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Besure",
    skills: ["Google Cloud, Bootstrap, React"],
    url: "https://github.com/thornbug90",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "ZIKZAK",
    skills: ["Vue, Nuxt, JS"],
    url: "https://github.com/thornbug90",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "spacer",
    skills: ["PHP, jQuery, JS"],
    url: "https://github.com/thornbug90",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Podio",
    skills: ["React, Node, CSS"],
    url: "https://github.com/thornbug90",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "TATTLY",
    skills: ["Shopify, LazySizes, JS"],
    url: "https://github.com/thornbug90",
  },
];

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form or send an email to crazydev0409@gmail.com and ~let's talk.",
  copyright: "David Hodgson",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
