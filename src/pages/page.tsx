'use client';

import Header from '@/components/header/Header';
import { motion } from 'framer-motion';
import { ChevronsUp } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import About from './About/page';
import Contact from './Contact/page';
import Experience from './Experience/page';
import Projects from './Projects/page';

const HomePage: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [isScrollToTopButtonVisible, setIsScrollToTopButtonVisible] = useState<boolean>(false);

    useEffect(() => {
        if (window.scrollY > 100) handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setIsScrollToTopButtonVisible(window.scrollY > 100 ? true : false);
    };
    const handleScrollToTopButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (theme === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    return (
        <>
            <div className="z-10 w-full select-none justify-center px-4 md:w-7/12 md:px-7">
                <Header />
                <div className="mt-10" ref={aboutRef} id="about">
                    <About />
                </div>
                <div className="mt-16" ref={experienceRef} id="experience">
                    <Experience />
                </div>
                <div className="mt-16" ref={projectsRef} id="projects">
                    <Projects />
                </div>{' '}
                <div className="mb-20 mt-16" ref={contactRef} id="contact">
                    <Contact />
                </div>
            </div>
            {isScrollToTopButtonVisible && (
                <motion.div
                    initial={{ y: '150%' }}
                    animate={{ y: '100%' }}
                    // exit={{ y: isScrollToTopButtonVisible ? '-100%' : '100%' }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className={`fixed bottom-20 right-5 z-20 ${isScrollToTopButtonVisible ? 'visible' : 'hidden'}`}
                    onClick={() => handleScrollToTopButtonClick()}
                >
                    <ChevronsUp className="size-12 cursor-pointer rounded-2xl border-[0.5px] border-primary p-3 text-primary backdrop-blur-sm md:size-[3.5rem] md:p-3" />
                </motion.div>
            )}
        </>
    );
};

export default HomePage;
