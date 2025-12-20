import { SectionWrapper } from './shared/SectionWrapper';
import { TechBadge } from './shared/TechBadge';

export function BuiltWith() {
    const mainTech = [
        {
            name: 'Mantle Network',
            description: 'Layer 2 scaling solution with low fees and high throughput. Ethereum security with better UX.',
            icon: '🔷',
        },
        {
            name: 'Uniswap V2 AMM',
            description: 'Battle-tested DEX protocol for trustless token swaps with deep liquidity.',
            icon: '🦄',
        },
        {
            name: 'ERC-4626 Vault',
            description: 'Industry standard for yield-bearing vaults. Composable, audited, widely supported.',
            icon: '🏦',
        },
        {
            name: 'ERC-3643 Compliance',
            description: 'Identity-based token standard for regulated assets. Ensures KYC compliance on-chain.',
            icon: '✅',
        },
    ];

    const secondaryTech = [
        'Next.js 14',
        'TypeScript',
        'wagmi v2',
        'Tailwind CSS',
        'Foundry',
        'Viem',
    ];

    return (
        <SectionWrapper id="built-with">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Built With</h2>
                    <p className="text-lg text-muted-foreground">
                        Powered by industry-leading technology
                    </p>
                </div>

                {/* Main Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mainTech.map((tech, index) => (
                        <TechBadge
                            key={index}
                            name={tech.name}
                            description={tech.description}
                            icon={tech.icon}
                            size="lg"
                        />
                    ))}
                </div>

                {/* Secondary Technologies */}
                <div>
                    <h3 className="text-xl font-bold text-center mb-6">Other Technologies</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {secondaryTech.map((tech, index) => (
                            <TechBadge
                                key={index}
                                name={tech}
                                size="sm"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
