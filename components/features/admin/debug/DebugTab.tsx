"use client";

import { BalanceTable } from './BalanceTable';
import { AllowanceTable } from './AllowanceTable';
import { PriceCalculator } from './PriceCalculator';

/**
 * DebugTab - Main wrapper for debug tab
 */
export function DebugTab() {
    return (
        <div className="space-y-6">
            <BalanceTable />
            <AllowanceTable />
            <PriceCalculator />
        </div>
    );
}
