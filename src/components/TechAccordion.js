import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import feData from '../data/front-end.json'
import beData from '../data/back-end.json'
import analData from '../data/analytics.json'
import miscData from '../data/misc-tech.json'
import Grid from "./Grid";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IconContext } from "react-icons";



 
function Icon({ id, open, color }) {
    return (
        <IconContext.Provider value={{ color: color}}>
        <div>
            {id === open ? <FaChevronUp /> : <FaChevronDown/>}
        </div>
        </IconContext.Provider>
            

    );
  }


export default function TechAccordion({openMenu, setOpenMenu}) {
 
  const handleOpen = (value) => {
    setOpenMenu(openMenu === value ? 0 : value);
  };
 
  return (
    <Fragment>
        <Accordion className="" id="front-end" open={openMenu === 1} icon={<Icon className="" id={1} open={openMenu} color={"blue"}/> }>
            <AccordionHeader className="neon-noFlicker neon-purple font-normal uppercase text-4xl px-6 flex justify-between" onClick={() => handleOpen(1)}>
                Front-end
            </AccordionHeader>
            <AccordionBody className="overflow-x-visible">
            {/* Front End Carousel */}
            <section
                    className="flex flex-wrap items-center font-sans mx-auto w-full pb-20 " 
                    >
                    <div className=" w-full">
                        <Grid data={feData} title="Front end Tech" />
                    </div>
                </section>
                {/* End Front End Carousel */}
            </AccordionBody>
        </Accordion>
        {/* Parallax Background  */}
        <section
            className="flex flex-col  h-[10px] bg-cover bg-fixed bg-center justify-center items-center w-[110vw] -mx-10"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1626204327506-0d3ee11d7752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
                }}>
        </section>
        {/* End Parallax Background  */}
        <Accordion id="back-end" open={openMenu === 2} icon={<Icon id={2} open={openMenu} color={"hotpink"} />} >
            <AccordionHeader className="neon-green uppercase font-normal text-4xl px-6" onClick={() => handleOpen(2)}>
            Back-End
            </AccordionHeader>
            <AccordionBody>
            {/* Back End Carousel */}
            <section
                    className="flex flex-wrap items-center font-sans mx-auto w-full  pb-20 " 
                    >
                    <div className=" w-full">
                        <Grid data={beData} title="Back end Tech" />
                    </div>
                </section>
                {/* End Back End Carousel */}
            </AccordionBody>
        </Accordion>
        {/* Parallax Background  */}
        <section
            className="flex flex-col h-[10px] bg-cover bg-fixed bg-center justify-center items-center w-[110vw] -mx-10"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
                }}>
        </section>
        {/* End Parallax Background  */}
        <Accordion id="analytics" open={openMenu === 3} icon={<Icon id={3} open={openMenu} color={"green"} />}>
            <AccordionHeader className="neon-yellow uppercase font-normal text-4xl px-6" onClick={() => handleOpen(3)}>
            Analytics
            </AccordionHeader>
            <AccordionBody>
            <section
                className="flex flex-wrap items-center font-sans mx-auto w-full pb-20 " 
                >
                <div className="w-full">
                    <Grid data={analData} title="Analytics" />
                </div>
            </section>
            </AccordionBody>
        </Accordion>
        {/* Parallax Background  */}
        <section
            className="flex flex-col h-[10px] bg-cover bg-fixed bg-center justify-center items-center w-[110vw] -mx-10"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1626204327506-0d3ee11d7752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
                }}>
        </section>
        {/* End Parallax Background  */}
        <Accordion id="misc" open={openMenu === 4} icon={<Icon id={4} open={openMenu} color={"orange"} />}>
            <AccordionHeader className="neon-blue uppercase font-normal text-4xl px-6" onClick={() => handleOpen(4)}>
            Other Stuff
            </AccordionHeader>
            <AccordionBody>
            <section
                className="flex flex-wrap items-center font-sans mx-auto w-full pb-20 " 
                >
                <div className="w-full">
                    <Grid data={miscData} title="Miscellaneous" />
                </div>
            </section>
            </AccordionBody>
        </Accordion>
    </Fragment>
  );
}