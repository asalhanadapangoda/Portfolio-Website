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
      'MERN nutrition platform with 154+ traditional Sri Lankan foods, Groq/OpenAI-powered AI advisors, and a triple-role marketplace.',
    category: 'fullstack',
    language: 'JavaScript',
    technologies: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Groq AI', 'Cloudinary'],
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
    name: 'Smart Business Analytics & DSS',
    repo: 'Online-Smart-Business-Analytics-Decision-Support-System',
    type: 'Individual',
    description:
      'Enterprise analytics platform for SMEs — real-time KPI monitoring, predictive sales analysis using Prophet, and NLP-powered business insights.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Spring Boot', 'React 19', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'Prophet'],
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
    id: 'bookfair-reservation',
    name: 'Bookfair Reservation System',
    repo: 'bookfair-reservation-system',
    type: 'Group',
    description:
      'Group-based booking and reservation system for book fairs, featuring secure JWT authentication, PayPal integration, and QR-based ticket verification.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Spring Boot', 'React', 'MySQL', 'Material UI', 'PayPal SDK', 'ZXing QR'],
    github: `${GITHUB}/bookfair-reservation-system`,
    gitlab: null,
    demo: null,
    gradient: 'from-teal-500/20 to-cyan-600/20',
    icon: '🎫',
    featured: false,
    highlight: 'Group · Spring Boot & MySQL',
  },
  {
    id: 'online-book-store',
    name: 'Online Book Store',
    repo: 'Online-Book-Store',
    type: 'Individual',
    description:
      'E-commerce book purchasing and inventory platform built with Java and Spring Boot, integrated with a MySQL database.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    github: `${GITHUB}/Online-Book-Store`,
    gitlab: null,
    demo: null,
    gradient: 'from-amber-500/20 to-orange-600/20',
    icon: '📚',
    featured: false,
    highlight: 'Individual · Spring Boot & MySQL',
  },
  {
    id: 'library-management-system',
    name: 'Library Management System',
    repo: 'Library-Management-System-',
    type: 'Individual',
    description:
      'MVC-based library management system built with Java Servlets and JSP, featuring custom flat-file database persistence.',
    category: 'fullstack',
    language: 'Java',
    technologies: ['Java Servlets', 'JSP', 'MVC', 'Flat-file Storage'],
    github: `${GITHUB}/Library-Management-System-`,
    gitlab: null,
    demo: null,
    gradient: 'from-violet-500/20 to-purple-600/20',
    icon: '📖',
    featured: false,
    highlight: 'Individual · Java Servlets & JSP',
  },

  // ─── AI / ML ───────────────────────────────────────────────────────
  {
    id: 'animasense-ai',
    name: 'AnimaSense AI • Cat & Dog Classifier',
    repo: 'cat-dog-classifier',
    type: 'Individual',
    description:
      'Web & AI application designed to classify photos of cats and dogs using a pre-trained MobileNetV2 CNN, featuring a premium glassmorphic dark-mode web interface.',
    category: 'ai-ml',
    language: 'Python',
    technologies: ['React', 'Python', 'Flask', 'TensorFlow', 'MobileNetV2', 'OpenCV'],
    github: `${GITHUB}/cat-dog-classifier`,
    gitlab: null,
    demo: null,
    gradient: 'from-orange-500/20 to-blue-600/20',
    icon: '🐾',
    featured: true,
    highlight: 'Individual · Deep Learning Classifier',
  },
  {
    id: 'crop-decision-support',
    name: 'AgroSense — Smart Crop Recommendation System',
    repo: 'Crop-Decision-Support-System',
    type: 'Individual',
    description:
      'AI-powered decision support system that recommends optimal crops based on soil and environmental conditions using a Keras deep learning model and a premium glassmorphic interface.',
    category: 'ai-ml',
    language: 'Python',
    technologies: ['React', 'Python', 'Flask', 'TensorFlow', 'Scikit-Learn', 'Joblib', 'Vanilla CSS'],
    github: `${GITHUB}/Crop-Decision-Support-System`,
    gitlab: null,
    demo: null,
    gradient: 'from-lime-500/20 to-green-600/20',
    icon: '🌾',
    featured: false,
    highlight: 'Individual · ML Recommendation',
  },
  {
    id: 'heart-disease-predictor',
    name: 'Heart Disease Risk Predictor',
    repo: 'Heart-Disease-Risk-Level-Predictor',
    type: 'Individual',
    description:
      'Web application that estimates an individual\'s heart disease risk level from clinical health data using a trained Keras deep learning model, featuring a React frontend with a color-coded risk meter.',
    category: 'ai-ml',
    language: 'Python',
    technologies: ['React', 'Python', 'Flask', 'TensorFlow', 'Scikit-Learn', 'Joblib'],
    github: `${GITHUB}/Heart-Disease-Risk-Level-Predictor`,
    gitlab: null,
    demo: null,
    gradient: 'from-rose-500/20 to-pink-600/20',
    icon: '❤️‍🩹',
    featured: false,
    highlight: 'Individual · ML Prediction',
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
