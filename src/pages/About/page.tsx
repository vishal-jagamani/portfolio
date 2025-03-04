import React from 'react';

const about = [
    {
        text: `I am a Software Developer with a strong focus on building dynamic web applications that prioritize user experience and efficient database management. With over 2.5 years of professional experience, I specialize in React, Node.js, MySQL, and MongoDB, along with a broad skill set spanning various programming languages and development tools.`,
    },
    {
        text: `My technical expertise includes JavaScript, HTML, CSS, and Python, complemented by frameworks and libraries such as Node.js, React.js, React Native, React Redux/RTK Query and Flask. I have hands-on experience in data management with MySQL and MongoDB and a solid understanding of version control with Git.`,
    },
    {
        text: `Explore my portfolio to see my projects, technical expertise, and contributions to software development. Feel free to connect, I'm always open to discussing new opportunities and collaborations!!!`,
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
