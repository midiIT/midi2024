import '../app/globals.css';
import type { AppProps } from 'next/app';
import { Inria_Sans } from '@next/font/google';

const inria_sans = Inria_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={inria_sans.className}>
            <Component {...pageProps} />
        </main>
    );
}