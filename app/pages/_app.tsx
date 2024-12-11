import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import {AppProps} from 'next/app';
import '@/styles/globals.css'
// import {
//     Varela_Round,
// } from 'next/font/google';

// const varela = Varela_Round({
//     subsets: ['latin'],
//     variable: '--font-varela',
//     weight: '400'
// });
// <style jsx global>
//     {`
//         :root {
//             --font-varela: ${varela.style.fontFamily};
//         }
//     `}
// </style>
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ClerkProvider>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <Component {...pageProps} />
            </ClerkProvider>
        </>

    )
}