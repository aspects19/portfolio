import React from "react";

function Home() {
    return (
        <div className='home pt-10 mb-5 flex items-center content-center' id='home'>
            <div className=' mx-auto'>
                <p className="text-2xl text-gray-200 pt-10 mb-5 flex w-full align-items-center items-center content-center ">
                    Hi <br />
                    I am <span className=" pl-2.5 mt-7 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Aspect</span>
                </p>
            </div>
        </div>
    );
    }   

export default Home;