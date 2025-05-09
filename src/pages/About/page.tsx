import React from 'react';

const about = [
    {
        text: `I'm a Software Developer with over 2.8 years of experience in building scalable, user-centric web applications. I specialize in developing seamless frontend interfaces and efficient backend services using React, Node.js, Express, and TypeScript, with strong support from robust databases like MySQL and Elasticsearch.`,
    },
    {
        text: `My core skill set includes JavaScript, TypeScript, HTML, CSS, and Python, along with hands-on experience using frameworks and libraries such as ReactJS, Next.js, React Native, Redux/RTK Query, Bootstrap, Node.js, Express, and Flask. I'm well-versed in database management with MySQL and Elasticsearch, and I follow modern development workflows using Git for version control.`,
    },
    {
        text: `Explore my portfolio to learn more about the projects I've built, the tools I've worked with, and how I approach solving real-world problems through software. I'm always open to collaborating on meaningful projects or joining forward-thinking teams—let’s connect!`,
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
