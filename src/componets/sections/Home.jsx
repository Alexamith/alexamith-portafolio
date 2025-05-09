import foto from '/me.jpeg';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative"> 
        
        <div className="text-center z-10 px-4 ">

            <div className="flex justify-center space-x-4 mb-6" >
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-500/50">
                    <img
                    src={foto} // Cambia esto por el path correcto o una URL
                    alt="Foto de perfil"
                    className="object-cover w-full h-full"
                    />
                </div>

            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm Alex
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Hey! I’m Alexamith, but just call me Alex. I’m a full stack developer with several years of experience building software. 
                I love writing clean, scalable code, delivering high-quality products, and making sure clients are genuinely happy. 
                My goal is to be better than I was yesterday and keep pushing myself with every project.
            </p>
            <div className="flex justify-center space-x-4" >
                <a href="#experience" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View experience
                </a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0,0,15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact me
                </a>
            </div>

        </div>

    </section>
  )
}
