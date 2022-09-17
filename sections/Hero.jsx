import { BiDownload, BiSend } from "react-icons/bi";

const Hero = () => {
  return (
    <main className="section">
        <div className='container'>
            <div className='w-full font-extrabold mb-5'>
                <p className='text-center text-5xl sm:text-7xl text-dark dark:text-light-colort'>
                    Hola! soy <br />
                </p>
                <p className=" text-center text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mattias Duarte</p>
                <p className='text-center text-5xl sm:text-7xl text-dark dark:text-light-color'>
                    Desarrollador <br />
                    Web Frontend
                </p>
            </div>
            <div className="max-w-md mx-auto mb-5">
            <p className="text-center text-md font-normal sm:text-lg text-gray-300">
                    Soy Desarrollador Web, me especializo en realizar Frontend con React Js,
                    cuento con mas de 5 proyectos propios y 1 año de experiencia.
                </p>
            </div>
            <div className="grid sm:flex  items-center justify-center gap-5 w-full">
                <button className="flex items-center gap-2 min-w-max border-2  border-cyan-500 shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-500 py-3 px-4 rounded-md font-semibold transition-all">
                    Contactar <BiSend/>
                </button>
                
                <button className="flex items-center gap-2 min-w-max border-2  border-cyan-500 shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-500 py-3 px-4 rounded-md font-semibold transition-all">
                    Descargar CV
                    <BiDownload/>
                </button>
            </div>
        </div>
    </main>
  )
}

export default Hero