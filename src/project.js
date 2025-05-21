import React from "react";
import png1 from './assets/fauzi.jpg';
import png2 from './assets/zku.jpg';
import png4 from './assets/radit.jpg';
import png5 from './assets/raul.jpg';
import png6 from './assets/fadil.jpg';
import png7 from './assets/zeki.jpg';
import png8 from './assets/wildan.jpg';
import png9 from './assets/raka.jpg';
import png10 from './assets/Siko.jpg';

const Projects = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 min-h-screen" id="projects">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-12">Member Tukam</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { src: png1, title: "Azfer Jausyaq Fauzi", desc: "Data Analyst", link: "https://www.instagram.com/mangzippp?igsh=NGpkZ2l5aGltc2Jw" },
                        { src: png2, title: "Zakaria Akmal Pasha", desc: "Front-End", link: "https://github.com/zkuu1/zkuu1" },
                        { src: png4, title: "Muhammad Raditya N", desc: "Graphic Designer", link: "https://www.instagram.com/raditya_orangbaik?igsh=aDhncG9qNDlsM2M1=" },
                        { src: png5, title: "Raul Daffa R", desc: "UI UX", link: "https://figma.com/@raul" },
                        { src: png6, title: "M Adrik Fadil", desc: "Data Analyst", link: "https://linkedin.com/in/fadil" },
                        { src: png7, title: "Zaki Reza", desc: "Project Manager", link: "https://github.com/zaki" },
                        { src: png8, title: "Wildan Akhtara Danish", desc: "Back-End", link: "https://www.instagram.com/rody_zack?igsh=MTB6bDNvaHpodXB0bw==" },
                        { src: png9, title: "Raka Isyrafi M", desc: "Graphic Designer", link: "https://behance.net/raka" },
                        { src: png10, title: "Ananda Sico P", desc: "UI UX", link: "https://figma.com/@sico" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 border border-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg transition-transform hover:scale-105"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full aspect-square object-cover mb-4 rounded-xl"
                            />
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-200">{item.desc}</p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:underline text-sm mt-1 inline-block"
                            >
                                Visit Profile
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
