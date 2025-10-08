import React from "react";

const Projects = ({ title = "Projects", projects }) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl p-[2px] shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
            style={{ background: p.bg }}
            aria-label={`${p.title} へ移動`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-6 text-right">
                <span className="text-sm font-semibold text-blue-500 group-hover:underline">
                  Visit →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
