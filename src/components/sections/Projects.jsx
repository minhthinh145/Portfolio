import { RevealOnScroll } from "../RevealOnScroll"
import socialImage from "../../assets/images/social.png"
export const Projects = () => {

    return <section id="projects" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            text-center bg-clip-text text-transparent"> 

                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                
                ">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"> Website E-comerce</h3>
                    <p className="text-gray-300 mb-4">
                        This project is a modern e-commerce website designed for selling high-quality keyboards. It features a sleek user interface, responsive design, and seamless navigation to provide an excellent shopping experience for keyboard enthusiasts.
                    </p>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-l from-blue-500 to-cyan-400 bg-clip-text text-transparent">In Progress</h3>
                    <p className="text-gray-300 mb-4">
                        The backend has been completed, and the frontend is currently under development.
                    </p>
                    <div className="w-full flex flex-wrap gap-2">
                        {["React","TailwindCSS","MSSQL" , "ASP .NET Core" , "AWS", "GIT", "Docker"].map((tech,key) => (
                            <span 
                            key ={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-x-2 my-4">
                        <a 
                            href="https://github.com/minhthinh145/WebsiteSoldKeyBoard" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                        >
                            View Project 
                            <img src={socialImage} alt="GitHub Logo" className="h-12 w-12 ml-2" />
                        </a>
                    </div>
                </div>  
            </div>
        </div>
        </RevealOnScroll>
    </section>
}