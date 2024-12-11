import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import { AppProps } from 'next/app';
import '@/styles/globals.css'

export default function App({Component, pageProps}: AppProps) {
    return (
        <ClerkProvider>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <Component {...pageProps} />
        </ClerkProvider>
    )
}