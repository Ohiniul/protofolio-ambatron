import React from "react";

const teamProjects = [
  {
    name: "Project A",
    description: "Website kuliner lokal Semarang.",
    link: "https://example.com/project-a",
  },
  {
    name: "Project B",
    description: "Sistem manajemen UMKM berbasis web.",
    link: "https://example.com/project-b",
  },
  {
    name: "Project C",
    description: "Aplikasi review makanan dan lokasi.",
    link: "https://example.com/project-c",
  },
];

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gray-800">Team Portfolio</h1>
    <div className="space-x-4">
      <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
    </div>
  </nav>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamProjects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-blue-300 rounded-lg bg-white p-5 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white py-10 px-5 mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600">Feel free to reach out for collaboration or inquiries.</p>
      </section>
    </div>
  );
};

export default Portfolio;
