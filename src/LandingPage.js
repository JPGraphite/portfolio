import { Fragment } from "react";
import recentWorkData from './recent-work.json';
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
                    className="flex flex-wrap w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1506775352297-a5fa9c136675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
                        }}>
                    <div className="w-full h-full sm:mx-20">
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
                    className="flex items-center justify-start  font-sans  mx-auto w-full py-20 from-purple-800 to-slate-800 bg-gradient-to-bl">
                    <div className="w-full flex-wrap flex sm:mx-20">
                        <div className="px-6 py-10 bg-gradient-to-b from-purple-700  w-full md:w-2/3">
                            <div
                                className="mx-auto mb-8 px-10 text-center lg:mx-0 lg:text-left">
                                    <div className="bg-gradient-to-r from-white bg-clip-text to-blue-400 w-fit h-[70px]">
                                        <div className="">
                                            <h2 className="text-transparent py-2 text-3xl font-bold text-left lg:text-5xl">
                                                About

                                                <span className="text-transparent text-3xl lg:text-5xl text-blue-500 leading-relaxeds"
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
                        <div className="px-3 py-10 md:py-0 w-full md:w-1/3">
                            
                            <div className="flex justify-center items-center">
                                <svg
                                    className="block max-w-full h-auto align-middle lg:max-w-lg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="400"
                                    viewBox="0 0 524.67004 627.58314">
                                    <path
                                        d="M369.04619,148.0378h51.762v17.04364c0,28.5682-23.19375,51.76195-51.76195,51.76195h-.00005v-68.80558h0Z"
                                        transform="translate(789.85437 364.88118) rotate(-180)"
                                        fill="#2f2e41" />
                                    <polygon
                                        points="409.33502 185.02664 418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664"
                                        fill="#a0616a" />
                                    <polygon
                                        points="409.33502 185.02664 418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664"
                                        opacity=".1" />
                                    <rect
                                        x="359.33502"
                                        y="270.53845"
                                        width="50"
                                        height="74"
                                        transform="translate(768.67004 615.07691) rotate(-180)"
                                        fill="#a0616a" />
                                    <path
                                        d="M441.83502,405.03845l-11,59s7,41-14,83l-14,43-21-3s13-32,13-46c0-14,3-68,3-68l-1.5-61.61811,45.5-6.38189Z"
                                        fill="#2f2e41" />
                                    <path
                                        d="M378.83502,586.03845s24-9,26,4l-1,6s9,27-4,29c-13,2-25,5-26-1-1-6-.98425-13.48966,1.50787-18.74483,2.49213-5.25517,3.49213-19.25517,3.49213-19.25517Z"
                                        fill="#2f2e41" />
                                    <g>
                                        <path
                                            d="M366.13446,395.88629l-5.84242,59.73162s-18.12633,37.43576-9.63539,83.61913l1.48898,45.19716,21.00587,2.95865s-3.58764-34.353,.30589-47.80069c3.89353-13.44769,16.0298-66.15169,16.0298-66.15169l18.5774-58.77007-41.93013-18.7841Z"
                                            fill="#2f2e41" />
                                        <path
                                            d="M376.31126,587.26662s-20.5502-15.31957-26.08672-3.38865l-.70811,6.04141s-16.1539,23.43185-4.22298,28.96837c11.93092,5.53652,22.62319,11.75548,25.25239,6.2703,2.62921-5.48519,4.69702-12.68375,3.76473-18.42469-.9323-5.74094,2.00069-19.46674,2.00069-19.46674Z"
                                            fill="#2f2e41" />
                                    </g>
                                    <path
                                        d="M429.83502,310.53845c23.51917,21.94757,25.26404,56.67346,11.5,98,0,0-44,30-76-8l-16-77,80.5-13Z"
                                        fill="#2f2e41" />
                                    <path
                                        d="M390.33502,203.53845l25,4-2,63,28,56-36,18s-28-53-33-86c-5-33-2-57-2-57l20,2Z"
                                        fill="#6c63ff" />
                                    <path
                                        d="M371.33502,205.53845l-25,4,2,63-6,58,14,16s28-53,33-86,2-57,2-57l-20,2Z"
                                        fill="#6c63ff" />
                                    <path
                                        d="M401.33502,207.03845l5.5-1.5s19.5-2.5,22.5,5.5c3,8,2,55,2,55,0,0,5.16,57.68504-14.92,58.34252-20.08,.65748-16.08-47.34252-16.08-47.34252l1-70Z"
                                        fill="#6c63ff" />
                                    <circle cx="400.60838" cy="170.13134" r="25.881" fill="#a0616a" />
                                    <path
                                        d="M368.33502,209.03845l-5.5-1.5s-19.5-2.5-22.5,5.5-2,55-2,55c0,0-5.16,57.68504,14.92,58.34252s16.08-47.34252,16.08-47.34252l-1-70Z"
                                        fill="#6c63ff" />
                                    <path
                                        d="M385.65786,205.75047c-5.55216-1.40863-11.84681,4.52132-14.06128,13.24853-.93243,3.47409-1.01931,7.12088-.2534,10.63535l-2.38571,9.92043-.17551-.00924-18.81824,44.34887c-4.37547,10.31165-3.91314,22.14968,1.66767,31.86201,3.3199,5.77765,7.67792,9.66177,12.79497,5.69682,8.49085-6.57912,14.03686-44.24916,16.56905-65.88826l5.85496-21.9959c2.35018-2.72464,4.01347-5.97257,4.85067-9.47191,2.2149-8.72385-.49107-16.93801-6.04318-18.34671Z"
                                        fill="#a0616a" />
                                    <path
                                        d="M351.0597,191.06934c1.31647-4.00284,3.91522-7.50723,5.07796-11.55742,1.54386-5.37763,4.83076,6.55243,5.15143,.96678,.60951-10.61668,16.81288-37.92626,26.06316-43.17205,9.25028-5.24583,14.56315-3.66417,23.98727,1.26249,0,0,4.57463,.29093,10.26981,3.10267,5.69518,2.81174,10.82161,7.31486,13.03674,13.26749,1.7558,4.7183,1.56147,9.89986,2.14813,14.89992,1.63436,13.92994,9.44292,27.17801,7.76691,41.10298-.52286,4.3445-2.17418,8.83707-5.72639,11.39244-3.55221,2.55534-9.29104,2.27736-11.62924-1.42142-.79788-1.26218-1.13531-2.75965-1.81906-4.08713-.6838-1.32748-1.91931-2.56501-3.41201-2.5237-2.2436,.06211-3.38562,3.07261-2.5009,5.13537s2.96377,3.30817,4.91583,4.41597c-4.6491,2.0915-10.41629,1.44022-14.48185-1.63548-4.06552-3.0757-6.26097-8.44832-5.51283-13.49099,1.05424-7.10612,11.4065-5.63531,12.62603-12.71492,.88773-5.15371,4.00542-13.77714,3.15622-18.93732-.8492-5.16022-4.92762,1.08784-.63124-1.89373-4.72678,2.27867-14.83731-13.30983-19.78567-15.05584-4.94831-1.74601-9.14394-5.5267-11.39402-10.26715-5.24845,7.60821-9.86523,5.54211-11.7449,14.59185-1.87967,9.04974-.14171,29.60975,7.598,34.66228-3.09743,2.11334-5.56661,5.13552-7.01993,8.59211-.82334,1.95819-1.35711,4.10081-2.72366,5.72716-2.60993,3.10617-7.4291,3.29511-11.27027,1.98909-4.76288-1.61941-8.83514-5.17625-11.08048-9.67806-2.24534-4.50181-2.63675-9.89451-1.06507-14.67338Z"
                                        fill="#2f2e41" />
                                    <path
                                        d="M0,626.13577c0,.66003,.53003,1.19,1.19006,1.19H523.48004c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H1.19006c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                                        fill="#3f3d56" />
                                    <g>
                                        <path
                                            d="M340.03771,.99983H134.36885c-23.32296,0-42.22995,18.90699-42.22995,42.22995V583.66267c0,23.32291,18.90695,42.22986,42.22986,42.22986h205.66894c23.32296,0,42.22995-18.90699,42.22995-42.22995V43.22978c0-23.32296-18.90699-42.22995-42.22995-42.22995Z"
                                            fill="#fff" />
                                        <path
                                            d="M340.03782,626.89209H134.36888c-23.83691,0-43.22998-19.39258-43.22998-43.22949V43.22998C91.1389,19.39307,110.53196,0,134.36888,0h205.66895c23.83691,0,43.22998,19.39307,43.22998,43.22998V583.6626c0,23.83691-19.39307,43.22949-43.22998,43.22949ZM134.36888,2c-22.73438,0-41.22998,18.49561-41.22998,41.22998V583.6626c0,22.73438,18.49561,41.22949,41.22998,41.22949h205.66895c22.73438,0,41.22998-18.49512,41.22998-41.22949V43.22998c0-22.73438-18.49561-41.22998-41.22998-41.22998H134.36888Z"
                                            fill="#3f3d56" />
                                        <path
                                            d="M75.14368,94.56643c-1.80561,0-3.27392,1.46831-3.27392,3.27392v26.1914c0,1.80561,1.46831,3.27392,3.27392,3.27392s3.27392-1.46831,3.27392-3.27392v-26.1914c0-1.80561-1.46831-3.27392-3.27392-3.27392Z"
                                            fill="#3f3d56" />
                                        <path
                                            d="M354.93558,87.46124h-82.66786c-3.50634,0-6.35907-2.85273-6.35907-6.35907s2.85273-6.35907,6.35907-6.35907h82.66786c3.50634,0,6.35907,2.85273,6.35907,6.35907s-2.85273,6.35907-6.35907,6.35907Z"
                                            fill="#e6e6e6" />
                                        <path
                                            d="M277.38221,137.46854h-80.3571c-2.02587,0-3.67427-1.64841-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h80.3571c2.02587,0,3.67351,1.64765,3.67351,3.67351,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                            fill="#6c63ff" />
                                        <ellipse
                                            cx="78.32235"
                                            cy="92.07002"
                                            rx="64.899"
                                            ry="63.53157"
                                            fill="#6c63ff" />
                                        <path
                                            d="M100.34912,60.02429c-8.64008,15.73267-17.28021,31.46545-25.92029,47.19818-5.50665-9.72955-10.98322-19.47626-16.50342-29.19818-1.90643-3.3576-7.09204-.33765-5.18079,3.02832,6.39911,11.2699,12.73193,22.57727,19.13104,33.84717,1.09412,1.92694,4.09796,1.97168,5.18085,0,9.49115-17.28241,18.9823-34.56482,28.47345-51.84717,1.8598-3.38647-3.31964-6.41742-5.18085-3.02832Z"
                                            fill="#fff" />
                                        <rect
                                            x="117.61763"
                                            y="14.65784"
                                            width="46.49807"
                                            height="5.96129"
                                            rx=".31021"
                                            ry=".31021"
                                            fill="#e6e6e6" />
                                        <circle
                                            cx="318.33631"
                                            cy="15.8501"
                                            r="4.76903"
                                            fill="#e6e6e6" />
                                        <circle
                                            cx="331.45115"
                                            cy="15.8501"
                                            r="4.76903"
                                            fill="#e6e6e6" />
                                        <circle
                                            cx="344.56599"
                                            cy="15.8501"
                                            r="4.76903"
                                            fill="#e6e6e6" />
                                        <path
                                            d="M133.86826,157.13577c0,.66003,.53003,1.19,1.19006,1.19h204.28998c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H135.05832c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                                            fill="#3f3d56" />
                                        <g>
                                            <path
                                                d="M319.7578,250.66658h-122.59803c-2.02587,0-3.67427-1.64842-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h122.59803c2.02587,0,3.67351,1.64765,3.67351,3.67352,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                                fill="#6c63ff" />
                                            <path
                                                d="M319.7578,303.66658h-122.59803c-2.02587,0-3.67427-1.64842-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h122.59803c2.02587,0,3.67351,1.64765,3.67351,3.67352,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                                fill="#6c63ff" />
                                            <path
                                                d="M319.7578,356.66658h-122.59803c-2.02587,0-3.67427-1.64842-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h122.59803c2.02587,0,3.67351,1.64765,3.67351,3.67352,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                                fill="#6c63ff" />
                                            <circle cx="159.97525" cy="246.53845" r="9" fill="#6c63ff" />
                                            <path
                                                d="M158.97516,261.53845v-2c7.44385,0,13.5-6.05615,13.5-13.5s-6.05615-13.5-13.5-13.5v-2c8.54688,0,15.5,6.95312,15.5,15.5s-6.95312,15.5-15.5,15.5Z"
                                                fill="#3f3d56" />
                                            <circle cx="159.97525" cy="299.53845" r="9" fill="#6c63ff" />
                                            <path
                                                d="M158.97516,314.53845v-2c7.44385,0,13.5-6.05566,13.5-13.5,0-7.44385-6.05615-13.5-13.5-13.5v-2c8.54688,0,15.5,6.95312,15.5,15.5s-6.95312,15.5-15.5,15.5Z"
                                                fill="#3f3d56" />
                                            <circle cx="159.97525" cy="352.53845" r="9" fill="#6c63ff" />
                                            <path
                                                d="M158.97516,367.53845v-2c7.44385,0,13.5-6.05566,13.5-13.5s-6.05615-13.5-13.5-13.5v-2c8.54688,0,15.5,6.95312,15.5,15.5s-6.95312,15.5-15.5,15.5Z"
                                                fill="#3f3d56" />
                                        </g>
                                    </g>
                                    <path
                                        d="M384.01219,203.75047c5.55216-1.40863,11.84681,4.52132,14.06128,13.24853,.93243,3.47409,1.01931,7.12088,.2534,10.63535l2.38571,9.92043,.17551-.00924,18.81824,44.34887c4.37547,10.31165,3.91314,22.14968-1.66767,31.86201-3.3199,5.77765-7.67792,9.66177-12.79497,5.69682-8.49085-6.57912-14.03686-44.24916-16.56905-65.88826l-5.85496-21.9959c-2.35018-2.72464-4.01347-5.97257-4.85067-9.47191-2.2149-8.72385,.49107-16.93801,6.04318-18.34671Z"
                                        fill="#a0616a" />
                                    <polygon
                                        points="405.38874 228.05282 384.33502 243.01874 394.86188 309.31266 408.0646 326.38767 423.44391 321.0686 427.94066 289.72998 422.64886 259.42289 405.38874 228.05282"
                                        fill="#6c63ff" />
                                </svg>
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
                    className="flex flex-wrap items-center -mx-3 py-10 font-sans  mx-auto w-full px-6 sm:px-20 pb-20 bg-gradient-to-br from-slate-800 via-slate-800 to-blue-800 bg-slate-800" 
                    >
                    <h2 className="text-4xl leading-8 font-semibold mb-8 text-transparent bg-gradient-to-tr from-blue-300 to-purple-500 bg-clip-text text-start uppercase font-bold">
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
                                    <label className="text-blue-600 text-left" htmlFor="name">First name:</label>
                                    <input className="bg-slate-400 focus:border-none focus:outline-2 focus:outline-blue-400 outline-offset-2" type="text" id="name" name="name"></input>
                                    <label className="text-blue-600 text-left" htmlFor="email">Email:</label>
                                    <input className="bg-slate-400 focus:border-none focus:outline-2 focus:outline-blue-400 outline-offset-2" type="email" id="email" name="email"></input>
                                    <label className="text-blue-600 text-left" htmlFor="message">Message:</label>
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
