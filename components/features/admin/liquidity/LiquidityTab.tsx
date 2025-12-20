"use client";

import { PoolOverview } from './PoolOverview';
import { AddLiquidityForm } from './AddLiquidityForm';
import { RemoveLiquidityForm } from './RemoveLiquidityForm';

/**
 * LiquidityTab - Liquidity management tab (verified users only)
 */
export function LiquidityTab() {
    return (
        <div className="space-y-6">
            <PoolOverview />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AddLiquidityForm />
                <RemoveLiquidityForm />
            </div>
        </div>
    );
}
