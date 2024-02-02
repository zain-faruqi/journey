'use client';
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav() {
    const { user, isLoaded } = useUser();
    return (
        <header>
            <nav className="flex justify-between items-center p-6 lg:px-8 h-10 border border-t-0 border-l-0 border-r-0 border-b-white" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">JOURNEY</a>
                </div>
                {isLoaded && user &&
                    <>
                    <Link href="/dashboard">DASHBOARD</Link>
                    <UserButton afterSignOutUrl="/"/>
                    </>
                }
                
            </nav>
        </header>
    );
}
