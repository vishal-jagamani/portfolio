import React from 'react';
import data from '@/assets/data/experience.json';

const Experience: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <p className="font-League_Spartan text-2xl font-semibold tracking-widest text-portfolio-blue">Experience</p>
                    <span className="ml-2 mt-1 h-[1px] w-full bg-portfolio-darkBlue"></span>
                </div>
                <div className="mt-6 space-y-8">
                    {data?.map((item) => {
                        return (
                            <>
                                <div className="w-full justify-between md:flex">
                                    <div className="md:w-2/6">
                                        <p className="text-base text-muted-foreground md:text-xl">{item?.duration}</p>
                                    </div>
                                    <div className="md:w-4/5">
                                        <p className="text-2xl font-semibold tracking-wider text-primary">{item?.role}</p>
                                        <p className="font-League_Spartan text-lg font-medium tracking-wider text-primary">{item?.companyName}</p>
                                        <p className="font-Geologica mt-3 text-base font-thin leading-5 text-primary md:text-base md:font-thin">
                                            {item?.description}
                                        </p>
                                        <div className="flex flex-wrap">
                                            {item?.techStack?.map((val) => {
                                                return (
                                                    <>
                                                        <div
                                                            key={val?.id}
                                                            className="mr-2 mt-3 rounded-full bg-portfolio-darkBlue bg-opacity-60 px-3 py-1 md:mr-3"
                                                        >
                                                            <p className="text-nowrap text-sm font-semibold tracking-wide text-primary opacity-100 dark:text-portfolio-blue md:text-sm">
                                                                {val?.name}
                                                            </p>
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

export default Experience;
