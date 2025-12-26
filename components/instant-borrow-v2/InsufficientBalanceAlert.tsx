'use client';

import { AlertTriangle } from 'lucide-react';
import { formatUnits } from 'viem';

interface InsufficientBalanceAlertProps {
    required: bigint;
    balance: bigint;
}

export function InsufficientBalanceAlert({ required, balance }: InsufficientBalanceAlertProps) {
    const formatXAUT = (value: bigint) => {
        return Number(formatUnits(value, 6)).toFixed(6);
    };

    return (
        <div className="p-4 rounded-xl bg-red-500/10 border-2 border-red-500/50 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
                <h4 className="text-red-400 font-semibold mb-1">⚠️ Saldo XAUT tidak cukup</h4>
                <p className="text-red-300/90 text-sm">
                    Dibutuhkan: <span className="font-bold">{formatXAUT(required)} XAUT</span> |
                    Saldo: <span className="font-bold">{formatXAUT(balance)} XAUT</span>
                </p>
                <p className="text-red-300/70 text-xs mt-2">
                    Kurangi jumlah pinjaman, pilih LTV lebih rendah, atau tambah saldo XAUT Anda
                </p>
            </div>
        </div>
    );
}
