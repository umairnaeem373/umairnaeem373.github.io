const logotext = "Mʌʀɩ";
import img from './assets/images/amazona-home.png'
const meta = {
  title: "Umair Naeem",
  description:
    "I’m M.Umair Naeem,a MERN stack developer,currently working in Lahore",
};

const introdata = {
  title: "I’m Mʌʀɩ Bʌɓʌ",
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
    "Welcome to my portfolio! I'm a MERN stack web developer passionate about crafting intuitive and efficient web solutions. Explore my projects and skills to learn more about my work.",
};
const worktimeline = [
  {
    jobtitle: "Fron End Developer",
    where: "VCT",
    date: "2023",
  },
];

const skills = [
  {
    name: "Html",
    value: 90,
  },
  {
    name: "Css",
    value: 85,
  },
  {
    name: "Javascript",
    value: 70,
  },
  {
    name: "Reactjs",
    value: 75,
  },
  {
    name: "Nodejs",
    value: 50,
  },
  {
    name: "Expressjs",
    value: 80,
  },
  {
    name: "MongoDB",
    value: 80,
  },
];

const services = [
  {
    title: "Web Apps",
    description:
      "We offer custom web development, responsive design, e-commerce solutions, SEO optimization, and ongoing support to help your business thrive online.",
  },
  {
    title: "Web Design",
    description:
      "We specialize in creating custom web designs that are modern, user-friendly, responsive, and tailored to showcase your brand effectively online.",
  },
];

const dataportfolio = [
  {
    img,
    description: "E-Commerce Website-Amazona",
    link: "https://umairnaeem373.github.io/E-commerce-amazona/",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description: "Dev Connections",
    link: "https://umairnaeem373.github.io/dev-connections-redux/",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
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
