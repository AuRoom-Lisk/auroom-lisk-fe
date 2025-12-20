import Link from 'next/link';
import { SectionWrapper } from './shared/SectionWrapper';
import { StepCard } from './shared/StepCard';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, ArrowRight, Lock, TrendingUp } from 'lucide-react';

export function HowItWorks() {
    return (
        <SectionWrapper id="how-it-works">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
                    <p className="text-lg text-muted-foreground">
                        Start your gold investment journey in 4 simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StepCard
                        step={1}
                        icon={LinkIcon}
                        title="Connect & Verify"
                        description="Connect your wallet and complete KYC verification for compliance and security."
                        time="~2 minutes"
                        iconColor="text-blue-600"
                        iconBgColor="bg-blue-100 dark:bg-blue-900"
                    />
                    <StepCard
                        step={2}
                        icon={ArrowRight}
                        title="Swap IDRX to XAUT"
                        description="Enter your IDRX amount and we'll show you exactly how much XAUT you'll receive. Your gold arrives in seconds."
                        time="~30 seconds"
                        iconColor="text-purple-600"
                        iconBgColor="bg-purple-100 dark:bg-purple-900"
                    />
                    <StepCard
                        step={3}
                        icon={Lock}
                        title="Stake in GoldVault"
                        description="Deposit your XAUT into the GoldVault to start earning yield. You'll receive gXAUT tokens representing your share."
                        time="~30 seconds"
                        iconColor="text-yellow-600"
                        iconBgColor="bg-yellow-100 dark:bg-yellow-900"
                    />
                    <StepCard
                        step={4}
                        icon={TrendingUp}
                        title="Earn & Withdraw"
                        description="Your gXAUT automatically accumulates yield. Withdraw to XAUT whenever you want - no lock-up periods, no penalties."
                        time="Instant"
                        iconColor="text-green-600"
                        iconBgColor="bg-green-100 dark:bg-green-900"
                    />
                </div>

                {/* CTA */}
                <div className="text-center pt-8">
                    <Button asChild size="lg" className="text-lg px-8">
                        <Link href="/swap">
                            🚀 Start Now - Go to Swap
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
