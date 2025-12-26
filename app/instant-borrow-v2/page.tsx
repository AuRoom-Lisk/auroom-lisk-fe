'use client';

import { useState } from 'react';
import { InstantBorrowTabs } from '@/components/instant-borrow/InstantBorrowTabs';
import { PositionSummaryV2 } from '@/components/instant-borrow/PositionSummaryV2';
import { BorrowFormV2 } from '@/components/instant-borrow-v2/BorrowFormV2';
import { RepayForm } from '@/components/instant-borrow/RepayForm';
import { RedeemForm } from '@/components/instant-borrow/RedeemForm';
import { useUserPositionV2 } from '@/hooks/contracts/useBorrowingProtocolV2';

export default function InstantBorrowV2Page() {
    const [activeTab, setActiveTab] = useState('borrow');
    const position = useUserPositionV2();

    const handleSuccess = () => {
        position.refetch();
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
                        <span className="text-5xl">⚡</span>
                        INSTANT BORROW V2
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-bold rounded">
                            NEW
                        </span>
                    </h1>
                    <p className="text-white/70 text-lg">
                        Pinjam IDRX dengan jaminan emas - UX paling sederhana!
                    </p>
                    <p className="text-white/50 text-sm">
                        ✨ Cukup input jumlah pinjaman + pilih LTV → System hitung jaminan otomatis
                    </p>
                </div>

                {/* Position Summary */}
                {(position.collateral > 0n || position.debt > 0n) && (
                    <PositionSummaryV2
                        collateral={position.collateral}
                        debt={position.debt}
                        collateralValue={position.collateralValue}
                        ltv={position.ltv}
                        isAtRisk={position.isAtRisk}
                        isLoading={position.isLoading}
                    />
                )}

                {/* Tabs */}
                <InstantBorrowTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === 'borrow' && (
                        <BorrowFormV2 onSuccess={handleSuccess} />
                    )}
                    {activeTab === 'repay' && (
                        <RepayForm
                            currentDebt={position.debt}
                            currentCollateral={position.collateral}
                            onSuccess={handleSuccess}
                        />
                    )}
                    {activeTab === 'redeem' && <RedeemForm />}
                </div>
            </div>
        </div>
    );
}
