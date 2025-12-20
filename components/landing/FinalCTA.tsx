import Link from 'next/link';
import { SectionWrapper } from './shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <SectionWrapper id="final-cta">
            <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-2xl p-12 text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your Gold Journey?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join users who are already earning yield on their gold investments with AuRoom.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="text-lg px-8">
                            <Link href="/swap">
                                🚀 Start Swapping <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-lg px-8">
                            <Link href="/vault">
                                🏦 Stake Gold
                            </Link>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4">
                        No minimum investment. Start with any amount.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
