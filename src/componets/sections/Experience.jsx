import React from 'react'

export const Experience = () => {
  return (

        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Experience
                </h2>


                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-8">
                    <p className="text-gray-300 mb-6">
                        Over the years, I’ve worked for large companies and across different industries—from banking management systems to applications that handle thousands of dollars in transactions. 
                        I’ve used a variety of technologies, always adapting to the client’s needs. I’ve been responsible for estimating requirements, developing solutions, and deploying them to production. 
                        Here’s a bit of what I’ve been up to as a software engineer.
                    </p>

                    <div className="p-6 rounded-xl border border-white/10 ">
                        {/* HPE */}
                        <div className="flex items-stretch gap-6 pl-2 text-gray-300 mb-5 hover:-translate-y-1 transition-all bg-white/5">
                                <a href="/" className="flex w-[50px] flex-shrink-0 items-center justify-center self-stretch">
                                <div style={{ width: '50px', height: '30px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                                    <img
                                        alt="Logo HPE"
                                        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Hewlett_Packard_Enterprise_logo_2025.svg/1280px-Hewlett_Packard_Enterprise_logo_2025.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
                                        width="50"
                                        height="80"
                                        className="object-contain"
                                    />

                                </div>
                                </a>

                                <div>
                                <h4 className="text-lg font-semibold text-white mb-1"><strong>FULL STACK ENGINEER | HPE | Remote | 2025 - CURRENT</strong></h4>
                                <p className="text-sm leading-relaxed">
                                    Currently, I work as a Full Stack Engineer, responsible for designing, developing, testing, and implementing high-quality software solutions while following industry best practices and ensuring that client expectations and business requirements are met.

                                </p>
                                </div>
                        </div>
                        {/* Totem */}
                        <div className="flex items-stretch gap-6 pl-2 text-gray-300 mb-5 hover:-translate-y-1 transition-all bg-white/5">
                                <a href="/" className="flex w-[50px] flex-shrink-0 items-center justify-center self-stretch">
                                <img
                                    alt="Logo Totem"
                                    src="https://totemcr.com/assets/img/logo/logo-totem.svg"
                                    width="50"
                                    height="80"
                                    className="object-contain"
                                />
                                </a>

                                <div>
                                <h4 className="text-lg font-semibold text-white mb-1"><strong>FULL STACK DEVELOPER | Totem | Remote | 2022 - 2025</strong></h4>
                                <p className="text-sm leading-relaxed">
                                    I worked on a variety of interesting projects, including payment gateways, electronic invoicing systems, and backend implementations. 
                                    I also took part in functional testing using Happy, among other tasks. Throughout these projects, I used modern tools and made sure to maintain clear communication and strong 
                                    teamwork to meet client goals.
                                </p>
                                </div>
                        </div>
                        {/* Monge */}

                        <div className="flex items-stretch gap-6 pl-2 text-gray-300 mb-5 hover:-translate-y-1 transition-all bg-white/5" >
                            <a href="/" className="flex w-[50px] flex-shrink-0 items-center justify-center self-stretch">
                            <img
                                alt="Logo Monge"
                                src="https://www.grupomonge.com/assets/img/logo.svg"
                                width="50"
                                height="30"
                                className="object-contain"
                            />
                            </a>

                            <div>
                            <h4 className="text-lg font-semibold text-white mb-1"><strong>FULL STACK DEVELOPER | Monge(outsourcing) | Remote | 2022 - 2025</strong></h4>
                            <p className="text-sm leading-relaxed">
                                I worked with Grupo Monge via Totem, developing features and fixing bugs in REST APIs and frontend apps. 
                                I optimized performance, led smooth deployments, and collaborated across teams. Technologies included 
                            <strong> .NET, C#, Blazor, SQL Server, and Angular </strong>to build scalable, high-performance software aligned with business needs.
                            </p>
                            </div>
                        </div>
                        {/* THL */}

                        <div className="flex items-stretch gap-6 pl-2 text-gray-300 mb-5 hover:-translate-y-1 transition-all bg-white/5">
                            <a href="/" className="flex w-[50px] flex-shrink-0 items-center justify-center self-stretch">
                            <img
                                alt="Logo THL"
                                src="https://transporteshl.com/wp-content/uploads/2021/07/Frame.png"
                                width="50"
                                height="30"
                                className="object-contain"
                            />
                            </a>

                            <div>
                            <h4 className="text-lg font-semibold text-white mb-1"><strong>FULL STACK ENGINEER | THL | Aguas Zarcas | 2022</strong>
                            </h4>
                            <p className="text-sm leading-relaxed">
                                I developed new backend and frontend features to enhance functionality and user experience, 
                                using <strong> Laravel, Angular, TypeScript, AWS, Bootstrap etc.</strong> I fixed bugs across the platform, improved performance, and applied best practices to reduce load times.
                            </p>
                            </div>
                        </div>
                        {/* Nativo */}

                        <div className="flex items-stretch gap-6 pl-2 text-gray-300 mb-5 hover:-translate-y-1 transition-all bg-white/5">
                            <a href="/" className="flex w-[50px] flex-shrink-0 items-center justify-center self-stretch">
                            <img
                                alt="Logo Nativo"
                                src="https://digital.nativo.la/wp-content/uploads/2024/07/Nativo-logo.png"
                                width="50"
                                height="30"
                                className="object-contain"
                            />
                            </a>

                            <div>
                            <h4 className="text-lg font-semibold text-white mb-1"><strong>FRONT-END ENGINEER | Nativo S.A | Remote | 2021 - 2022</strong></h4>
                            <p className="text-sm leading-relaxed">
                                I contributed to the design and development of different applications, focusing on core features, debugging, and performance improvements. 
                                I worked closely with the team to enhance code quality and streamline workflows. Using Angular, Redux, and Material, I helped build modern, responsive, and scalable apps.
                            </p>
                            </div>
                        </div>
                    </div>


                    
                </div>               

                {/* <div className="rounded-xl p-8 border-white/10 border hover:-tranlate-y-1 transition-all mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Work experience
                        </h3>
                    </div>
                </div> */}

            </div>

        </section>
  )
}
