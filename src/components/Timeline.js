"use client";

import { useState } from "react";

export default function Timeline() {
  const allEvents = [
    {
      title: "SDE-I at Harns Technologies",
      type: "work",
      org: "Bengaluru",
      duration: "Feb 2023 – Present",
    },
    {
      title: "Tech Lab Assistant at IIT Kharagpur",
      type: "work",
      org: "Kharagpur",
      duration: "Jun 2022 – Feb 2023",
    },
    {
      title: "Mech. Maintenance Engineer at Supreme Industries",
      type: "work",
      org: "Kharagpur",
      duration: "Sep 2021 – May 2022",
    },
    {
      title: "B.Tech, Mech. Engg — AEC",
      type: "education",
      org: "Asansol Engineering College",
      duration: "2016 – 2020",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredEvents =
    filter === "all" ? allEvents : allEvents.filter((event) => event.type === filter);

  return (
    <section
      id="timeline"
      className="w-full px-8 py-16 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Timeline</h2>

        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          {["all", "work", "education"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "border-gray-400 text-gray-600 dark:text-gray-300 hover:border-blue-400"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Horizontal Timeline */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 md:gap-8 lg:gap-10 w-max px-4">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="min-w-[250px] md:min-w-[300px] flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-transform hover:-translate-y-1 relative"
              >
                <span
                  className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-medium ${
                    event.type === "work"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                  }`}
                >
                  {event.type}
                </span>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{event.org}</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">{event.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
