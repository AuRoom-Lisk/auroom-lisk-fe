import { SectionWrapper } from './shared/SectionWrapper';
import { FeatureCard } from './shared/FeatureCard';
import { Globe, DollarSign, CheckCircle } from 'lucide-react';

export function WhatIsAuRoom() {
    return (
        <SectionWrapper id="what-is-auroom">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">What is AuRoom?</h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
                        <p>
                            AuRoom is a Real World Asset (RWA) protocol built on Mantle Network
                            that enables anyone to convert Indonesian Rupiah (IDRX) into
                            tokenized gold (XAUT) and earn yield through our innovative vault system.
                        </p>
                        <p>
                            We believe gold investment should be:
                        </p>
                    </div>
                </div>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Globe}
                        title="🌍 Accessible"
                        description="Swap from Rupiah to gold in minutes. No minimum investment, no bank visits."
                        iconColor="text-blue-600"
                        iconBgColor="bg-blue-100 dark:bg-blue-900"
                    />
                    <FeatureCard
                        icon={DollarSign}
                        title="💰 Productive"
                        description="Your gold earns yield through DeFi liquidity provision. No more idle assets."
                        iconColor="text-green-600"
                        iconBgColor="bg-green-100 dark:bg-green-900"
                    />
                    <FeatureCard
                        icon={CheckCircle}
                        title="✅ Compliant"
                        description="Identity verification ensures secure, legitimate transactions for all users."
                        iconColor="text-purple-600"
                        iconBgColor="bg-purple-100 dark:bg-purple-900"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
