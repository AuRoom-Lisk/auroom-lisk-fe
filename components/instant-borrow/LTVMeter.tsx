'use client';

import { cn } from '@/lib/utils';

interface LTVMeterProps {
    currentLTV: number; // in basis points (e.g., 7500 = 75%)
    maxLTV?: number;
    warningLTV?: number;
    liquidationLTV?: number;
    className?: string;
}

export function LTVMeter({
    currentLTV,
    maxLTV = 7500,
    warningLTV = 8000,
    liquidationLTV = 9000,
    className,
}: LTVMeterProps) {
    // Convert basis points to percentage
    const currentPercent = currentLTV / 100;
    const maxPercent = maxLTV / 100;
    const warningPercent = warningLTV / 100;
    const liquidationPercent = liquidationLTV / 100;

    // Determine color based on LTV
    const getColor = () => {
        if (currentLTV >= warningLTV) return 'bg-red-500';
        if (currentLTV >= maxLTV) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getTextColor = () => {
        if (currentLTV >= warningLTV) return 'text-red-500';
        if (currentLTV >= maxLTV) return 'text-yellow-500';
        return 'text-green-500';
    };

    return (
        <div className={cn('space-y-2', className)}>
            {/* LTV Value */}
            <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Loan-to-Value (LTV)</span>
                <span className={cn('text-lg font-bold', getTextColor())}>
                    {currentPercent.toFixed(2)}%
                </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                {/* Current LTV Fill */}
                <div
                    className={cn('h-full transition-all duration-300', getColor())}
                    style={{ width: `${Math.min((currentPercent / 100) * 100, 100)}%` }}
                />

                {/* Markers */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-yellow-400/50"
                    style={{ left: `${maxPercent}%` }}
                    title={`Max LTV: ${maxPercent}%`}
                />
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-orange-400/50"
                    style={{ left: `${warningPercent}%` }}
                    title={`Warning: ${warningPercent}%`}
                />
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-red-400/50"
                    style={{ left: `${liquidationPercent}%` }}
                    title={`Liquidation: ${liquidationPercent}%`}
                />
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-xs text-white/40">
                <span>0%</span>
                <div className="flex items-center gap-3">
                    <span className="text-yellow-400">{maxPercent}% Max</span>
                    <span className="text-orange-400">{warningPercent}% Warn</span>
                    <span className="text-red-400">{liquidationPercent}% Liq</span>
                </div>
                <span>100%</span>
            </div>
        </div>
    );
}
