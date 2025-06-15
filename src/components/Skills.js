export default function Skills() {
  const skills = [
    "JavaScript",
    "Node.js",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "REST APIs",
    "Postman",
    "AJAX",
    "jQuery"
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 w-full" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Skills
      </h2>

      {/* Full-width horizontal scroll container */}
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll gap-4 px-4">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full text-sm shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
