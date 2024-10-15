import DotBackground from '@/components/aceternityui/DotBackground';
import HomePage from '@/pages/page';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <DotBackground className={null} />
                <HomePage />
            </div>
        </>
    );
};

export default Home;
