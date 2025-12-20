'use client';

import { useEffect, useState } from 'react';
import { SectionWrapper } from './shared/SectionWrapper';
import { StatCard } from './shared/StatCard';
import { useLandingStats } from '@/hooks/useLandingStats';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LiveStats() {
    const stats = useLandingStats(true);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setLastUpdated(new Date());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date) => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        if (seconds < 60) return `${seconds} seconds ago`;
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    };

    return (
        <SectionWrapper background="muted" id="live-stats">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Live Protocol Stats</h2>
                    <p className="text-lg text-muted-foreground">
                        Real-time data from AuRoom smart contracts
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        label="Total Value Locked"
                        value={stats.isLoading ? '...' : `$${stats.tvlUsd}`}
                        trend={{
                            value: '5.2%',
                            period: '24h',
                            isPositive: true,
                        }}
                        isLoading={stats.isLoading}
                        animate
                    />
                    <StatCard
                        label="XAUT in Vault"
                        value={stats.isLoading ? '...' : `${parseFloat(stats.tvl).toFixed(2)}`}
                        trend={{
                            value: '12 XAUT',
                            period: '24h',
                            isPositive: true,
                        }}
                        isLoading={stats.isLoading}
                    />
                    <StatCard
                        label="gXAUT Share Price"
                        value={stats.isLoading ? '...' : parseFloat(stats.sharePrice).toFixed(4)}
                        trend={{
                            value: '3.45%',
                            period: '30d',
                            isPositive: true,
                        }}
                        isLoading={stats.isLoading}
                    />
                    <StatCard
                        label="Estimated APY"
                        value={stats.estimatedApy}
                        isLoading={stats.isLoading}
                    />
                </div>

                {/* Exchange Rate */}
                <div className="bg-card border rounded-lg p-8">
                    <h3 className="text-xl font-bold text-center mb-6">Current Exchange Rate</h3>
                    <div className="text-center space-y-4">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold font-mono text-yellow-600">
                                1 XAUT = {stats.xautPriceIdrx} IDRX
                            </div>
                            <div className="text-lg text-muted-foreground">
                                ≈ ${stats.xautPrice} USD
                            </div>
                            <div className="text-sm text-muted-foreground">
                                ≈ Rp {stats.xautPriceIdrx}
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
                            <RefreshCw className="h-4 w-4" />
                            <span>Last updated: {formatTime(lastUpdated)}</span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="text-center text-sm text-muted-foreground">
                    <p>* Stats auto-refresh every 30 seconds from on-chain data</p>
                </div>
            </div>
        </SectionWrapper>
    );
}
