import Course from "./Course";

const courses = [
  {
    title: "Introduction to Data Science",
    description:
      "Learn the basics of data science, including data analysis, visualization, and machine learning.",
    image: "/data-science-placeholder.png",
  },
  {
    title: "Web Development Fundamentals",
    description:
      "Master the fundamentals of web development, including HTML, CSS, and JavaScript.",
    image: "/web-dev-placeholder.png",
  },
  {
    title: "Digital Marketing Strategies",
    description:
      "Explore effective digital marketing strategies, including SEO, social media, and content marketing.",
    image: "/digital-marketing-placeholder.png",
  },
  {
    title: "Project Management Essentials",
    description:
      "Learn essential project management skills, including planning, execution, and monitoring.",
    image: "/project-management-placeholder.png",
  },
];

export default function FeauturedCourses() {
  return (
    <div className="w-full h-full flex flex-col gap-1 py-10">
      <h1 className="text-[22px]/7 font-bold">Featured Courses</h1>
      <div className="w-full h-full grid grid-cols-4 gap-4 py-5">
        {courses.map((course) => (
          <Course
            key={course.title}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}
