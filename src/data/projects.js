/**
 * Portfolio projects — CV highlights + GitHub repositories
 */

export const projectCategories = [
  {
    id: 'fullstack',
    label: 'Full Stack',
    description: 'End-to-end web applications with backend APIs and user interfaces',
    icon: '🌐',
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    description: 'Machine learning, prediction systems, and intelligent decision support',
    icon: '🤖',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Client-side apps, UI components, and interactive web experiences',
    icon: '🎨',
  },
  {
    id: 'web',
    label: 'Web / PHP',
    description: 'PHP-based websites and server-rendered web applications',
    icon: '🌍',
  },
];

const GITHUB = 'https://github.com/asalhanadapangoda';
const GITLAB = 'https://gitlab.com/asalhanadapangoda';

export const projects = [
  // ─── Full Stack ────────────────────────────────────────────────────
  {
    id: 'smart-diet-sl',
    name: 'Smart Diet SL',
    repo: 'Smart-Diet-SL',
    type: 'Group',
    description:
      'MERN nutrition platform for Sri Lanka with 154+ traditional foods, English/Sinhala/Tamil UI, Groq-powered AI advisor, and a triple-role marketplace (User, Farmer, Admin).',
    category: 'fullstack',
    language: 'JavaScript',
    technologies: ['React 19', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Groq AI', 'Tailwind CSS'],
    github: `${GITHUB}/Smart-Diet-SL`,
    gitlab: null,
    demo: 'https://smart-diet-sl.vercel.app',
    gradient: 'from-emerald-500/20 to-cyan-600/20',
    icon: '🥗',
    featured: true,
    highlight: '2nd Place — JuniorHack 7.0 · Live Demo',
  },
  {
    id: 'online-smart-business-analytics',
    name: 'Online Smart Business Analytics',
    repo: 'Online-Smart-Business-Analytics-Decision-Support-System',
    type: 'Individual',
    description:
      'Enterprise analytics platform for SMEs — real-time KPI monitoring, predictive sales analysis, automated reporting, and NLP-based business insights.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Spring Boot', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    github: `${GITHUB}/Online-Smart-Business-Analytics-Decision-Support-System`,
    gitlab: null,
    demo: null,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    icon: '📊',
    featured: true,
    highlight: 'Individual · Decision Support System',
  },
  {
    id: 'day-news-global',
    name: 'The Day News Global',
    repo: 'News & Media Platform',
    type: 'Individual',
    description:
      'Full-stack MERN news platform with React, Vite, Tailwind CSS, Groq Llama 3 AI chatbot, JWT auth, Cloudinary media, and admin CMS.',
    category: 'fullstack',
    language: 'JavaScript',
    technologies: ['MERN', 'React', 'Vite', 'Tailwind CSS', 'MongoDB', 'Groq AI'],
    github: GITHUB,
    gitlab: null,
    demo: null,
    gradient: 'from-blue-500/20 to-indigo-600/20',
    icon: '📰',
    featured: true,
    highlight: 'Individual · News & Media Platform',
  },
  {
    id: 'sawiya',
    name: 'Project SAWIYA',
    repo: 'SAWIYA',
    type: 'Organization',
    description:
      'Volunteer platform connecting temples, elderly homes, and orphanages with donors across rural Sri Lanka. Spring Boot, React, AWS, GitLab CI/CD.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL', 'Docker', 'AWS'],
    github: null,
    gitlab: GITLAB,
    demo: null,
    gradient: 'from-rose-500/20 to-orange-600/20',
    icon: '❤️',
    featured: true,
    highlight: 'Backend Developer · Volunteer Project',
  },
  {
    id: 'online-book-store',
    name: 'Online Book Store',
    repo: 'Online-Book-Store',
    type: 'Individual',
    description:
      'E-commerce book store — browse catalog, manage orders, and handle inventory with a Java backend and web interface.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    github: `${GITHUB}/Online-Book-Store`,
    gitlab: null,
    demo: null,
    gradient: 'from-amber-500/20 to-orange-600/20',
    icon: '📚',
    featured: false,
    highlight: null,
  },
  {
    id: 'library-management-system',
    name: 'Library Management System',
    repo: 'Library-Management-System-',
    type: 'Individual',
    description:
      'Complete library solution — books, members, borrowing records, and administrative controls.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'CRUD'],
    github: `${GITHUB}/Library-Management-System-`,
    gitlab: null,
    demo: null,
    gradient: 'from-violet-500/20 to-purple-600/20',
    icon: '📖',
    featured: false,
    highlight: null,
  },
  {
    id: 'bookfair-reservation',
    name: 'Bookfair Reservation System',
    repo: 'bookfair-reservation-system',
    type: 'Individual',
    description:
      'Reservation system for book fair events — scheduling, bookings, and organizer workflows.',
    category: 'fullstack',
    language: 'JavaScript',
    technologies: ['JavaScript', 'Web App', 'Reservation System'],
    github: `${GITHUB}/bookfair-reservation-system`,
    gitlab: null,
    demo: null,
    gradient: 'from-teal-500/20 to-cyan-600/20',
    icon: '🎫',
    featured: false,
    highlight: null,
  },

  // ─── AI / ML ───────────────────────────────────────────────────────
  {
    id: 'crop-decision-support',
    name: 'Crop Decision Support System',
    repo: 'Crop-Decision-Support-System',
    type: 'Individual',
    description:
      'Agricultural decision support tool helping farmers make informed crop-related choices using data and interactive workflows.',
    category: 'ai-ml',
    language: 'JavaScript',
    technologies: ['JavaScript', 'Decision Support', 'Agriculture', 'Web App'],
    github: `${GITHUB}/Crop-Decision-Support-System`,
    gitlab: null,
    demo: null,
    gradient: 'from-lime-500/20 to-green-600/20',
    icon: '🌾',
    featured: false,
    highlight: null,
  },
  {
    id: 'heart-disease-predictor',
    name: 'Heart Disease Risk Predictor',
    repo: 'Heart-Disease-Risk-Level-Predictor',
    type: 'Individual',
    description:
      'Machine learning system that predicts heart disease risk levels from health data using Python and Scikit-learn.',
    category: 'ai-ml',
    language: 'Python',
    technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    github: `${GITHUB}/Heart-Disease-Risk-Level-Predictor`,
    gitlab: null,
    demo: null,
    gradient: 'from-rose-500/20 to-pink-600/20',
    icon: '❤️‍🩹',
    featured: false,
    highlight: null,
  },

  // ─── Frontend ──────────────────────────────────────────────────────
  {
    id: 'weather-app',
    name: 'Weather App',
    repo: 'Weather-App',
    type: 'Individual',
    description:
      'Interactive weather application — fetch and display real-time weather data with a clean JavaScript interface.',
    category: 'frontend',
    language: 'JavaScript',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    github: `${GITHUB}/Weather-App`,
    gitlab: null,
    demo: null,
    gradient: 'from-sky-500/20 to-indigo-600/20',
    icon: '🌤️',
    featured: false,
    highlight: null,
  },

  // ─── Web / PHP ─────────────────────────────────────────────────────
  {
    id: 'cricket-league',
    name: 'Cricket League Website',
    repo: 'Cricket-League-Website',
    type: 'Individual',
    description:
      'PHP cricket league website — team listings, match info, and league management for local cricket events.',
    category: 'web',
    language: 'PHP',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: `${GITHUB}/Cricket-League-Website`,
    gitlab: null,
    demo: null,
    gradient: 'from-green-500/20 to-lime-600/20',
    icon: '🏏',
    featured: false,
    highlight: null,
  },
];

export function getProjectFilters() {
  const counts = projects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    acc.all = (acc.all || 0) + 1;
    acc.featured = (acc.featured || 0) + (p.featured ? 1 : 0);
    return acc;
  }, {});

  return [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'featured', label: 'Featured', count: counts.featured },
    ...projectCategories.map((c) => ({
      id: c.id,
      label: c.label,
      count: counts[c.id] || 0,
    })),
  ].filter((f) => f.id === 'all' || f.id === 'featured' || (f.count && f.count > 0));
}

export function getProjectsByCategory(projectList = projects) {
  return projectCategories
    .map((cat) => ({
      ...cat,
      projects: projectList.filter((p) => p.category === cat.id),
    }))
    .filter((group) => group.projects.length > 0);
}

export function filterProjects(filterId) {
  if (filterId === 'all') return projects;
  if (filterId === 'featured') return projects.filter((p) => p.featured);
  return projects.filter((p) => p.category === filterId);
}
