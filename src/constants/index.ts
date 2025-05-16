// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  digible,
  codment,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  telegram,
  linkedin,
  twitter,
  github,
  discord,
  email,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://github.com/J2Surf/portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "AI & Web3 Development",
    icon: backend,
  },
  {
    title: "3D Development",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "Digible",
    icon: digible,
    iconBg: "#383E56",
    date: "October 2023 - Febrary 2025",
    points: [
      "Collaborated with CTO, Technical Lead, and Product Owner to align project goals.",
      "Launched multiple web applications and a SaaS platform using microservices.",
      "Designed microservices architecture in Node.js and TypeScript for modular development.",
      "Built scalable serverless architectures with AWS Lambda for B2B applications.",
      "Developed efficient RESTful APIs with Node.js and Express for seamless integration.",
      "Upgraded an e-commerce site to a micro-front end architecture for better UX.",
      "Created a scalable Storybook component library for a high-traffic React app.",
      "Used GraphQL and React Query to enhance data retrieval in front-end apps.",
      "Enhanced website performance with SSR using Next.js for faster load times.",
      "Developed multi-factor authentication and access controls for secure usage.",
      "Integrated services like Stripe and Twilio using OAuth for secure data exchange.",
      "Built an NFT marketplace with Solidity and Web3.js, boosting user engagement by 20%.",
      "Integrated ChatGPT 4 into a chat platform, reducing support workload by 30%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Codment",
    icon: codment,
    iconBg: "#E6DEDD",
    date: "Augest 2020 - September 2023",
    points: [
      "Implemented SSR and dynamic routing with Next.js, optimizing load times.",
      "Converted Figma and PSD designs into responsive React components.",
      "Developed an interactive UI with React and Styled Components to boost engagement.",
      "Used Redis with Nest.js for caching, reducing response times and improving scalability.",
      "Optimized smart contracts for gas efficiency, cutting transaction costs by 20%.",
      "Upgraded a website's front end to Tailwind CSS for a cohesive UI design.",
      "Applied responsive design principles for seamless functionality across devices.",
      "Created intuitive front end solutions using HTML5, CSS3/SASS, and JavaScript.",
      "Implemented Redux in a large-scale app for efficient state management.",
      "Used a Wrapper provider in React for error handling, reducing code complexity.",
      "Developed unit, integration, and end-to-end tests with Jest and Cypress for reliability.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jerin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Sippd",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jerin does.",
    name: "Steve Ethberge",
    designation: "CTO",
    company: "PockitTV",
    image: user2,
  },
  {
    testimonial:
      "After Jerin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Yingbo Li",
    designation: "CEO",
    company: "Eazifunds",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Breitling",
    description:
      "Breitling is a luxury Swiss watch manufacturer renowned for its precision chronometers and aviation-inspired timepieces. The brand combines heritage and innovation, offering a diverse range of high-quality watches designed for professionals and enthusiasts alike. With a focus on craftsmanship and technical excellence, Breitling connects luxury and functionality, catering to a discerning clientele seeking exceptional performance and style.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/J2Surf/CryptoVerse",
    live_site_link: "https://www.breitling.com/gb-en/",
  },
  {
    name: "Sipp'd",
    description:
      "Sippd is a digital solutions provider transforming the hospitality industry by enhancing customer engagement and operational efficiency. Through innovative tools such as digital menus and ordering systems, it streamlines processes for bars and restaurants, improving service delivery and reducing wait times. Sippd aims to drive digital transformation in hospitality, creating a more responsive and customer-centric experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/J2Surf/travel-advisor",
    live_site_link: "https://www.sippd.co.uk/",
  },
  {
    name: "PockitTV",
    description:
      "PockitTV is a multi-tenant SaaS OTT platform revolutionizing content delivery in the media industry. By leveraging cloud technology and blockchain integration, it connects viewers with diverse content while ensuring security and transparency. PockitTV embraces IoT to enhance user experiences, facilitating seamless access to products and services. Its mission is to drive digital transformation and pave the way for innovative content consumption models in the evolving entertainment landscape.",
    tags: [
      {
        name: "Svelt",
        color: "blue-text-gradient",
      },
      {
        name: "Golang",
        color: "green-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/J2Surf/pockit-fusion-frontend",
    live_site_link: "https://pockittv.com/",
  },
  {
    name: "Lucia Protocol",
    description:
      "Lucia Protocol is a blockchain-based platform designed to enhance the development of decentralized applications (dApps) through interoperability and scalability. It empowers developers and businesses by providing a secure framework for building efficient, cross-chain solutions, facilitating seamless transactions and interactions across multiple blockchain networks. Lucia Protocol aims to drive innovation in the decentralized ecosystem, promoting user control and a future-ready approach to blockchain technology.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Web3.js",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/J2Surf/Shoppy",
    live_site_link: "https://www.luciaprotocol.com/",
  },
  {
    name: "TrusteAI",
    description:
      "TrusteAI is an AI-driven lending marketplace designed to enhance intelligent decision-making in finance. By connecting borrowers with a diverse network of credit providers, it offers seamless access to flexible and inclusive capital solutions. The platform supports a wide range of credit options, from term loans to lines of credit, facilitating real-time access to funding for borrowers of various backgrounds. TrusteAI empowers partners, including banks and fintechs, to integrate credit products into their services, driving financial inclusion and growth through innovative technology.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Web3.js",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/J2Surf/fitness-app",
    live_site_link: "https://www.trusteai.com/",
  },
  {
    name: "Kashiko",
    description:
      "Kashiko is a digital solutions provider focused on enhancing e-commerce through innovative online configurators that enable real-time product customization in 3D. By integrating instant quotations and payment processes, it simplifies the sales and manufacturing workflows for customizable products. Kashiko's mission is to increase sales while reducing complexity, allowing both sales teams and clients to streamline the customization process, minimize errors, and improve efficiency in specifying and quoting products.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/J2Surf/tiktok-clone",
    live_site_link: "https://www.kashiko.fr/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Email",
    icon: email,
    link: "mailto:jerin.dev.jobi@gmail.com",
  },
  {
    name: "Discord",
    icon: discord,
    link: "https://discord.com/invite/j2surf",
  },
  {
    name: "Telegram",
    icon: telegram,
    link: "https://t.me/J2Surf",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/jerin-jobi-29a126355/",
  },
  // {
  //   name: "Twitter",
  //   icon: twitter,
  //   link: "https://twitter.com/TechnicalShubam",
  // },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/J2Surf",
  },
] as const;
