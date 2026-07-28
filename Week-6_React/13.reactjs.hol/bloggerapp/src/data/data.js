// ============================================================
// DATA FILE - Books, Blogs and Courses data arrays
// Used across BookDetails, BlogDetails, CourseDetails components
// ============================================================

// Books Data (matches hint: id, bname, price)
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

// Blogs Data
export const blogs = [
  { id: 201, title: 'Getting Started with React Hooks', author: 'Alice Johnson', category: 'React', published: true },
  { id: 202, title: 'Understanding Redux Toolkit',      author: 'Bob Smith',     category: 'Redux', published: false },
  { id: 203, title: 'CSS Grid vs Flexbox',             author: 'Carol White',   category: 'CSS',   published: true },
  { id: 204, title: 'Node.js Best Practices',          author: 'David Brown',   category: 'Node',  published: false },
];

// Courses Data
export const courses = [
  { id: 301, cname: 'Full Stack Web Development', duration: '6 months', level: 'Beginner',     available: true  },
  { id: 302, cname: 'React & TypeScript Mastery', duration: '3 months', level: 'Intermediate', available: true  },
  { id: 303, cname: 'DevOps & Cloud Computing',   duration: '4 months', level: 'Advanced',     available: false },
  { id: 304, cname: 'Python for Data Science',    duration: '2 months', level: 'Beginner',     available: true  },
];
