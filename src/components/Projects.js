export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 text-black dark:text-white w-full px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-2">Vetport Appointment Scheduler</h3>
            <p className="text-base">
              A dynamic scheduling system with weekly/monthly staff visibility and holiday overrides using DHTMLX Scheduler, AJAX, and jQuery.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-2">Woovet (In Progress)</h3>
            <p className="text-base">
              A custom veterinary software built with React and Node.js, integrating secure client communication and medical records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
