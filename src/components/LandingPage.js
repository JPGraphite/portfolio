import { Fragment } from "react";
import recentWorkData from '../data/recent-work.json';
import Header from "./Header";
import Grid from "./Grid";
import TechAccordion from "./TechAccordion";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

function LandingPage() {
    const [openMenu, setOpenMenu] = useState(1);
    
    const handleOpenMenu = (menu) => {
            setTimeout(() => {
                setOpenMenu(menu)

            }, 200);
    }

  return (
        <Fragment>
            <main className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto overflow-hidden ">
                <Header setOpenMenu={handleOpenMenu} />
                {/* Parallax Background  */}
                <section
                    id="home"
                    className="flex flex-wrap w-full h-[500px] bg-cover bg-fixed bg-repeat bg-top justify-center items-center"
                    style={{
                        backgroundImage: "url('https://i.imgur.com/DjYsp3D.jpg')"
                        }}>
                    <div className="w-full h-full sm:mx-20 relative">
                        <h1 className="text-white text-5xl font-semibold mt-20 mb-10 w-fit px-4 py-4 text-start bg-gradient-to-l from-purple-900 to-slate-800">
                        <TypeAnimation
                            sequence={[
                                'Hi', // Types 'One'
                                1000, // Waits 1s
                                'Hi, Im Jayden :)', // Types 'Three' without deleting 'Two'
                                () => {
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={0}
                            style={{ fontSize: '1em' }}
                            />
                        </h1>
                        <div className="w-full md:w-2/3 text-4xl font-bold text-slate-100 px-10 my-12 py-10 bg-gradient-to-r from-blue-800   text-left">
                        <h2>I'm a <span className="text-black">Full-Stack Developer</span></h2>
                        <p className="text-3xl font-bold">Based in Geelong, Victora</p>
                        </div>

                    </div>
                    
                    
                </section>
                {/* End Parralax */}
                {/* Info Section */}
                <section
                    id="about"
                    className="flex items-center justify-start  font-sans  mx-auto w-full pb-20 lg:py-20 from-purple-800 to-slate-800 bg-gradient-to-bl">
                    <div className="w-full flex-wrap flex lg:ml-20">
                        <div className="px-6 py-10 bg-gradient-to-b from-purple-700  w-full lg:w-2/3">
                            <div
                                className="mx-auto mb-8 px-10 text-center lg:mx-0 lg:text-left">
                                    <div className=" w-fit h-[70px]">
                                        <div className="">
                                            <h2 className="neon py-2 text-xl text-left lg:text-5xl">
                                                About

                                                <span className="neon text-xl lg:text-5xl leading-relaxeds"
                                                    > Me
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                <p
                                    className="visible text-xl mx-0 mt-10 mb-0 leading-relaxed text-left text-slate-300">
                                    I've been working as a Full-stack developer since 2019, starting my Journey rebuilding
                                     Graphite Online from the ground up with a small team.
                                    For the past 12 months I've been working at Brand Collective updating,
                                     maintaining and improving 9 separate Ecommerce websites.
                                    as well as replatforming some of our existing sites.
                                </p>
                            </div>
                        </div>
                        {/* About me Logo */}
                        <div className="px-3 py-10 md:py-0 w-full lg:w-1/3">
                            
                            <div className="flex justify-center items-center ml-4">
                                <img width={400} src="https://i.imgur.com/rfotB5z.png"></img>

                            </div>
                        </div>
                    </div>
                </section>
                {/* End Info */}
                {/* Parallax Background  */}
                <section
                    
                    className="flex flex-col w-full h-[10px] bg-cover bg-fixed bg-center flex justify-center items-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1626204327506-0d3ee11d7752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
                        }}>
                </section>
                {/* End Parallax Background  */}
                {/* Recent Work */}
                <section
                    id="recent-work"
                    className="flex flex-wrap items-center -mx-3 py-10 font-sans  mx-auto w-full px-6  pb-20 bg-gradient-to-br from-slate-800 via-slate-800 to-blue-800 bg-slate-800" 
                    >
                    <h2 className="neon-noFlicker neon-blue text-4xl leading-8 px-6 mb-8  text-start uppercase">
                        Previous Work
                    </h2>
                    <div className=" w-full">
                        <Grid data={recentWorkData}/>
                    </div>
                </section>
                {/* End Recent Work */}
                {/* Parallax Background  */}
                <section
                    className="flex flex-col w-full h-[10px] bg-cover bg-fixed bg-center flex justify-center items-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
                        }}>
                </section>
                {/* End Parallax Background  */}
                {/* Tech Section */}
                <section id="tech" className="mx-auto w-full bg-gradient-to-br from-blue-800 via-slate-800 to-slate-800 px-6 ">
                    <TechAccordion openMenu={openMenu} setOpenMenu={handleOpenMenu} />
                </section>
                {/* End Tech Section */}               
                {/* Parallax Background  */}
                <section
                    className="flex flex-col h-[10px] bg-cover bg-fixed bg-center justify-center items-center w-[100vw] -mx-10"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
                        }}>
                </section>
                {/* End Parallax Background  */}         
                {/* Contact Section */}
                <section
                    id="contact"
                    className="pt-6 flex items-center justify-center  font-sans  mx-auto w-full pb-10 bg-gradient-to-bl from-slate-800 via-slate-800 to-purple-300 shadow-2xl">
                    <div className="w-full flex flex-wrap md:mx-20 justify-center">
                        <div className="px-6 py-10 from-slate-800 via-slate-800 to-purple-900 bg-gradient-to-tr w-full md:w-2/3 flex justify-center">
                            <div
                                className="mx-auto mb-8 text-center lg:mx-0 w-4/5 lg:text-left">
                                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl text-white">
                                    Get in touch!

                                </h2>

                                <form className="p-4 flex flex-col gap-2">
                                    <label className="text-blue-600 text-left text-2xl font-bold pt-2" htmlFor="name">First name:</label>
                                    <input className="bg-slate-400 focus:border-none focus:outline-2 focus:outline-blue-400 outline-offset-2" type="text" id="name" name="name"></input>
                                    <label className="text-blue-600 text-left text-2xl font-bold pt-2" htmlFor="email">Email:</label>
                                    <input className="bg-slate-400 focus:border-none focus:outline-2 focus:outline-blue-400 outline-offset-2" type="email" id="email" name="email"></input>
                                    <label className="text-blue-600 text-left text-2xl font-bold pt-2" htmlFor="message">Message:</label>
                                    <textarea className="bg-slate-400 focus:border-none focus:outline-2 focus:outline-blue-400 outline-offset-2 h-64" type="textarea" id="message" name="message"></textarea>
                                    <button className="bg-blue-600 p-2 mt-4 mb-0" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </section>
                {/* End Contact */}
            </main>
        </Fragment>
    );
}
export default LandingPage;
