export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 text-black dark:text-white w-full px-8 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Vetport */}
          <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-xl transition-transform hover:scale-[1.02] bg-white dark:bg-gray-800">
            <div>
              <h3 className="text-xl font-bold mb-1">Vetport</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">
                Developed @ Harns Technologies
              </p>
              <p className="text-base mb-4">
                A veterinary practice management system I contributed to as a Backend Developer. Built 48+ backend REST APIs, integrated 13+ third-party services (Zoetis, Antech, Hisa), and migrated 20+ clinics. Implemented advanced staff scheduling using DHTMLX Scheduler, AJAX, and jQuery.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 text-sm mb-4 justify-center">
                {["Node JS", "JavaScript", "REST API", "MongoDB", "SQL", "HTML", "CSS", "AJAX", "jQuery"].map((tech) => (
                  <span key={tech} className="bg-blue-200/70 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 px-2 py-1 rounded-md shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://vetport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm block text-center"
              >
                Visit Vetport
              </a>
            </div>
          </div>

          {/* Woovet */}
          <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-xl transition-transform hover:scale-[1.02] bg-white dark:bg-gray-800">
            <div>
              <h3 className="text-xl font-bold mb-1">Woovet</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">
                Developed @ Harns Technologies
              </p>
              <p className="text-base mb-4">
                A custom veterinary software built with React and Node.js. Developed secure client communication, appointment scheduling, and medical records modules with JWT-based authentication.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 text-sm mb-4 justify-center">
                {["React", "Node JS", "Express JS", "MongoDB"].map((tech) => (
                  <span key={tech} className="bg-blue-200/70 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 px-2 py-1 rounded-md shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://woovet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm block text-center"
              >
                Visit Woovet
              </a>
            </div>
          </div>

          {/* SyntaxSphere */}
          <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-xl transition-transform hover:scale-[1.02] bg-white dark:bg-gray-800">
            <div>
              <h3 className="text-xl font-bold mb-1">SyntaxSphere</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">
                Personal Project
              </p>
              <p className="text-base mb-4">
                SyntaxSphere is a word counter and a versatile online tool for manipulating text inputs. With SyntaxSphere, you can effortlessly convert text to uppercase, lowercase, capitalize the first letter, remove extra spaces, copy to clipboard, and more. Explore the endless possibilities of text transformation with SyntaxSphere!
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 text-sm mb-4 justify-center">
                {["React", "Node JS", "HTML", "CSS", "JavaScript"].map((tech) => (
                  <span key={tech} className="bg-blue-200/70 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 px-2 py-1 rounded-md shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/rahul-yadav00/SyntaxSphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm block text-center"
              >
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
