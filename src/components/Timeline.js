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

  const filteredEvents = filter === "all"
    ? allEvents
    : allEvents.filter(event => event.type === filter);

  return (
    <section id="timeline" className="w-full px-8 py-16 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Timeline</h2>

        <div className="flex justify-center space-x-4 mb-8">
          {["all", "work", "education"].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "border-gray-400 text-gray-600 dark:text-gray-300"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4">
          {filteredEvents.map((event, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-1.5 border-2 border-white dark:border-gray-900" />
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.org}</p>
              <span className="text-sm italic text-gray-500 dark:text-gray-400">{event.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
