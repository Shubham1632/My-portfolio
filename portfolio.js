import emoji from "react-easy-emoji";

export const greetings = {
  name: "Shubham Gangurde",
  title: "Hi all, I'm Shubham",
  description:
    "I'm a final year student @PICT, Pune. A passionate Full Stack web developer and Blockchain Developer having an experience of web applications with React.js, Next.js, Nest.js and Blockchain development on Ethereum, Solidity, ether.js and Hardhat.",
  resumeLink:
    "https://drive.google.com/file/d/1SpQXO3emAjY9dkP1XGRfS5RUUiwd4hX3/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Shubham1632",
};

export const contact = {};

export const socialLinks = {
  //   url: "https://1hanzla100.github.io/",
  linkedin: "https://www.linkedin.com/in/ShubhamGangurde/",
  github: "https://github.com/Shubham1632",
  //   instagram: "https://www.instagram.com/",
  //   facebook: "https://www.facebook.com/",
  //   twitter: "https://twitter.com/",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/shubhamgangurde16/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK WEB AND BLOCKCHAIN DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Blockchain Development",
      lottieAnimationFile:
        "https://raw.githubusercontent.com/Shubham1632/My-portfolio/main/public/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji(
          "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat and Waffle"
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & various Hardhat tools"
        ),
        emoji(
          "⚡ Developing some Defi and Dapps for solving real life problems"
        ),
        emoji(
          "⚡ Building Dapps with React.js/Ether.js & Solidity using Web3.js, Hardhat & IPFS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Etherjs",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache-icon",
        },
      ],
    },
    {
      title: "Full Stack Development",
      lottieAnimationFile:
        "https://raw.githubusercontent.com/Shubham1632/My-portfolio/main/public/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Proficient with Node.js "),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
];

export const educationInfo = [
  {
    schoolName: "Jawahar Navodaya Vidyalaya, Nashik",
    subHeader: "Higher Secondary School",
    duration: "July 2018 - April 2019",
    desc: "Studied 12th Grade with Science as a Major",
    grade: "87%",
    descBullets: [
      "Participated in Regional Science Congress held at JNV Satara",
      "Competed in National Badminton Tournament 2017 and 2018 at JNV Maharajaganj (UP) and JNV Barpeta (Aasam)",
    ],
  },
  {
    schoolName: "Pune Institute of Computer Technology",
    subHeader: "Batchlors of Engineering in Information Technology",
    duration: "August 2019 - May 2023",
    desc: "Studied Computer Science and Programing",
    grade: "9.5 CGPA",
    descBullets: [
      "Developed a Certificate verification system for college on ethereum blockchain",
      "Solved 450+ DSA quetions on various platform like leetcode and geeksforgeeks",
    ],
  },
];

export const experience = [
  //   {
  //     role: "Software CraftsPerson",
  //     company: "Incubyte",
  //     companylogo: "https://raw.githubusercontent.com/Shubham1632/My-portfolio/main/public/img/icons/common/incubyte.jpg",
  //     date: "Jan 2023",
  //     desc: "will be working on React.js and Next.js for the front-end and be working on Nest.Js to build REST APIs",
  //   },
  {
    role: "Project Intern",
    company: "PICT, Pune",
    companylogo:
      "https://raw.githubusercontent.com/Shubham1632/My-portfolio/main/public/img/icons/common/pict.jpg",
    date: "Nov 2022 – Present",
    desc: "",
    descBullets: [
      "Developed Project on Certificate verification and generation.",
      "Changed the conventional way of storing certificate credentials by implementing the process on blockchain",
      "Certificates are made Tamper-Proof, Secure, and Immutable by using distributed, Append-only ledger system",
      "Increased the trust of Recruiters by providing a way to validate the certificate",
    ],
  },
  {
    role: "Summer Intern",
    company: "Persistent Systems Ltd.",
    companylogo:
      "https://raw.githubusercontent.com/Shubham1632/My-portfolio/main/public/img/icons/common/persistent.png",
    date: "August 2022 - Oct 2022",
    desc: "",
    descBullets: [
      "Reduce the loading speed and loading space of the application by 40 percent by implementing the Lazy Loading",
      "Removed the unconditional redirecting to the homepage by re-configuring the routing of the application",
      "Reduced the Complexity of component tree by refactoring the structure of components",
      "Fixed the bug of background animation by configuring the right coordinates to each component",
    ],
  },
  {
    role: "Project Intern",
    company: "Exposys Data Labs",
    companylogo:
      "https://raw.githubusercontent.com/Shubham1632/My-portfolio/main/public/img/icons/common/exposys.jpg",
    date: "March 2022 - May 2022",
    desc: "",
    descBullets: [
      "Worked on a Project to build real-time Video Chatting Application",
      "Using HTML, CSS, and Javascript build a responsive website that can add callers in run-time",
      "Reduced the responce time to 100ms by adding support of Agora SDK and API",
    ],
  },
];

export const projects = [
  {
    name: "Schange",
    // desc: "A peer-to-peer ether transaction system based on ethereum blockchain. Removed the interference of third party centralized entity by implementing the transaction in a decentralized, distributed ledger. ",
    descBullets: [
      "Implemented a web application that can do peer-to-peer transactions of ether without any third entity",
      "Developed a full-stack web application using Hardhat serving as a Back-End Framework and React for Front-End",
      "The transactions are made immutable by implementing it on blockchain",
      "Removed the interference of a third-party Central Entity to transfer the money by designing a Defi Protocol",
    ],
    github: "https://github.com/Shubham1632/SChange",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
    // youtube: "https://googl.com/",
  },
  {
    name: "IpDoc",
    descBullets: [
      "Implemented a digital document storing system on InterPlanetory File System (IPFS)",
      "Made Documents Immutabel by assigning a content addressing to it",
      "The Documents will be tamper proof and nobody can access or modify the document",
      "To make sure the availability of document, used third party application called fleet",
    ],
    github: "https://github.com/Shubham1632/decetralized_doc",
  },
  {
    name: "Certify",
    descBullets: [
      "Implemented a certificate generation and verification system on the ethereum blockchain",
      "Changed the conventional way of storing certificate credentials by implementing the process on blockchain",
      "Certificates are made Tamper-Proof, Secure, and Immutable by using distributed, Append-only ledger system",
      "Increased the trust of Recruiters by providing a way to validate the certificate",
    ],
    github: "https://github.com/Shubham1632/certificate_verification_fullstack",
  },
  {
    name: "FeedPrice",
    descBullets: [
      "Developed a chrome extention for continious price feed of important online assests",
      "Used manifest version 3 (MV3) to build the extention",
      "Various API's like CoinmMarketCap, CoinBase are used to fetch the data",
      "Made easy to all inverstors and traders to look at price feed on only a click",
    ],
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

export const feedbacks = [
  //   {
  //     name: "John Smith",
  //     feedback:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  //   },
  //   {
  //     name: "John Smith",
  //     feedback:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  //   },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Shubham",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Shubham Gangurde",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  //   url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: ["Shubham", "Shubham Gangurde", "@Shubham1632"],
};
