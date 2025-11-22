import { motion } from "motion/react";

function Hero() {
    const heroMetrics = [
    { label: 'Production Apps', value: '4+',  gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Tech Stack', value: '15+', gradient: 'from-purple-500 to-indigo-500' },
    { label: 'Enterprise Experience', value: '6mo+', gradient: 'from-green-500 to-emerald-500' },
    { label: 'AI Integrations', value: '5+',  gradient: 'from-orange-500 to-red-500' }
  ];
    return (
        <div className='home pt-10 mb-5 flex items-center content-center' id='home'>
            <div className=' mx-auto'>
                <div className="group/btn relative mb-5">
                <div className="absolute -inset-1 mt-10 from-purple-500/50 to-indigo-500/50 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-sm"></div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {heroMetrics.map((metric, index) => {
                    return (
                        <motion.article 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="group relative"
                        >
                        
                        {/* Main Card */}
                        <div className="relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105  shadow-lg text-center">
                            <div className={`inline-flex p-3 rounded-2xl bg-linear-to-r ${metric.gradient} shadow-lg group-hover:rotate-12 transition-all duration-500 mb-4`}>
                            {/* <Icon className="w-6 h-6 text-white" /> */}
                            </div>
                            <p className={`text-3xl font-black ${metric.gradient.includes('blue') ? 'text-blue-300' : metric.gradient.includes('purple') ? 'text-purple-300' : metric.gradient.includes('green') ? 'text-green-300' : 'text-orange-300'} mb-2 drop-shadow-sm`}>
                            {metric.value}
                            </p>
                            <p className="text-sm font-semibold text-white drop-shadow-sm">{metric.label}</p>
                        </div>
                        </motion.article>
                    );
                    })}
                </div>
              </div>
            </div>
        </div>
    );
    }   

export default Hero;