import Head from "next/head";
import Link from "next/link";
import React, {FC, PropsWithChildren} from "react";
import { Nav } from '../common/nav';

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
    title,
    description,
    children,
}) => {
    return(
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title} | MoviePedia</title>
                { description && <meta name="description" content="{description}" />}
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <header className="bg-slate-200 h-20 dark:text-black">
                <Nav />
            </header>
            <main className="grow flex flex-col dark:text-white">{children}</main>
            <footer className="flex p-6 h-20 dark:text-white bg-slate-900 items-center justify-center">
                <a
                href="https://rootstack.com/en"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by <span className="">Rootstack</span>
                </a>
            </footer>
        </div>
        
        

    );
};

export default ApplicationWrapper;