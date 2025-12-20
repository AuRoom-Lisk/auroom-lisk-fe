import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    background?: 'default' | 'muted' | 'gradient';
    id?: string;
}

export function SectionWrapper({
    children,
    className,
    background = 'default',
    id
}: SectionWrapperProps) {
    const bgClasses = {
        default: '',
        muted: 'bg-muted/50',
        gradient: 'bg-gradient-to-br from-yellow-50 via-white to-yellow-50 dark:from-yellow-950/20 dark:via-background dark:to-yellow-950/20'
    };

    return (
        <section
            id={id}
            className={cn(
                'py-16 md:py-24',
                bgClasses[background],
                className
            )}
        >
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
}
