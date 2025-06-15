export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 text-black dark:text-white w-full px-8 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Say Hello 👋</h2>
        <p className="text-lg mb-6">
          Whether you’ve got a project in mind, a question, or just want to connect — I’d love to hear from you.
        </p>

        <div className="space-y-2 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:rahulyadavme97@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              rahulyadavme97@gmail.com
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/rahul-yadav00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/rahul-yadav00
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rahul-yadav-810a7528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/rahul-yadav-810a7528b/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
