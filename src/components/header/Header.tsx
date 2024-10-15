import { Circle, Github, Instagram, Linkedin, Mail, SquareArrowOutUpRight, Twitter } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useScramble } from 'use-scramble';
import ScrambleText from '../ScrambleText';

interface Tech {
    id: number;
    name: string;
}

const Social_Links = [
    { index: 1, name: 'Github', link: 'https://github.com/vishal-jagamani', icon: <Github size={32} /> },
    { index: 2, name: 'LinkedIn', link: 'https://www.linkedin.com/in/vishaljagamani', icon: <Linkedin size={32} /> },
    { index: 3, name: 'Instagram', link: 'https://www.instagram.com/vishal_optimus', icon: <Instagram size={32} /> },
    { index: 4, name: 'Twitter', link: 'https://twitter.com/vishal_jagamani', icon: <Twitter size={32} /> },
];

const Resume_URL = 'https://drive.google.com/file/d/1TeZehh84DOvi6mKx_2LgNXjKsCIfGTaX/view';

const TechStack: Tech[] = [
    { id: 1, name: 'React' },
    { id: 2, name: 'NodeJS' },
    { id: 3, name: 'Express' },
    { id: 4, name: 'Typescript' },
    { id: 5, name: 'React Native' },
    { id: 6, name: 'React Redux' },
    { id: 7, name: 'MongoDB' },
    { id: 8, name: 'Elasticsearch' },
];

const Header: React.FC = () => {
    const [currentTech, setCurrentTech] = useState<Tech>(TechStack[0]);
    const [index, setIndex] = useState<number>(0);
    const { ref: nameTextRef } = useScramble({
        text: 'VISHAL JAGAMANI',
        tick: 7,
        step: 4,
        scramble: 15,
        speed: 1.2,
        seed: 2,
        chance: 1,
        range: [10, 100],
        overdrive: true,
        overflow: false,
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % TechStack.length);
        }, 1700);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentTech(TechStack[index]);
    }, [index]);

    return (
        <div className="mt-20 flex w-full flex-col">
            <div className="my-6 flex items-center space-x-2">
                <Circle size={10} strokeWidth={0} fill="#00ff00" />
                <p className="text-primary">Online.</p>
            </div>
            <div className="space-y-2">
                <p ref={nameTextRef} className="text-2xl font-bold tracking-[2px] text-primary md:text-3xl md:tracking-[5px]">
                    VISHAL JAGAMANI
                </p>
                <div className="flex items-center">
                    <p className="font-Geologica -mt-2 text-nowrap text-[2.2rem] font-bold tracking-wide text-portfolio-blue md:text-[4rem]">
                        Software Developer
                    </p>
                    <span className="ml-4 mt-3 h-1 w-full bg-portfolio-blue"></span>
                </div>
            </div>
            <div className="flex space-x-4">
                <ScrambleText
                    text={currentTech?.name}
                    className="font-League_Spartan text-nowrap text-4xl font-bold tracking-widest text-primary md:text-6xl"
                    scrambleOptions={{
                        tick: 1,
                        step: 4,
                        scramble: 15,
                        speed: 1,
                        seed: 1,
                        chance: 1,
                        range: [30, 50],
                        overdrive: true,
                        overflow: false,
                    }}
                />
            </div>
            <div className="mb-5 mt-12 flex justify-between">
                <div className="flex space-x-5 md:space-x-10">
                    {Social_Links?.map((item) => {
                        return (
                            <>
                                <React.Fragment key={item?.index}>
                                    {React.cloneElement(item?.icon, {
                                        strokeWidth: 1.3,
                                        className: 'text-primary hover:text-portfolio-blue cursor-pointer',
                                        onClick: () => window.open(item?.link),
                                    })}
                                </React.Fragment>
                            </>
                        );
                    })}
                </div>
                <div className="flex space-x-5 md:space-x-10">
                    <Mail
                        size={32}
                        className="cursor-pointer text-primary hover:text-portfolio-blue"
                        onClick={() => (window.location.href = 'mailto:vishaljagamani20@gmail.com')}
                    />
                    <SquareArrowOutUpRight
                        size={29}
                        className="cursor-pointer text-primary hover:text-portfolio-blue"
                        onClick={() => window.open(Resume_URL)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
