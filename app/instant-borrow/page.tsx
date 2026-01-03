'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useUserPositionV2 } from '@/hooks/contracts/useBorrowingProtocolV2';
import { InstantBorrowTabs } from '@/components/instant-borrow/InstantBorrowTabs';
import { PositionSummaryV2 } from '@/components/instant-borrow/PositionSummaryV2';
import { BorrowForm } from '@/components/instant-borrow/BorrowForm';
import { RepayForm } from '@/components/instant-borrow/RepayForm';
import { RedeemForm } from '@/components/instant-borrow/RedeemForm';
import { Zap } from 'lucide-react';

export default function InstantBorrowPage() {
    const { address, isConnected } = useAccount();
    const [activeTab, setActiveTab] = useState('borrow');

    // Get user position data
    const position = useUserPositionV2();

    const handleSuccess = () => {
        // Refetch position data after successful transaction
        position.refetch();
    };

    return (
        <div className="min-h-screen bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <Zap className="w-10 h-10 text-yellow-400" />
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                                INSTANT BORROW
                            </h1>
                        </div>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Pinjam IDRX dengan jaminan emas dalam satu klik. Cairkan langsung ke rekening bank Anda.
                        </p>
                    </div>

                    {/* Not Connected State */}
                    {!isConnected && (
                        <div className="p-8 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 backdrop-blur-xl text-center">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Connect Your Wallet
                            </h3>
                            <p className="text-white/60">
                                Please connect your wallet to start using Instant Borrow
                            </p>
                        </div>
                    )}

                    {/* Connected State */}
                    {isConnected && (
                        <div className="space-y-6">
                            {/* Position Summary */}
                            <PositionSummaryV2
                                collateral={position.collateral}
                                collateralValue={position.collateralValue}
                                debt={position.debt}
                                ltv={position.ltv}
                                isAtRisk={position.isAtRisk}
                                isLoading={position.isLoading}
                            />

                            {/* Tab Navigation */}
                            <InstantBorrowTabs
                                activeTab={activeTab}
                                onTabChange={setActiveTab}
                            />

                            {/* Tab Content */}
                            <div className="mt-6">
                                {activeTab === 'borrow' && (
                                    <BorrowForm
                                        maxBorrow={position.maxBorrow}
                                        onSuccess={handleSuccess}
                                    />
                                )}

                                {activeTab === 'repay' && (
                                    <RepayForm
                                        currentDebt={position.debt}
                                        currentCollateral={position.collateral}
                                        onSuccess={handleSuccess}
                                    />
                                )}

                                {activeTab === 'redeem' && (
                                    <RedeemForm />
                                )}
                            </div>

                            {/* Info Footer */}
                            <div className="p-4 rounded-xl bg-zinc-900/50 border border-yellow-500/20">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">💡</span>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold mb-1">How it works</h4>
                                        <ul className="text-sm text-white/60 space-y-1">
                                            <li>• <strong>Borrow:</strong> Deposit XAUT and borrow IDRX in one transaction</li>
                                            <li>• <strong>Repay:</strong> Repay debt and withdraw collateral simultaneously</li>
                                            <li>• <strong>Redeem:</strong> Convert IDRX to IDR and transfer to your bank (simulation)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
