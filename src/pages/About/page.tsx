import React from 'react';

const about = [
    {
        text: "I'm a Software Development Engineer with 4+ years of experience in building scalable, user-centric web applications, microservices, and AI-powered workflows. I specialize in developing seamless frontend interfaces across multi-portal architectures, robust Backend-for-Frontend (BFF) layers, and resilient backend services using React, Next.js, Node.js, Express, and TypeScript, backed by distributed databases and cloud services like DynamoDB, AWS and MySQL.",
    },
    {
        text: 'My core skill set includes JavaScript, TypeScript, Node.js, Express, React, and Next.js (App Router), alongside practical experience in LLM provider integration (OpenAI and Gemini APIs) for automated document analysis and human-in-the-loop verification. I am well-versed in building event-driven pipelines (AWS SQS, S3), DynamoDB data modeling, RESTful API design, Strategy and Factory design patterns, unit testing with Jest, and progressive feature delivery using feature flags.',
    },
    {
        text: "Explore my portfolio to learn more about the systems and applications I've built, the engineering challenges I've tackled, and how I approach solving complex real-world problems through high-reliability software. I'm always open to collaborating on impactful engineering initiatives or joining forward-thinking teams—let's connect!",
    },
];

const About: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <p className="font-League_Spartan my-4 text-xl font-semibold tracking-widest text-portfolio-blue md:text-2xl">About</p>
                    <span className="ml-2 mt-1 h-[1px] w-full bg-portfolio-darkBlue"></span>
                </div>
                {about?.map((item) => {
                    return (
                        <>
                            <div className="mt-2">
                                {/* <ScrambleText text={item?.text} className="text-sm font-medium tracking-wider md:text-base" scrambleOptions={null} /> */}
                                <p className="text-sm font-thin tracking-wider text-gray-300 md:text-base md:font-thin">{item?.text}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default About;
