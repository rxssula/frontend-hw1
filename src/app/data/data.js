import { generateSlug } from "../utils/generateSlug";

const fakeData = [
  {
    title: "The Art of Tailwind CSS",
    author: "John Doe",
    date: "June 5, 2024",
    description:
      "Learn how to use Tailwind CSS to create beautiful and responsive designs for your projects.",
  },
  {
    title: "Mastering JavaScript",
    author: "Jane Smith",
    date: "June 6, 2024",
    description:
      "Deep dive into JavaScript programming language and become a proficient developer.",
  },
  {
    title: "Web Development Trends in 2024",
    author: "Michael Johnson",
    date: "June 7, 2024",
    description:
      "Explore the latest trends in web development and stay ahead in the industry.",
  },
  {
    title: "Introduction to React",
    author: "Emily Brown",
    date: "June 8, 2024",
    description:
      "Get started with React and build interactive user interfaces for your web applications.",
  },
  {
    title: "Python for Beginners",
    author: "Chris Wilson",
    date: "June 9, 2024",
    description:
      "A beginner-friendly guide to learning Python programming language from scratch.",
  },
  {
    title: "UX Design Principles",
    author: "Sarah Johnson",
    date: "June 10, 2024",
    description:
      "Learn the fundamental principles of user experience design and create intuitive interfaces.",
  },
  {
    title: "Data Science Essentials",
    author: "David Martinez",
    date: "June 11, 2024",
    description:
      "Discover the essential concepts and techniques of data science for extracting insights from data.",
  },
  {
    title: "Blockchain Technology Explained",
    author: "Alex Davis",
    date: "June 12, 2024",
    description:
      "Understand the fundamentals of blockchain technology and its applications beyond cryptocurrencies.",
  },
  {
    title: "Cybersecurity Fundamentals",
    author: "Jessica Adams",
    date: "June 13, 2024",
    description:
      "An overview of cybersecurity principles and best practices to protect digital assets.",
  },
  {
    title: "Machine Learning Fundamentals",
    author: "Daniel Clark",
    date: "June 14, 2024",
    description:
      "Explore the basics of machine learning and its applications in various industries.",
  },
  // Add more fake data as needed
];

const dataWithSlugs = fakeData.map((data) => ({
  ...data,
  slug: generateSlug(data.title),
}));

export default dataWithSlugs;
