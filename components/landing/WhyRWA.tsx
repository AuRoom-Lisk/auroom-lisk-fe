import { SectionWrapper } from './shared/SectionWrapper';
import { ComparisonTable } from './shared/ComparisonTable';
import { TrendingUp, Shield, Globe, Gem } from 'lucide-react';

export function WhyRWA() {
    const comparisonData = [
        {
            aspect: 'Minimum Investment',
            traditional: 'Rp 5-10 juta minimum',
            auroom: 'Any amount, start small',
        },
        {
            aspect: 'Storage',
            traditional: 'Pay fees or risk at home',
            auroom: 'Secure Swiss vaults included',
        },
        {
            aspect: 'Liquidity',
            traditional: 'Sell at gold shops (limited hours)',
            auroom: '24/7 on-chain trading',
        },
        {
            aspect: 'Yield Generation',
            traditional: 'None (idle asset)',
            auroom: 'Earn from DeFi activities',
        },
        {
            aspect: 'Verification',
            traditional: 'Physical inspection needed',
            auroom: 'On-chain proof, transparent',
        },
    ];

    const goldReasons = [
        {
            icon: TrendingUp,
            title: '5,000+ Years of Value',
            description: 'Gold has maintained value across civilizations and proven as a store of value through all economic cycles.',
        },
        {
            icon: Shield,
            title: 'Inflation Hedge',
            description: 'Gold historically outperforms during inflation, protecting purchasing power vs fiat currencies.',
        },
        {
            icon: Globe,
            title: 'Globally Accepted',
            description: 'Universal value recognition with no country-specific risk or dependency.',
        },
        {
            icon: Gem,
            title: 'Tangible Backing',
            description: 'Real physical asset, not just code. Redeemable for actual gold bars.',
        },
    ];

    return (
        <SectionWrapper id="why-rwa">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Real World Assets?</h2>
                    <div className="max-w-3xl mx-auto">
                        <blockquote className="text-lg italic text-muted-foreground border-l-4 border-yellow-600 pl-6 py-4">
                            "RWA bridges the gap between traditional finance and blockchain,
                            bringing tangible, real-world value on-chain. Instead of speculative tokens,
                            you own a representation of actual assets."
                        </blockquote>
                    </div>
                </div>

                {/* Comparison Table */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Traditional vs AuRoom</h3>
                    <ComparisonTable rows={comparisonData} />
                </div>

                {/* Why Gold */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Why Gold?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {goldReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-card border rounded-lg p-6 text-center space-y-4 transition-all hover:shadow-lg hover:scale-105"
                            >
                                <div className="flex justify-center">
                                    <div className="h-12 w-12 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                                        <reason.icon className="h-6 w-6 text-yellow-600" />
                                    </div>
                                </div>
                                <h4 className="font-bold">{reason.title}</h4>
                                <p className="text-sm text-muted-foreground">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
