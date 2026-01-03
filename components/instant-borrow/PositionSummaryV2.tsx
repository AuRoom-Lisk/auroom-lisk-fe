'use client';

import { LTVMeter } from './LTVMeter';
import { AlertCircle } from 'lucide-react';
import { formatUnits } from 'viem';

interface PositionSummaryV2Props {
    collateral: bigint;
    collateralValue: bigint;
    debt: bigint;
    ltv: bigint;
    isAtRisk: boolean;
    isLoading: boolean;
}

export function PositionSummaryV2({
    collateral,
    collateralValue,
    debt,
    ltv,
    isAtRisk,
    isLoading,
}: PositionSummaryV2Props) {
    // Don't show if no position
    if (!isLoading && collateral === BigInt(0) && debt === BigInt(0)) {
        return null;
    }

    const formatIDR = (value: bigint) => {
        const num = Number(formatUnits(value, 6));
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    };

    const formatXAUT = (value: bigint) => {
        return Number(formatUnits(value, 6)).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6,
        });
    };

    if (isLoading) {
        return (
            <div className="p-6 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 backdrop-blur-xl">
                <div className="animate-pulse space-y-4">
                    <div className="h-6 bg-zinc-800 rounded w-1/3" />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-16 bg-zinc-800 rounded" />
                        <div className="h-16 bg-zinc-800 rounded" />
                        <div className="h-16 bg-zinc-800 rounded" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Your Position</h2>
                {isAtRisk && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-semibold text-red-400">At Risk</span>
                    </div>
                )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Collateral */}
                <div className="p-4 rounded-xl bg-black/40">
                    <p className="text-sm text-white/60 mb-1">Collateral</p>
                    <p className="text-lg font-bold text-white">
                        {formatXAUT(collateral)} XAUT
                    </p>
                    <p className="text-xs text-white/40 mt-1">
                        ≈ {formatIDR(collateralValue)}
                    </p>
                </div>

                {/* Debt */}
                <div className="p-4 rounded-xl bg-black/40">
                    <p className="text-sm text-white/60 mb-1">Debt</p>
                    <p className="text-lg font-bold text-white">
                        {formatIDR(debt)}
                    </p>
                    <p className="text-xs text-white/40 mt-1">IDRX</p>
                </div>

                {/* LTV */}
                <div className="p-4 rounded-xl bg-black/40">
                    <p className="text-sm text-white/60 mb-1">Current LTV</p>
                    <p className="text-lg font-bold text-yellow-400">
                        {(Number(ltv) / 100).toFixed(2)}%
                    </p>
                    <p className="text-xs text-white/40 mt-1">Max: 75%</p>
                </div>
            </div>

            {/* LTV Meter */}
            <LTVMeter currentLTV={Number(ltv)} />
        </div>
    );
}
