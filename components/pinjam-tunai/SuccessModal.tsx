'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { formatRupiah, formatXAUT } from '@/lib/utils/format';
import { getBankById } from '@/lib/config/banks';
import { CheckCircle2 } from 'lucide-react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'borrow' | 'repay';
    data: {
        loanAmount?: bigint;
        collateral?: bigint;
        fee?: bigint;
        amountReceived?: bigint;
        bankId?: string;
        accountNumber?: string;
        accountName?: string;
        referenceNumber?: string;
        txHash?: string;
    };
}

export function SuccessModal({ isOpen, onClose, type, data }: SuccessModalProps) {
    const bank = data.bankId ? getBankById(data.bankId) : null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-zinc-900 border-2 border-yellow-500/30 text-white max-w-md">
                <div className="space-y-6 py-4">
                    {/* Icon */}
                    <div className="text-center">
                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold">
                            {type === 'borrow' ? 'PINJAMAN BERHASIL!' : 'PELUNASAN BERHASIL!'}
                        </h2>
                    </div>

                    <div className="h-px bg-yellow-500/20" />

                    {/* Details */}
                    <div className="space-y-3">
                        {type === 'borrow' ? (
                            <>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/70">Nominal pinjaman</span>
                                    <span className="text-white font-semibold">{formatRupiah(data.loanAmount || 0n)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/70">Emas dijaminkan</span>
                                    <span className="text-yellow-500 font-semibold">{formatXAUT(data.collateral || 0n)} XAUT</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/70">Biaya layanan</span>
                                    <span className="text-white/90">{formatRupiah(data.fee || 0n)}</span>
                                </div>

                                <div className="h-px bg-yellow-500/20" />

                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">Transfer ke rekening</span>
                                    <span className="text-green-500 font-bold">{formatRupiah(data.amountReceived || 0n)}</span>
                                </div>
                                {bank && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/70">Bank</span>
                                            <span className="text-white/90">{bank.shortName} - {data.accountNumber}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/70">Nama</span>
                                            <span className="text-white/90">{data.accountName}</span>
                                        </div>
                                    </>
                                )}

                                <div className="h-px bg-yellow-500/20" />

                                {data.referenceNumber && (
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/70">No. Referensi</span>
                                        <span className="text-white/90 font-mono text-sm">{data.referenceNumber}</span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/70">Hutang dilunasi</span>
                                    <span className="text-white font-semibold">{formatRupiah(data.loanAmount || 0n)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/70">Emas dikembalikan</span>
                                    <span className="text-yellow-500 font-bold">{formatXAUT(data.collateral || 0n)} XAUT</span>
                                </div>

                                <div className="h-px bg-yellow-500/20" />

                                <p className="text-green-400 text-center font-semibold">
                                    Emas sudah kembali ke wallet kamu! 🥇
                                </p>
                            </>
                        )}
                    </div>

                    {type === 'borrow' && (
                        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                            <p className="text-white/70 text-sm text-center">
                                ⓘ Ini adalah simulasi. Di production, dana akan masuk ke rekening dalam 1-2 hari kerja.
                            </p>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="space-y-2">
                        <Button
                            onClick={onClose}
                            className="w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold"
                        >
                            🏠 Kembali ke Beranda
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
