'use client';

import { SectionWrapper } from './shared/SectionWrapper';
import { StatCard } from './shared/StatCard';
import { useLandingStats } from '@/hooks/useLandingStats';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function HowYieldWorks() {
    const stats = useLandingStats();

    return (
        <SectionWrapper background="muted" id="how-yield-works">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">How is Yield Generated?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Transparency is our priority. Here's exactly how your gold generates returns.
                    </p>
                </div>

                {/* Yield Flow Diagram */}
                <div className="bg-card border rounded-lg p-8">
                    <h3 className="text-xl font-bold text-center mb-8">The AuRoom Yield Mechanism</h3>

                    <div className="space-y-6">
                        {/* Flow Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                                <div className="font-bold mb-2">1. Deposit</div>
                                <div className="text-sm text-muted-foreground">Your XAUT</div>
                            </div>
                            <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                <div className="font-bold mb-2">2. Vault</div>
                                <div className="text-sm text-muted-foreground">Get gXAUT</div>
                            </div>
                            <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                            <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                                <div className="font-bold mb-2">3. Earn</div>
                                <div className="text-sm text-muted-foreground">LP Fees</div>
                            </div>
                        </div>

                        {/* Detailed Explanation */}
                        <div className="space-y-4 pt-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h4 className="font-bold mb-1">Deposit</h4>
                                    <p className="text-sm text-muted-foreground">
                                        You deposit XAUT into the GoldVault and receive gXAUT (Gold Vault Tokens) representing your share.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h4 className="font-bold mb-1">Liquidity Provision</h4>
                                    <p className="text-sm text-muted-foreground">
                                        The vault's XAUT is paired with USDC in liquidity pools, enabling trading on the decentralized exchange.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h4 className="font-bold mb-1">Fee Generation</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Every time someone swaps tokens, they pay a 0.3% fee. This fee is distributed to liquidity providers.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h4 className="font-bold mb-1">Yield Accumulation</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Fees accumulate in the vault, increasing total assets. Your gXAUT stays the same, but it's worth MORE XAUT.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">5</div>
                                <div>
                                    <h4 className="font-bold mb-1">Withdraw</h4>
                                    <p className="text-sm text-muted-foreground">
                                        When you redeem gXAUT, you get back more XAUT than you deposited. That's your yield!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Points */}
                <Alert>
                    <AlertDescription className="space-y-2">
                        <div className="font-bold mb-3">💡 Key Points:</div>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-600">✅</span>
                                <span>Yield comes from REAL trading activity, not token inflation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600">✅</span>
                                <span>0.3% fee on every swap goes to liquidity providers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600">✅</span>
                                <span>No lock-up period - withdraw your gold anytime</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600">✅</span>
                                <span>Yield varies based on trading volume</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>APY is NOT guaranteed and depends on market activity</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>Past performance does not guarantee future results</span>
                            </li>
                        </ul>
                    </AlertDescription>
                </Alert>

                {/* Current Vault Stats */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Current Vault Stats</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            label="Total Value Locked"
                            value={stats.isLoading ? '...' : `${parseFloat(stats.tvl).toFixed(2)} XAUT`}
                            isLoading={stats.isLoading}
                        />
                        <StatCard
                            label="Share Price (gXAUT)"
                            value={stats.isLoading ? '...' : parseFloat(stats.sharePrice).toFixed(4)}
                            isLoading={stats.isLoading}
                        />
                        <StatCard
                            label="Estimated APY"
                            value={stats.estimatedApy}
                            isLoading={stats.isLoading}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
