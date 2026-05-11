'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const [mounted, setMounted] = React.useState(false);
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

    React.useEffect(() => {
        setMounted(true);
        const root = document.documentElement;
        const initialTheme = root.classList.contains('dark') ? 'dark' : 'light';
        setTheme(initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        // @ts-ignore - view transition API is relatively new
        if (!document.startViewTransition) {
            setTheme(newTheme);
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', newTheme);
            return;
        }

        // @ts-ignore
        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', newTheme);
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                { clipPath: ["inset(0 0 100% 0)", "inset(0)"] },
                {
                    pseudoElement: "::view-transition-new(root)",
                    duration: 600,
                    easing: "ease-in-out",
                }
            );
        });
    };

    if (!mounted) {
        return <div className="w-10 h-10" />; // Avoid hydration mismatch
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="rounded-full w-10 h-10 transition-transform duration-300 hover:scale-110 active:scale-95"
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5 text-color-text-secondary" />
            ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
            )}
        </Button>
    );
}
