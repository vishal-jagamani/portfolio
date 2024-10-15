import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const GA_TRACKING_ID = process?.env?.GA_TRACKING_ID;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: React.FC<any> = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            window.gtag('config', GA_TRACKING_ID, { page_path: url });
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });`,
                }}
            />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
