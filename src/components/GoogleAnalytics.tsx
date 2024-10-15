import React from 'react';
import Script from 'next/script';

const GA_TRACKING_ID = process?.env?.GA_TRACKING_ID;

const GoogleAnalytics: React.FC = () => {
    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <Script id="" strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || []
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');`}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
