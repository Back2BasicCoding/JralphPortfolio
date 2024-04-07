"use client";
import React, {useTransition, useState }from 'react'
import Image from 'next/image';
import ButtonTab from './ButtonTab';

const TAB_DATA = [
    {
        title: "SKILLS",
        id:"skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Php</li>
                <li>node.js</li>
                <li>java</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "EDUCATION",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>University of the Cordilleras</li>
                <li>Bachelor of Science in Information Technology</li>
                <li>Major in Web Technologies</li>
            </ul>
        )
    },
    {
        title: "CERTIFICATIONS",
        id: "certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Civil Service Eligibilty (Professional)</li>
                <li>CodeAcademy</li>
            </ul>
        )
    }

]

const AboutSection = () => {
    const [tab, setTab] = useState("SKILLS");
    const [isPending, startTransition] = useTransition();

    const HandleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id);
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center lg:gap-1'>
            <Image className='rounded ' src="/images/boyInComputer.png" alt='AboutME' width={400} height={400} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Experienced full-stack developer with nine years of experience in the industry. Seeking to leverage high proficiency in SQL, Python, JavaScript and CSS in a full-time career as a full-stack developer for Greenway Tech. 
                </p>
                <div className='flex flex-row mt-8'>
                 <ButtonTab selectTab={()=> HandleTabChange("SKILLS")} active={tab === "SKILLS"}>
                    SKILLS
                 </ButtonTab>
                 <ButtonTab selectTab={()=> HandleTabChange("EDUCATION")} active={tab === "EDUCATION"}>
                    EDUCATION
                 </ButtonTab>
                 <ButtonTab selectTab={()=> HandleTabChange("CERTIFICATIONS")} active={tab === "CERTIFICATIONS"}>
                    CERTIFICATIONS
                 </ButtonTab>
                </div>
                <div className='mt-8'> {TAB_DATA.find((t) => t.title === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
