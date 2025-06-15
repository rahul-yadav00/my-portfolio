export default function Footer() {
  return (
    <footer
      // className="w-full bg-gray-100 dark:bg-gray-800 text-center py-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700"
      className="bg-transparent text-black dark:text-white w-full py-8 items-center"
    >
      <p>
        © {new Date().getFullYear()} Rahul Yadav. Built with 💻 and ☕.
      </p>
    </footer>
  );
}
