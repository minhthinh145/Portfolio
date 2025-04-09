import { RevealOnScroll } from "../RevealOnScroll";
import mySetup from "../../assets/images/mySetup.png";
import logoHCMUE from "../../assets/images/logoHCMUE.png";
export const About = () =>{

    const frontendSkills =["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"];
    const backendSkills =["ASP.NET Core","RESTful APIs", "Entity Framework"];
    const databaseSkills =["MSSQL", "PostgreSQL", "MySQL", "Oracle"];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible">
            {/* Cụm 1: Hình ảnh */}
            <div className="flex justify-center">
                <img src={mySetup} alt="My Setup" className="h-full w-auto rounded-lg object-cover" />
            </div>

            {/* Cụm 2: About Me + Skills + Education + Work Experience */}
            <div>
                {/* About Me */}
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                text-center md:text-left bg-clip-text text-transparent"> 
                    About Me
                </h2>
                <p className="text-gray-300 mb-8">
                    I am a passionate full-stack developer with a strong emphasis on backend development. My expertise includes designing and 
                    managing databases such as MSSQL, PostgreSQL, MySQL, and Oracle, ensuring data integrity and performance. 
                    I also build scalable server-side applications using ASP.NET Core. While I have experience in frontend technologies like React, TailwindCSS.
                </p>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                text-center md:text-left bg-clip-text text-transparent"> 
                    My Skills
                </h2>
                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Database</h3>
                        <div className="flex flex-wrap gap-2">
                            {databaseSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education & Work Experience */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S. in Information Technology (In Progress)</strong> - University of Education [2023 - Now]
                            </li>
                        </ul>
                    </div>
 
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Internship Aspiration - Aspiring to secure a software development internship in the upcoming year to gain hands-on experience in building scalable applications.
                                </h4>
                                <p>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}