import { IoIosStar } from "react-icons/io";
import { LuRocket } from "react-icons/lu";
function About() {

  return (
    <div className='about'id='about'>
      <div className='flex justify-center'> 
        <p className="text-xl px-6 ">
            I specializes in web and mobile app development and
            maintenance.
            We ensure seamless performance, security, and long-term 
            support for your digital products.
        </p>
      </div> 
      <div className="text-center max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/60 shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <LuRocket className="w-8 h-8 text-purple-400" />
                
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Ready to Build the Future
                </h3>
              </div>
              <p className="text-xl text-white dark:text-white mb-8 leading-relaxed drop-shadow-lg font-medium">
                Full-stack developer with proven ability to ship production-grade applications. 
                Ready to scale your vision with cutting-edge technology and exceptional execution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:maazansari25667@gmail.com?subject=Let's Build Something Amazing"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  <IoIosStar className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Let's Collaborate</span>
                </a>
                <a 
                  href="https://drive.google.com/file/d/1JraG_4jz4NqKQRySN9pGkLDz5-Ajl9XY/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 dark:bg-neutral-800/50 text-neutral-900 dark:text-white font-semibold rounded-2xl border border-white/20 dark:border-neutral-700/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105"
                >
                  {/* <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" /> */}
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About