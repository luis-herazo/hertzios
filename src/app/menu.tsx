'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu as MenuIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet";

const navItems = {
    "Inicio": "/",
    "Servicios": "/services",
    "Proyectos": "/projects",
    "Nosotros": "/about",
    "Contacto": "/contact",
    "Presupuesto": "/budget"
};

export default function Menu() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto px-4">
                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image
                        src="/h-logo.png"
                        alt="Hertzios Logo"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                    <span className="hidden font-bold sm:inline-block">
                        HERTZIOS
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {Object.entries(navItems).map(([item, route]) => (
                            <Link
                                key={item}
                                href={route}
                                className={`transition-colors hover:text-foreground/80 ${route === '/budget' ? 'bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md' : 'text-foreground/60'}`}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div className="flex flex-1 items-center justify-end md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <SheetTitle>
                                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                                    <Image
                                        src="/h-logo.png"
                                        alt="Hertzios Logo"
                                        width={24}
                                        height={24}
                                        className="mr-2 object-contain"
                                    />
                                    <span className="font-bold">HERTZIOS</span>
                                </Link>
                            </SheetTitle>
                            <div className="my-4 pb-10 pl-6">
                                <div className="flex flex-col space-y-3">
                                    {Object.entries(navItems).map(([item, route]) => (
                                        <Link
                                            key={item}
                                            href={route}
                                            className="text-muted-foreground transition-colors hover:text-foreground"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
