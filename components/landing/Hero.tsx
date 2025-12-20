'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
    const scrollToNext = () => {
        const nextSection = document.getElementById('what-is-auroom');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50 dark:from-yellow-950/20 dark:via-background dark:to-yellow-950/20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/30 dark:bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Logo/Brand */}
                    <div className="inline-block">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-2">
                            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                                AuRoom
                            </span>
                        </h1>
                    </div>

                    {/* Main Tagline */}
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        From Rupiah to{' '}
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                            Yield-Bearing Gold
                        </span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        Transform your Indonesian Rupiah into tokenized gold that earns yield while you sleep.
                        Backed by real assets, powered by DeFi.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                            <Link href="/swap">
                                🚀 Start Swapping <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 py-6"
                        >
                            <button onClick={scrollToNext}>
                                📖 Learn More
                            </button>
                        </Button>
                    </div>

                    {/* Scroll indicator */}
                    <div className="pt-12 animate-bounce">
                        <button
                            onClick={scrollToNext}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Scroll to next section"
                        >
                            <ChevronDown className="h-8 w-8 mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
