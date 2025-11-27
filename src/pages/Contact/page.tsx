import React from 'react';

const Contact: React.FC = () => {
    return (
        <>
            <div className="text-gray-300">
                <div className="flex items-center">
                    <p className="font-League_Spartan text-xl font-semibold tracking-widest text-portfolio-blue md:text-2xl">Contact</p>
                    <span className="ml-2 mt-1 h-[1px] w-full bg-portfolio-darkBlue"></span>
                </div>
                <div>
                    <p className="my-4 text-base font-semibold md:text-lg">🚀 Contact me for your next Project or Query!</p>
                    <div className="flex flex-col justify-center">
                        <p className="my-4 text-sm md:text-base">
                            While I&apos;m currently dedicated to my full-time role at Nineleaps Solutions Pvt. Ltd., but I&apos;m always excited
                            about collaborating on side projects and queries in web development, cloud infrastructure, or software architecture. Need
                            assistance or collaboration? Let&apos;s connect!
                        </p>
                        <button
                            onClick={() => (window.location.href = 'mailto:vishaljagamani20@gmail.com')}
                            className="inline-flex h-12 w-40 animate-shimmer items-center justify-center self-center rounded-md border border-portfolio-darkBlue bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
