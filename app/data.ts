export const projects = [
  {
    id: 'agrichain',
    name: 'AgriChain',
    logo: '/logos/agrichain.png',
    featured: true,
    tagline: 'Blockchain Parametric Crop Insurance',
    desc: 'A decentralized application where farmers receive automatic insurance payouts when rainfall drops below a threshold, no manual claims, no middlemen. Powered by a cryptographically signed offchain weather oracle.',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'React', 'Node.js', 'MongoDB', 'Firebase'],
    liveUrl: 'https://agrichain.tech/',
    githubUrl: 'https://github.com/sejeeswarank/AgriChain',
    metrics: [],
    status: 'ongoing',
    pipeline: [
      { icon: 'user', label: 'Farmer Buys Policy', sub: 'React + MetaMask' },
      { icon: 'cloud', label: 'Oracle Fetches Weather', sub: 'Open Meteo API + Signed' },
      { icon: 'link', label: 'Smart Contract Verifies', sub: 'Solidity on Ethereum' },
      { icon: 'check', label: 'Automatic Payout', sub: 'No manual claim needed' },
    ],
  },
  {
    id: 'kctracker',
    name: 'KCTracker',
    logo: '/logos/kctracker.png',
    featured: false,
    tagline: 'Bank Statement Ledger System',
    desc: 'Auto-detects 25+ Indian banks that converts raw PDF, CSV, Excel transaction data into structured financial ledgers, 10 phase normalization pipeline, Fernet encryption for passwords, Google Drive sync.',
    tags: ['Python', 'Flask', 'SQLite', 'pandas', 'pdfplumber', 'Fernet', 'Chart.js'],
    liveUrl: null,
    githubUrl: 'https://github.com/sejeeswarank/KCTracker',
  },
  {
    id: 'blocklens', logoBg: '#111111',
    name: 'BlockLens',
    logo: '/logos/blocklens.png',
    featured: false,
    tagline: 'AI Image Forensics Platform',
    desc: '6+ model ensemble + Gemini 2.5 Flash to detect real which also used to Train model as like Teacher, AI generated, or deepfake images. Blockchain verdict registration on Ethereum Sepolia. Custom model that learns from user feedback.',
    tags: ['PyTorch', 'Gemini API', 'Streamlit', 'Solidity', 'Web3.py'],
    liveUrl: 'https://blocklens.streamlit.app',
    githubUrl: 'https://github.com/sejeeswarank/BlockLens',
  },
  {
    id: 'blocksafeguard', logoBg: '#111111',
    name: 'BlockSafeguard',
    logo: '/logos/blocksafeguard.png',
    featured: false,
    tagline: 'Enterprise DDoS Protection',
    desc: 'Dual-layer DDoS blocking (Flask + AWS NACL). All security actions logged immutably on blockchain. Firebase auth, role-based access, Docker + Gunicorn on AWS EC2.',
    tags: ['Flask', 'Solidity', 'AWS', 'Firebase', 'Docker', 'Web3.py'],
    liveUrl: 'https://blocksafeguard.vercel.app',
    githubUrl: 'https://github.com/sejeeswarank/BlockSafeguard',
  },
  {
    id: 'chronocare',
    name: 'ChronoCare AI',
    logo: '/logos/chronocare.png',
    featured: false,
    tagline: 'Chronic Disease Risk Engine',
    desc: 'Predicts Diabetes, Hypertension, CKD, CVD and more (literally for all diseases) using hybrid ML and clinical rules. Doctor, Patient portals with JWT auth and downloadable PDF clinical reports.',
    tags: ['Scikit-learn', 'Flask', 'React', 'TailwindCSS', 'ReportLab'],
    liveUrl: null,
    githubUrl: 'https://github.com/sejeeswarank/ChronoCare',
  },
  {
    id: 'sisteventcalendar',
    name: 'SIST Event Calendar',
    logo: '/logos/sisteventcalendar.png',
    featured: false,
    tagline: 'College Event Management',
    desc: 'Full stack event platform with role based access for Students, Organizers & Staff. TypeScript monorepo with Next.js 14 App Router and Firebase.',
    tags: ['TypeScript', 'Next.js 14', 'Firebase', 'Express', 'TailwindCSS'],
    liveUrl: 'https://sisteventcalendar.vercel.app',
    githubUrl: 'https://github.com/sejeeswarank/sisteventcalendar',
  },
]

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python' }, { name: 'JavaScript' }, { name: 'TypeScript' },
      { name: 'Solidity' }, { name: 'C' }, { name: 'SQL' }, { name: 'HTML5' }, { name: 'CSS3' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: 'layers',
    skills: [
      { name: 'React' }, { name: 'Next.js 14' }, { name: 'Flask' }, { name: 'Node.js' },
      { name: 'Express' }, { name: 'Streamlit' }, { name: 'TailwindCSS' }, { name: 'Bootstrap' },
      { name: 'Pandas' }, { name: 'PyTorch' },
    ],
  },
  {
    id: 'blockchain',
    label: 'Blockchain',
    icon: 'link',
    skills: [
      { name: 'Solidity' }, { name: 'Hardhat' }, { name: 'Web3.py' },
      { name: 'Ethers.js' }, { name: 'MetaMask' }, { name: 'Ethereum' }, { name: 'Oracles' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'database',
    skills: [
      { name: 'MongoDB' }, { name: 'MySQL' }, { name: 'SQLite' }, { name: 'Firebase' }, { name: 'DBMS' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'AWS EC2/NACL' }, { name: 'Docker' }, { name: 'Vercel' },
      { name: 'Git' }, { name: 'GitHub' }, { name: 'Linux' }, { name: 'Gunicorn' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    icon: 'cpu',
    skills: [
      { name: 'Scikit-learn' }, { name: 'PyTorch' }, { name: 'Gemini API' },
      { name: 'pdfplumber' }, { name: 'Fernet Encryption' }, { name: 'Pandas' },
    ],
  },
]

export const certifications = [
  {
    issuer: 'Google · Coursera',
    name: 'Project Management Professional Certificate',
    url: 'https://coursera.org/share/3c399ef3e000abc17ffdcc9d31010193',
  },
  {
    issuer: 'HackerRank',
    name: 'Software Engineer Intern Certificate',
    url: 'https://www.hackerrank.com/certificates/3ac1a248182e',
  },
  {
    issuer: 'HackerRank',
    name: 'SQL (Advanced)',
    url: 'https://www.hackerrank.com/certificates/fbd3acc21b80',
  },
  {
    issuer: 'IBM · CognitiveClass',
    name: 'Combining Machine Learning and Rules for Cybersecurity',
    url: 'https://courses.cognitiveclass.ai/certificates/926a339c490d4441b8fed422978dd68c',
  },
  {
    issuer: 'IBM · CognitiveClass',
    name: 'Fundamentals of Encryption & Quantum-Safe Techniques',
    url: 'https://courses.cognitiveclass.ai/certificates/88066757edce43f194f2b1763e8e4182',
  },
  {
    issuer: 'Oracle',
    name: 'Cloud Infrastructure AI Foundations Associate',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=5FCA2B2F700CE3EB6D98CA627A393D9EFC2C534852B949FA4A7A087DC88F3B59',
  },
]