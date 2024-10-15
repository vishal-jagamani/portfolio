import projects from '@/assets/data/projects.json';
import Portfolio_Image from '@/assets/images/project-portfolio.png';
import Soundtrack_Image from '@/assets/images/project-soundtrack.png';
import { Circle, GitFork, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Images = [
    {
        id: 1,
        name: 'Portfolio',
        image: Portfolio_Image,
    },
    {
        id: 2,
        name: 'Soundtrack',
        image: Soundtrack_Image,
    },
];

const Projects: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <p className="font-League_Spartan text-2xl font-semibold tracking-widest text-portfolio-blue">Projects</p>
                    <span className="ml-2 mt-1 h-[1px] w-full bg-portfolio-darkBlue"></span>
                </div>
                <div className="mt-6 space-y-10">
                    {projects?.map((item) => {
                        return (
                            <>
                                <div className="group flex w-full flex-col justify-between md:flex-row">
                                    <div className="mt-6 flex h-full w-full flex-col justify-between px-1 md:w-2/6 md:px-10">
                                        <Image
                                            alt="project-thumbnail-image"
                                            draggable={false}
                                            src={Images?.find((val) => val?.id === item?.id)?.image || ''}
                                            className="rounded-sm border-[1px] border-portfolio-darkBlue hover:scale-[1.01] hover:cursor-pointer hover:border-portfolio-blue hover:animate-in"
                                            onClick={() => (item?.id > 1 ? window.open(item?.projectLink) : null)}
                                        />
                                        {item?.id > 1 ? (
                                            <div className="my-4 flex flex-row justify-between px-20 md:px-4">
                                                <GitFork
                                                    className="cursor-pointer hover:text-portfolio-blue"
                                                    onClick={() => window.open(item?.githubRepoLink)}
                                                />
                                                <SquareArrowOutUpRight
                                                    className="cursor-pointer hover:text-portfolio-blue"
                                                    onClick={() => window.open(item?.projectLink)}
                                                />
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="md:w-4/6">
                                        <p className="mb-2 text-xl font-bold tracking-wider group-hover:text-portfolio-blue">{item?.name}</p>
                                        <p className="text-base font-medium text-primary md:text-base">{item?.description}</p>
                                        <div className="my-2 flex flex-wrap">
                                            {item?.techStack?.map((val) => {
                                                return (
                                                    <>
                                                        <div
                                                            key={val?.id}
                                                            className="mr-2 mt-2 rounded-full bg-portfolio-darkBlue bg-opacity-60 px-3 py-1 md:mr-3"
                                                        >
                                                            <p className="text-nowrap text-sm font-semibold text-primary opacity-100 dark:text-portfolio-blue">
                                                                {val?.name}
                                                            </p>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                        <div className="flex flex-wrap space-x-4">
                                            {item?.languages?.map((val) => {
                                                return (
                                                    <>
                                                        <div key={val?.id} className="mr-3 mt-3 flex items-center space-x-2 rounded-full">
                                                            <Circle size={10} fill={val?.color} strokeWidth={0} />
                                                            <p className="text-nowrap text-sm text-muted-foreground opacity-100">{val?.name}</p>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;
