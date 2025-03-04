import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    // weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    // weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Vishal Jagamani - Software Developer',
    description:
        'Software Developer with over 2 years of experience in designing and developing high-quality web applications using React, Node.js, MySQL, and MongoDB. Proficient in both frontend and backend development, with a passion for crafting scalable solutions and delivering exceptional user experiences. Known for delivering robust applications by integrating secure APIs and optimizing database performance.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <GoogleAnalytics />
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
