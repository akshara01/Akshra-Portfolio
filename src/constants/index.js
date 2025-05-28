export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'ChurnSight - Customer Churn Prediction Model',
  desc: 'ChurnSight is a machine learning solution designed to proactively identify customers at risk of churn. By analyzing behavioral and transactional patterns, it helps businesses retain high-value clients before they leave.',
  subdesc:
    'Built using Python, Pandas, NumPy, and Scikit-learn, the model leverages Logistic Regression and Random Forest algorithms for churn classification, achieving over 85% prediction accuracy. Visualized insights are delivered through Matplotlib and Seaborn for actionable interpretation.',
    href: 'https://github.com/akshara01/Customer-Churn-Prediction-using-Machine-Learning/tree/main',
    texture: '/textures/project/Churn.mp4',
    logo: '/assets/churn.png',
    logoStyle: {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/Python.svg',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/logo.svg',
      },
      {
        id: 3,
        name: 'Pandas',
        path: '/assets/pandas_white.svg',
      },
      
    ],
  },
  {
    title: 'Netflix Insights - Interactive Content Analytics',
    desc: 'Netflix Insights is a dynamic Tableau dashboard offering deep exploration of global movie and TV show trends. Users can interactively filter and analyze content by genre, rating, country, release year, and more—turning raw data into actionable entertainment insights.',
    subdesc:
    'Designed in Tableau with a dark theme and intuitive navigation, the dashboard includes multi-tab analytics across general trends, title-level details, and director-based performance. It visualizes data such as top genres, regional content distribution, and historical content growth, enhancing decision-making for content teams and analysts.',
    href: 'https://public.tableau.com/app/profile/akshra.mehta/viz/NetflixMoviesTVShowsDashboard_17445891551010/NetflixGeneralAnalytics',
    texture: '/textures/project/Netflix.mp4',
    logo: '/assets/netflix.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Yableau',
        path: '/assets/Tableau-Symbol.png',
      },
      {
        id: 2,
        name: 'Excel',
        path: 'assets/excel.png',
      },
      {
        id: 3,
        name: 'Kaggle',
        path: '/assets/kaggle.svg',
      },
      
    ],
  },
  {
    title: 'BreachTrack - US Data Breach Analytics (2009–2021)',
  desc: 'BreachTrack is a Python-powered analytical solution that explores data breach incidents across the United States over a 12-year span. It uncovers trends across sectors, breach types, and states to support cyber risk assessment and strategic response planning.',
  subdesc:
    'Developed using Python, Pandas, Matplotlib, and Seaborn, the project visualizes patterns in data exposure frequency, industry vulnerability, and breach severity. It enables stakeholders to better understand long-term security trends and emerging risk areas through clear, interpretable insights.',
    href: 'https://github.com/akshara01/US-DATA-BREACHES-DATA-ANALYSIS-2009-21/tree/main',
    texture: '/textures/project/Databreach.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/Python.svg',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/logo.svg',
      },
      {
        id: 3,
        name: 'Pandas',
        path: '/assets/pandas_white.svg',
        
      },
      {
        id: 4,
        name: 'Kaggle',
        path: '/assets/kaggle.svg',
      },
    ],
  },
  {
    title: 'CCNA-On-Fingertips – Interactive Learning Tool',
  desc: 'CCNA-On-Fingertips is a lightweight, interactive HTML resource designed to simplify the core concepts of networking. It presents CCNA fundamentals through intuitive visuals, structured content, and clickable modules for self-paced learning.',
  subdesc:
    'Built using HTML, CSS, and JavaScript, the platform focuses on responsive design and clarity. Topics like IP addressing, subnetting, routing protocols, and OSI layers are made easy through visual aids and digestible content—ideal for beginners or revision before certification.',
    href: 'https://github.com/akshara01/CCNA-On-FingerTips',
    texture: '/textures/project/CCNA.mp4',
    logo: '/assets/ccna.png',
    logoStyle: {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/JavaScript.png',
      },
      
    ],
  },
  {
   title: 'MediTrack - Hospital Management System',
  desc: 'MediTrack is a desktop-based hospital management system that streamlines patient records, appointments, doctor scheduling, and billing operations. Built using Python’s Tkinter for the GUI and MySQL for database integration, it supports seamless data entry and retrieval for clinical workflows.',
  subdesc:
    'The system features modules for patient registration, doctor management, prescription tracking, and invoice generation. It emphasizes usability and relational database design, ensuring real-time access to critical medical information while maintaining data integrity across departments.',
    href: 'https://github.com/akshara01/HOSPITAL-MANAGEMENT-SYSTEM-USING-MYSQL-AND-TKINTER',
    texture: '/textures/project/hospital.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/Python.svg',
      },
      {
        id: 2,
        name: 'SQL',
        path: 'assets/sql.png',
      },
      
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'EY',
    pos: 'Senior Analyst',
    duration: 'July 2023 - July 2024',
    title: "EY was where I honed my skills in data analysis and compliance. I streamlined reporting, resolved software audit issues, and delivered insights that supported informed decisions across global client teams.",
    icon: '/assets/EY.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Skynet Secure Solutions',
    pos: 'Data Analyst Intern',
    duration: 'January 2022 - March 2022',
    title: "Skynet Secure Solutions gave me hands-on exposure to cybersecurity audits. I analyzed security data, built dashboards, and uncovered system vulnerabilities—helping clients respond faster and reduce risks across multiple engagements.",
    icon: '/assets/skynet.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Nurturing Lives NGO',
    pos: 'Volunteer Head',
    duration: 'July 2020 - July 2022',
    title: "At Nurturing Lives, I led national campaigns, taught underprivileged children, and managed volunteer recruitment—creating social impact through education, donation drives, and community outreach that empowered over 500 beneficiaries across India.",
    icon: '/assets/nl.png',
    animation: 'salute',
  },
];
