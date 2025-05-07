export const About = () => {
    const frontendSkills = [
        "JavaScript",
        "React",
        "Angular",
        "Css",
        "HTML",
        "Bootstrap",
        "TailwindCSS"
    ];
    const backendSkills = [
        "C#",
        ".Net",
        "NodeJs",
        "Express",
        "API's development",
        "SQL server",
        "PostgreSQL",
        "MongoDB",
    ];

    frontendSkills.map((skill, key) => {
        console.log(skill);
        console.log(key);
    })


  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-tranlate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I’m all about creating quality products, solving real problems, and leaving things better than I found them. Every project is a chance to learn, improve, and push myself a bit further than yesterday.
                    When I’m not coding, I’m probably exploring new tools, diving into tech articles, or just tweaking something until it feels right. Let's build something cool.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                        {
                            frontendSkills.map((skill, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                {skill}
                                </span>
                            ))
                        }

                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                        {
                            backendSkills.map((skill, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                {skill}
                                </span>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Education
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.S in Software Engineering </strong> - National Technical University (2018 - 2021)
                            </li>
                            <li>
                                <strong> Building RESTful Web APIs with ASP.NET Core </strong> - UDEMY
                            </li>
                            <li>
                                <strong> React: From Zero to Expert (Hooks and MERN) </strong> - UDEMY
                            </li>
                            <li>
                                <strong> Legacy - Angular: From Zero to Expert </strong> - UDEMY
                            </li>
                            <li>
                                <strong> English </strong> - National Institute of Learning(INA)
                            </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Languages
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Spanish </strong> - Native
                            </li>
                            <li>
                                <strong> English </strong> - B2+
                            </li>
                    </ul>
                </div>


                
            </div>               


        </div>

    </section>
  )
}
