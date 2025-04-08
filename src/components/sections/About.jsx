import { RevealOnScroll } from "../RevealOnScroll";

export const About = () =>{

    const frontendSkills =["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Sass"];
    const backendSkills =["ASP.NET Core","MongoDB", "MySQL", "PostgreSQL"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            text-center bg-clip-text text-transparent"> 
            {" "}
                About Me
            </h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 ">
                    I am a passionate web developer with experience in building responsive and user-friendly websites. I specialize in modern JavaScript frameworks like React and have a keen eye for design and performance optimization. My goal is to create seamless digital experiences that leave a lasting impression.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                frontendSkills.map((tech, key) => (
                                <span 
                                key ={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                backendSkills.map((tech, key) => (
                                <span 
                                key ={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border 
                    hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                           🏫 Education 
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                           <li>
                                <strong>B.S. in Information Technology</strong> - University of Education [2023 - Now]
                            </li> 
                            <li>
                                Relevant Coursework: DSA , .NET Technology , Web Technology
                            </li>
                        </ul>
                    </div>     
                    <div className="p-6 rounded-xl border-white/10 border 
                    hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                           🏢 Work Experience 
                           </h3>
                           <div className="space-y-4 text-gray-300">
                                <div> 
                                    <h4 className="font-semibold">
                                        Software Engineer Intern - VNG Corporation [2/2026 - 5/2026]
                                    </h4>
                                    <p>
                                        Developer for internal tools using React and ASP.NET Core.
                                    </p>
                                </div>
                           </div>
                    </div>                  
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}