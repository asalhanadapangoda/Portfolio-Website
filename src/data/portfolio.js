export const personalInfo = {
  name: 'Asal Handapangoda',
  title: 'Software Engineering Undergraduate',
  tagline:
    'Results-driven Software Engineering undergraduate at the University of Kelaniya — building innovative full-stack, AI, and data-driven solutions for real-world challenges.',
  email: 'asalhimsanda@gmail.com',
  phone: '078-101-41-91',
  github: 'https://github.com/asalhanadapangoda',
  gitlab: 'https://gitlab.com/asalhanadapangoda',
  linkedin: 'https://www.linkedin.com/in/asal-handapangoda',
  location: 'Horana, Western Province, Sri Lanka',
  profileImage: import.meta.env.BASE_URL + 'profile.png',
  cvUrl: import.meta.env.BASE_URL + 'cv.pdf',
  headline: 'B.Sc (Hons) Software Engineering · University of Kelaniya',
  summary:
    'Results-driven Software Engineering undergraduate with a strong foundation in software development, Artificial Intelligence, and Machine Learning. Skilled in problem-solving, analytical thinking, and collaborative teamwork, with a passion for developing innovative technology solutions for real-world challenges.',
  languages: ['English', 'Sinhala'],
  interests: [
    'Artificial Intelligence',
    'Deep Learning',
    'Machine Learning',
    'Full-Stack Web Development',
  ],
};

export const typingRoles = [
  'Full Stack Developer',
  'AI & ML Enthusiast',
];

export const highlights = [
  'B.Sc (Hons) Software Engineering',
  'Junior Hackathon — 1st Runner-Up (Smart Diet SL)',
  'IEEE Young Professionals — Best Member Coordinator 2025',
];

export const aboutContent = {
  intro: personalInfo.summary,
  education: {
    degree: 'B.Sc (Hons) in Software Engineering',
    institution: 'University of Kelaniya',
    period: '2024 – 2028',
    gpa: '3.74',
    details:
      'Domains: Data Science & Engineering, Health Informatics, Business Engineering Applications.',
  },
  softSkills: [
    'Problem Solving & Critical Thinking',
    'Leadership',
    'Communication & Teamwork',
    'Adaptability & Flexibility',
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['React', 'Angular', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    items: ['Java', 'Node.js', 'Express.js', 'PHP', 'C', 'Spring Boot'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Stacks & Frameworks',
    icon: '🌐',
    items: ['MERN Stack', 'Spring Boot', 'Flutter', 'FastAPI'],
  },
  {
    title: 'AI & Data Science',
    icon: '🤖',
    items: ['Anaconda', 'Google Colab', 'Jupyter', 'Kaggle', 'Prophet', 'Scikit-learn'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    items: [
      'Power BI',
      'GitHub',
      'GitLab',
      'Jira',
      'Postman',
      'Figma',
      'Docker',
      'AWS',
      'Cloudinary',
    ],
  },
];

/** Core skills shown with proficiency bars */
export const skills = [
  { name: 'Java', level: 92, icon: 'java' },
  { name: 'React', level: 90, icon: 'react' },
  { name: 'Spring Boot', level: 88, icon: 'spring' },
  { name: 'MySQL', level: 90, icon: 'mysql' },
  { name: 'Node.js', level: 86, icon: 'node' },
  { name: 'JavaScript', level: 90, icon: 'javascript' },
  { name: 'Python', level: 85, icon: 'python' },
  { name: 'MongoDB', level: 85, icon: 'mongodb' },
  { name: 'PostgreSQL', level: 82, icon: 'postgres' },
  { name: 'Docker', level: 80, icon: 'docker' },
];

export const experience = [
  {
    title: 'Project Coordinator',
    organization: 'TRACE Sri Lanka',
    period: 'May 2025 – Present',
    location: 'Sri Lanka',
    description:
      'Coordinating innovation and community projects at a nonprofit tech hub — connecting startups, students, and partners to strengthen Sri Lanka\'s technology ecosystem.',
  },

  {
    title: 'Backend Developer',
    organization: 'Sawiya Organization',
    period: 'Sep 2025 – Present',
    employmentType: 'Volunteer',
    location: 'Sri Lanka',
    workMode: 'Remote',
    description:
      'Building and maintaining the SAWIYA volunteer platform backend using Java, Spring Boot, Hibernate, and MySQL — with GitLab CI/CD, Docker, and AWS deployment.',
  },
];

export const volunteerActivities = [
  {
    organization: 'IEEE SL Inspire National Project',
    roles: [
      { title: 'Finance Vice Chair', period: '2026 – Present' },
      { title: 'Member Coordinator', period: '2025 – 2026' },
    ],
  },
  {
    organization: "Software Engineering Students' Association — University of Kelaniya",
    roles: [{ title: 'Treasurer', period: '2026 – Present' }],
  },
  {
    organization: "IEEE Student Branch — University of Kelaniya",
    roles: [{ title: 'Webmaster', period: '2026 – Present' }],
  },
];

export const achievements = [
  {
    title: 'Junior Hackathon',
    award: '1st Runner-Up',
    project: 'Smart Diet SL',
  },
  {
    title: 'IEEE Young Professionals',
    award: 'Best Member Coordinator',
    year: '2025',
  },
];

export const certifications = [
  { name: 'Process Data from Dirty to Clean', issuer: 'Google', date: 'Dec 2025' },
  { name: 'Prepare Data for Exploration', issuer: 'Google', date: 'Nov 2025' },
  { name: 'Ask Questions to Make Data-Driven Decisions', issuer: 'Google', date: 'Oct 2025' },
  { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google', date: 'Oct 2025' },
  { name: 'Figma Design Basics and Features', issuer: 'Alison', date: 'May 2025' },
  { name: 'Generative AI for Beginners', issuer: 'Simplilearn', date: 'May 2025' },
  { name: 'What is DevOps?', issuer: 'Simplilearn', date: 'May 2025' },
  { name: 'Build a Free Website with WordPress', issuer: 'Coursera', date: 'Mar 2025' },
];

export { projects, projectCategories, getProjectFilters, filterProjects } from './projects';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/asalhanadapangoda', icon: 'github' },
  { name: 'GitLab', url: 'https://gitlab.com/asalhanadapangoda', icon: 'gitlab' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asal-handapangoda', icon: 'linkedin' },
  { name: 'Medium', url: 'https://medium.com/@asalhimsanda', icon: 'medium' },
  { name: 'Email', url: 'mailto:asalhimsanda@gmail.com', icon: 'email' },
];
