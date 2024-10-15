import DotBackground from '@/components/aceternityui/DotBackground';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <DotBackground className={null} />
                <div className="z-10 flex w-full select-none justify-center px-4 md:w-7/12 md:px-7">
                    <p className="text-4xl">Vishal Jagamani</p>
                </div>
            </div>
        </>
    );
};

export default Home;
