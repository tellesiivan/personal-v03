export type HomeKey = 'intro1' | 'intro2' | 'intro3' | 'intro4' | 'heading'
export type SharedKey = 'name' | 'title' | 'email'
export type ExperienceKey =
  | 'heading'
  | 'description'
  | 'job1Title'
  | 'job1Desc1'
  | 'job1Desc2'
  | 'job1Desc3'
  | 'job1Desc4'
  | 'job1Desc5'
  | 'job2Title'
  | 'job2Desc1'
  | 'job2Desc2'
  | 'job2Desc3'
  | 'job1Date'
  | 'job2Date'
export type ProjectsKey =
  | 'heading'
  | 'description'
  | 'vamoAppDesc'
  | 'financelyDesc'
  | 'simplimodsDesc'
  | 'cryptoDesc'
  | 'hotelApiDesc'
  | 'usersApiDesc'

export const sharedTextMap = new Map<SharedKey, string>([
  ['name', 'Ivan Telles'],
  ['title', 'Software Developer at Mahalo Technologies Inc.'],
  ['email', 'tellezivan7@gmail.com'],
])
export const homeTextMap = new Map<HomeKey, string>([
  [
    'intro1',
    `With over 5 years of experience in the software industry, I have had the opportunity to work on meaningful projects that solve complex business problems. I am currently employed as a Software Developer at Mahalo Technologies Inc. where our team builds innovative online banking solutions for credit unions.`,
  ],
  [
    'intro2',
    'Outside of work, I enjoy exercising my passion for software by building my own applications. I am currently developing a cross-platform mobile app for IOS/Android that will enable users to easily discover local street vendors based on their locations. By allowing vendors to easily broadcast their availability, it creates a win-win situation for small businesses and hungry customers craving authentic street food in their area.',
  ],
  [
    'intro3',
    "I continue expanding my skill set by learning modern full-stack frameworks. I stay up-to-date on the latest industry advancements by actively taking online courses and experimenting with new languages. Recently I've been heavily involved in creating full-stack applications using ASP.NET Core Web API along side Entity Framework Core and SQL Server for database persistence. As a lifelong learner, I am motivated by intellectual challenges that enable me to grow as a software developer. I apply my analytical approach and attention to detail to deliver clean, maintainable code for all my software endeavors.",
  ],
  [
    'intro4',
    'I am always eager to collaborate and welcome any feedback or opportunities to further enhance my development craft. Please feel free to connect with me to learn more about my projects and passion for problem-solving through code!',
  ],
  ['heading', 'Ivan Telles, a Software Developer from Norwalk, California'],
])

export const projectsTextMap = new Map<ProjectsKey, string>([
  ['heading', `Most recent projects.`],
  [
    'vamoAppDesc',
    `This is a cross-platform mobile application built with React Native for iOS and Android that allows users to search, locate and order food from street vendors in their area.`,
  ],
  [
    'financelyDesc',
    `Full-stack web app enabling users to search stocks, track favorites, and engage in commentary on market trends. Built on React frontend with custom components for visualizing stock quote data from external APIs. .NET Core backend handles identity management and interfaces with SQL Server databases.`,
  ],
  [
    'simplimodsDesc',
    `Web application enabling car owners to document modifications they've made to their vehicles and engage with an automotive enthusiast community. Built using React, Redux, Firebase, and TypeScript.`,
  ],
  [
    'cryptoDesc',
    `Crypto price tracking app for iOS built as my first foray into Swift development. Fetches latest pricing data and historical charts for top cryptocurrencies using CoinAPI. Allows creating watchlist of coins and viewing news related to each coin or the overall market.`,
  ],
  [
    'hotelApiDesc',
    `Hotel listing and reservations CRUD API with JWT authentication, built with ASP.NET Core Web API and Azure SQL/SQL Server. Provides core platform services to power hotel property search, review and booking applications.`,
  ],
  [
    'usersApiDesc',
    `This is a sample API implementation that allows for basic user management and retrieval of user job info and salary. It is built using ASP.NET Core Web API and uses Entity Framework Core and SQL Server for database persistence.`,
  ],
  [
    'description',
    "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. I've tried to implement what I'm currently learning at the moment of deploying a project, for example, financely was made by .NET Core backend handling identity management and interfaces with SQL Server databases.",
  ],
])

export const experienceTextMap = new Map<ExperienceKey, string>([
  ['job1Date', `Aug 2022 - Present`],
  ['job2Date', `Oct 2021 - July 2022`],
  ['heading', `Experience over the past few years.`],
  [
    'description',
    'Here is my most recent experience, laying out my recent' +
      ' contributions in the online banking world to building unique user flows in the' +
      ' gaming' +
      ' industry.',
  ],
  ['job1Title', 'Software Developer, Mahalo Technologies Inc.'],
  [
    'job1Desc1',
    'Accomplished creating a multi-language translation system supporting English and Spanish across customer-facing site content, increasing user accessibly support by 50%, by developing a custom JSON translation API pipeline accessible to 10+ non-technical credit union admins through a custom admin portal dashboard.',
  ],
  [
    'job1Desc2',
    'Developed an accurate mobile check deposit solution for our fintech IOS/Android mobile banking app supporting 8 remote deposit vendors, measured by an increase of 30% in daily mobile deposits, by building a custom mobile integration that communicated with native specific mobile support via NativeBridge.',
  ],
  [
    'job1Desc3',
    'Implemented scalable multiplatform MFA solution across 10+ live production banking apps, resulting in 50% reduction of identity and financial fraud threats for over 500k customer account holders.',
  ],
  [
    'job1Desc4',
    'Cultivated a cross-platform bill pay service across web and native mobile apps to add/manage payees and enable one-time/recurring payments, measured by a 20% rise in bill pay digital engagement within 3 months post-launch, by creating reusable React components interfacing with .NET APIs.',
  ],
  [
    'job1Desc5',
    'Configured a multistep a skip payment solution on web and native iOS/Android apps supporting 20+ distinct credit union parameter rules, measured by streamlined servicing of 500K+ members requests over 10+ successful credit union implementations, via React forms allowing support for customization of member eligibility and user journeys by individual credit union admins.',
  ],
  ['job2Title', 'Front-End Developer, PlayerBoost'],
  [
    'job2Desc1',
    "Utilized Firestore Database to compile user's orders, payment" +
      ' information, payouts, and profile preferences.',
  ],
  [
    'job2Desc2',
    'Worked closely with a Senior React Developer to create a strong, effectively responsive dashboard for users to manage, communicate, and share their gaming experience.',
  ],
  [
    'job2Desc3',
    'Used Redux for state management, and dispatched user controlled actions to render responsive UI components.',
  ],
])
