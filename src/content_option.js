const logotext = "Mʌʀɩ";
import img from './assets/images/amazona-home.png'
import img2 from './assets/images/freight.png'
import img3 from './assets/images/little-stars.png'
import img0 from './assets/images/shop-hub.png'
const meta = {
  title: "M. Umair Naeem",
  description:
    "I’m M.Umair Naeem,a MERN stack developer,currently working in Lahore",
};

const introdata = {
  title: "I’m Muhammad Umair",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop web apps",
  },
  description:
    "Explore my portfolio showcasing diverse projects and skills in web development. Let's create innovative solutions together. Welcome to my site",
  your_img_url: "../../assets/images/profile.jpg",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "Welcome to my portfolio! I'm a Full stack developer passionate about crafting intuitive and efficient solutions. Explore my projects and skills to learn more about my work.",
};
const worktimeline = [
  {
    jobtitle: "Front End Developer",
    where: "VVork Cloud Technologies",
    date: "2024",
  },
  {
    jobtitle: "Jr. MERN Stack Developer",
    where: "Digital Vortax",
    date: "2024 - 2025",
  },
  {
    jobtitle: "Full Stack Developer",
    where: "CrocusZone",
    date: "2025 - Current",
  },
];

const skills = [
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS",
    value: 85,
  },
  {
    name: "Javascript",
    value: 70,
  },
  {
    name: "React Js",
    value: 75,
  },
  {
    name: "React Native",
    value: 65,
  },
  {
    name: "Node Js",
    value: 70,
  },
  {
    name: "Express Js",
    value: 80,
  },
  {
    name: "Mongo DB",
    value: 80,
  },
  {
    name: "Supabase",
    value: 80,
  },
  {
    name: "Socket.IO",
    value: 80,
  },
];

const services = [
  {
    title: "Scalable Web Apps",
    description:
    "I create custom web apps, responsive design, e-commerce solutions, SEO optimization, and ongoing support to help your business thrive online.",
  },
  {
    title: "Mobile Apps",
    description:
    "I develop Mobile apps, using React native to create apps that works for both Android and iOS Platforms",
  },
  {
    title: "Scalable Backends",
    description:
      "I specialize in creating scalable backend that are tailored to work with the your apps effectively",
  },
];

const dataportfolio = [

  {
    img: img0,
    description: "Shop Hub",
    link: "https://shop-hub-ashy.vercel.app/",
  },
  {
    img: img2,
    description: "FreightPK",
    link: "https://trucking-web-coral.vercel.app/",
  },
  {
    img: img3,
    description:
      "Little Stars",
    link: "https://little-stars-1ohs3zzwr-umairnaeem373s-projects.vercel.app/",
  },
  {
    img,
    description: "E-Commerce Website-Amazona",
    link: "https://umairnaeem373.github.io/E-commerce-amazona/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "umairnaeem373@gmail.com",
  YOUR_FONE: "0334 1041181",
  description:
    "Please feel free to reach out using the form below. Your message is important to us and we'll respond promptly. Thank you for contacting us!. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_y8ourg9",
  YOUR_TEMPLATE_ID: "template_blg9uew",
  YOUR_USER_ID: "y4D7K_xH4zzNDR1gi",
};

const socialprofils = {
  github: "https://github.com/umairnaeem373",
  facebook: "https://www.facebook.com/umairnaeem373",
  linkedin: "https://www.linkedin.com/in/umairnaeem373",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
