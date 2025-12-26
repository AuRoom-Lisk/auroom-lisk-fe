'use client';

import { type BorrowCalculation } from '@/lib/utils/instantBorrowCalculations';
import { getLTVStatus, getLTVColor } from '@/lib/config/ltvPresets';
import { formatUnits } from 'viem';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BorrowSummaryV2Props {
    calculation: BorrowCalculation;
    xautPrice: bigint;
    isLoading?: boolean;
}

export function BorrowSummaryV2({ calculation, xautPrice, isLoading }: BorrowSummaryV2Props) {
    const formatIDR = (value: bigint | undefined) => {
        if (!value) return 'Rp 0';
        const num = Number(formatUnits(value, 6));
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    };

    const formatXAUT = (value: bigint | undefined) => {
        if (!value) return '0.000';
        return Number(formatUnits(value, 6)).toFixed(6);
    };

    if (isLoading) {
        return (
            <div className="p-8 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 flex items-center justify-center">
                <Loader2 className="w-6 h-6 text-yellow-500 animate-spin" />
            </div>
        );
    }

    if (calculation.borrowAmount === 0n) {
        return (
            <div className="p-8 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 text-center">
                <p className="text-white/60">
                    Masukkan jumlah pinjaman untuk melihat ringkasan
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 space-y-4">
            <h3 className="text-lg font-semibold text-white">📊 RINGKASAN PINJAMAN</h3>

            <div className="h-px bg-yellow-500/20" />

            {/* Loan Details */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-white/70">Jumlah Pinjaman</span>
                    <span className="text-white font-semibold">{formatIDR(calculation.borrowAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white/70">Tingkat LTV</span>
                    <span className={cn('font-semibold', getLTVColor(calculation.ltvBps))}>
                        {(calculation.ltvBps / 100).toFixed(0)}% ({getLTVStatus(calculation.ltvBps)})
                    </span>
                </div>
            </div>

            <div className="h-px bg-yellow-500/20" />

            {/* Collateral Required */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-white/70">🥇 Jaminan XAUT</span>
                    <span className="text-yellow-500 font-bold">{formatXAUT(calculation.collateralRequired)} XAUT</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm ml-6">Nilai Jaminan</span>
                    <span className="text-white/90 text-sm">{formatIDR(calculation.collateralValue)}</span>
                </div>
            </div>

            <div className="h-px bg-yellow-500/20" />

            {/* Fees & Received */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-white/70">💸 Biaya (0.5%)</span>
                    <span className="text-white/90">{formatIDR(calculation.fee)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">✨ Yang Kamu Terima</span>
                    <span className="text-green-500 font-bold text-lg">{formatIDR(calculation.amountReceived)}</span>
                </div>
            </div>

            <div className="h-px bg-yellow-500/20" />

            {/* Safety Metrics */}
            <div className="space-y-2">
                <div className="text-white/70 font-semibold mb-2">🛡️ Keamanan Posisi</div>
                <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Jarak ke Likuidasi</span>
                    <span className="text-white/90 text-sm font-semibold">{calculation.liquidationBuffer}%</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Buffer Harga</span>
                    <span className="text-white/90 text-sm">
                        Emas bisa turun ~{calculation.priceDropBuffer}% sebelum likuidasi
                    </span>
                </div>
            </div>
        </div>
    );
}
