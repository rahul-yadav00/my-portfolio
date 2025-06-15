// src/components/Skills.js
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
    "Jira / Trello",
    "Postman",
    "Creativity",
    "Team Collaboration",
    "Problem Solving"
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full text-sm shadow hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
