import React from 'react';

const about = [
    {
        text: `I am a Software Developer specialized in crafting dynamic web applications with a user-centric design approach and optimal database management. With 2+ years of professional experience, I bring a strong background in React, Node.js, MySQL, and Elasticsearch, along with proficiency in a range of programming languages and tools.`,
    },
    {
        text: `My technical skills include expertise in Javascript, HTML, CSS and Python, complemented by frameworks and libraries such as Bootstrap, Python Flask, NodeJS, ReactJS, React Native, and React Redux/RTK Query. I have proficient skills in managing data efficiently using MySQL and Elasticsearch, along with a strong understanding of version control using GIT.`,
    },
    {
        text: `Explore my portfolio to learn more about my projects, technical skills, and contributions to the field of software development. Let's connect and discuss how I can contribute to your next project or collaborate on exciting opportunities!`,
    },
];

const About: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <p className="font-League_Spartan my-4 text-2xl font-semibold tracking-widest text-portfolio-blue">About</p>
                    <span className="ml-2 mt-1 h-[1px] w-full bg-portfolio-darkBlue"></span>
                </div>
                {about?.map((item) => {
                    return (
                        <>
                            <div className="mt-2">
                                {/* <ScrambleText text={item?.text} className="text-sm font-medium tracking-wider md:text-base" scrambleOptions={null} /> */}
                                <p className="text-base font-thin tracking-wider text-primary md:text-base md:font-thin">{item?.text}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default About;
