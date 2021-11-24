export const projects = [
  {
    title: 'GSoC Project',
    description: "Added new search categories and search filters to the CDLI framework using Elasticsearch. Added efficent SQL queries to perform indexing using Logstash. Performed text processing and formatting using Regex. Refactored and cleaned redundant code from the codebase, reducing the total number of lines from 1659 to 115. Documented entire search flow of framework.",
    image: '/images/GSOC.png',
    tags: ['Elasticsearch', 'CakePHP', 'SQL', 'Logstash'],
    source: 'https://github.com/yashrajdesai/GSoC-2021-Report',
    id: 0,
  },
  {
    title: 'Kisan Mitra Bot',
    description: "Kisan Mitra Bot is a multilingual chatbot that resolves agricultural-related farmer's queries supporting the majority of Indian languages. Used Rasa OpenSource to train the chatbot, React.js for frontend, Node.js and Express.js for backend server and Firestore for database. Used Azure translation API and Docker for containerising the application.",
    image: '/images/kisan-mitra-bot.png',
    tags: ['Express', 'React', 'Node', 'Firestore', 'Docker', 'Azure', 'Rasa'],
    source: 'https://github.com/yashrajdesai/Kisan-Mitra-Bot',
    id: 1,
  },
  {
    title: 'Agro World',
    description:"Agro World is a smart contract based website that helps farmers to sell agricultural products and customers to buy these products directly from farmers using ethereum blockchain based wallet. Used React.js for front-end and Web3.js for converting the front-end application to a Blockchain application. Used Ganache and Metamask for testing transactions on the private Blockchain.",
    image: '/images/agro-world.png',
    tags: ['React.js', 'Web3.js', 'Ganache', 'Solidity'],
    source: 'https://github.com/yashrajdesai/eth_wallet',
    id: 2,
  },
  {
    title: 'Instagram',
    description: "Instagram is a full stack web app where people can share photos, like and comment on it also follow other users. Used MERN stack to built it's front-end and back-end. Used React Context API for global state management. Used Cloudinary service to store images on cloud platform. Deployed the web-app on Heroku",
      image: '/images/insta.png',
      tags: ['React.js', 'Mongodb', 'Express.js', 'Node.js', 'Heroku'],
    source: 'https://github.com/yashrajdesai/instagram-clone',
    id: 3,
  },
];

export const TimeLineData = [
  { title: "Education", description: 'VESIT - Computer Science (2023) CGPA: 9.67', },
  { title: "Google Summer of Code 2021 @ CDLI", description: 'Improved and optimized search and advanced search features in the CDLI framework using Elasticsearch and CakePHP.', },
  { title: "Backend Developer @ Unengineered", description: 'Designing and building scalable software systems.', },
];