'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import { GoldBalanceCard } from '@/components/pinjam-tunai/GoldBalanceCard';
import { LoanAmountInput } from '@/components/pinjam-tunai/LoanAmountInput';
import { BankSelector } from '@/components/pinjam-tunai/BankSelector';
import { LoanSummary } from '@/components/pinjam-tunai/LoanSummary';
import { ActiveLoanCard } from '@/components/pinjam-tunai/ActiveLoanCard';
import { RepayModal } from '@/components/pinjam-tunai/RepayModal';
import { ProcessingOverlay } from '@/components/pinjam-tunai/ProcessingOverlay';
import { SuccessModal } from '@/components/pinjam-tunai/SuccessModal';
import {
    useGoldBalance,
    useGoldPrice,
    useActiveLoan,
    useIDRXBalance,
    useLoanCalculation,
    useXAUTApproval,
    useIDRXApproval,
    useBorrow,
    useRepay,
} from '@/hooks/useLoan';
import { parseRupiahInput, formatRupiah } from '@/lib/utils/format';
import { type LoanFlowState, generateReferenceNumber } from '@/lib/utils/loanFlow';
import { Loader2 } from 'lucide-react';

export default function PinjamTunaiPage() {
    const { address, isConnected } = useAccount();

    // State
    const [loanInput, setLoanInput] = useState('');
    const [selectedBank, setSelectedBank] = useState('bca');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [showRepayModal, setShowRepayModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successData, setSuccessData] = useState<any>({});
    const [flowState, setFlowState] = useState<LoanFlowState>({ step: 'idle', message: '' });

    // Hooks
    const { balance: goldBalance, isLoading: goldLoading } = useGoldBalance();
    const { price: goldPrice, isLoading: priceLoading } = useGoldPrice();
    const activeLoan = useActiveLoan();
    const { balance: idrxBalance } = useIDRXBalance();

    // Parse loan amount
    const loanAmount = loanInput ? parseRupiahInput(loanInput) : 0n;
    const calculation = useLoanCalculation(loanAmount);

    // Calculate gold value
    const goldValue = (goldBalance * goldPrice) / BigInt(1e8);

    // Approvals
    const xautApproval = useXAUTApproval();
    const idrxApproval = useIDRXApproval();

    // Transactions
    const borrow = useBorrow();
    const repay = useRepay();

    // Check if form is valid
    const isFormValid =
        loanAmount > 0n &&
        calculation.isValid &&
        selectedBank !== '' &&
        accountNumber !== '' &&
        accountName !== '';

    const needsApproval = xautApproval.allowance < calculation.collateralRequired;

    // Handle approve
    const handleApprove = () => {
        xautApproval.approve(BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'));
    };

    // Handle borrow
    const handleBorrow = () => {
        setFlowState({ step: 'borrowing', message: 'Menjaminkan emas...' });
        borrow.execute(calculation.collateralRequired, loanAmount);
    };

    // Handle repay
    const handleRepay = (amount: bigint, isFullRepay: boolean) => {
        setFlowState({ step: 'borrowing', message: 'Melunasi pinjaman...' });
        repay.execute();
    };

    // Refetch allowance after approval
    useEffect(() => {
        if (xautApproval.isSuccess) {
            xautApproval.refetchAllowance();
        }
    }, [xautApproval.isSuccess]);

    // Handle borrow success
    useEffect(() => {
        if (borrow.isSuccess) {
            const referenceNumber = generateReferenceNumber();
            setSuccessData({
                loanAmount,
                collateral: calculation.collateralRequired,
                fee: calculation.fee,
                amountReceived: calculation.amountReceived,
                bankId: selectedBank,
                accountNumber,
                accountName,
                referenceNumber,
                txHash: borrow.hash,
            });
            setFlowState({ step: 'success', message: 'Pinjaman berhasil!' });
            setShowSuccessModal(true);
            setLoanInput('');
            setAccountNumber('');
            setAccountName('');
            borrow.reset();
            activeLoan.refetch();
        }
    }, [borrow.isSuccess]);

    // Handle repay success
    useEffect(() => {
        if (repay.isSuccess) {
            setSuccessData({
                loanAmount: activeLoan.debt,
                collateral: activeLoan.collateral,
            });
            setFlowState({ step: 'success', message: 'Pelunasan berhasil!' });
            setShowSuccessModal(true);
            setShowRepayModal(false);
            repay.reset();
            activeLoan.refetch();
        }
    }, [repay.isSuccess]);

    if (!isConnected) {
        return (
            <div className="min-h-screen bg-black py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">💰 PINJAM TUNAI</h1>
                    <p className="text-white/70 text-lg mb-8">
                        Jaminkan emas digital, terima uang ke rekening
                    </p>
                    <p className="text-white/60">
                        Silakan connect wallet untuk melanjutkan
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
                        <span className="text-5xl">💰</span>
                        PINJAM TUNAI
                    </h1>
                    <p className="text-white/70 text-lg">
                        Jaminkan emas digital, terima uang ke rekening
                    </p>
                    <p className="text-white/50 text-sm">
                        ✨ Seperti pegadaian, tapi digital dan lebih cepat
                    </p>
                </div>

                {/* Active Loan Card */}
                {activeLoan.hasActiveLoan && (
                    <ActiveLoanCard
                        collateral={activeLoan.collateral}
                        debt={activeLoan.debt}
                        collateralValue={activeLoan.collateralValue}
                        ltv={activeLoan.ltv}
                        onRepayClick={() => setShowRepayModal(true)}
                        isLoading={activeLoan.isLoading}
                    />
                )}

                {/* Gold Balance Card */}
                <GoldBalanceCard
                    balance={goldBalance}
                    balanceValue={goldValue}
                    maxLoan={calculation.maxLoan}
                    xautPrice={goldPrice}
                    isLoading={goldLoading || priceLoading}
                />

                {/* Loan Amount Input */}
                <LoanAmountInput
                    value={loanInput}
                    onChange={setLoanInput}
                    maxLoan={calculation.maxLoan}
                    disabled={borrow.isPending || borrow.isConfirming}
                />

                {/* Bank Selector */}
                <BankSelector
                    selectedBank={selectedBank}
                    onBankChange={setSelectedBank}
                    accountNumber={accountNumber}
                    onAccountNumberChange={setAccountNumber}
                    accountName={accountName}
                    onAccountNameChange={setAccountName}
                    disabled={borrow.isPending || borrow.isConfirming}
                />

                {/* Loan Summary */}
                <LoanSummary
                    calculation={calculation}
                    bankId={selectedBank}
                    accountNumber={accountNumber}
                    xautPrice={goldPrice}
                />

                {/* Error Message */}
                {calculation.errorMessage && loanAmount > 0n && (
                    <div className="p-4 rounded-xl bg-red-500/10 border-2 border-red-500/50">
                        <p className="text-red-400 text-center font-semibold">
                            ⚠️ {calculation.errorMessage}
                        </p>
                    </div>
                )}

                {/* CTA Button */}
                <div className="space-y-3">
                    {needsApproval ? (
                        <Button
                            onClick={handleApprove}
                            disabled={xautApproval.isPending || xautApproval.isConfirming}
                            className="w-full h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg"
                        >
                            {xautApproval.isPending || xautApproval.isConfirming ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    {xautApproval.isPending ? 'Approving...' : 'Confirming...'}
                                </>
                            ) : (
                                'Izinkan Akses Emas'
                            )}
                        </Button>
                    ) : (
                        <Button
                            onClick={handleBorrow}
                            disabled={!isFormValid || borrow.isPending || borrow.isConfirming}
                            className="w-full h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-xl"
                        >
                            {borrow.isPending || borrow.isConfirming ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    {borrow.isPending ? 'Memproses...' : 'Confirming...'}
                                </>
                            ) : (
                                <>💸 CAIRKAN {formatRupiah(calculation.amountReceived)}</>
                            )}
                        </Button>
                    )}

                    <p className="text-center text-sm text-white/60">
                        ⓘ Emas kamu akan dijaminkan otomatis. Lunasi pinjaman kapan saja untuk menarik kembali emas kamu.
                    </p>
                </div>

                {/* Repay Modal */}
                <RepayModal
                    isOpen={showRepayModal}
                    onClose={() => setShowRepayModal(false)}
                    debt={activeLoan.debt}
                    collateral={activeLoan.collateral}
                    idrxBalance={idrxBalance}
                    onRepay={handleRepay}
                    isProcessing={repay.isPending || repay.isConfirming}
                />

                {/* Processing Overlay */}
                {(borrow.isPending || borrow.isConfirming || repay.isPending || repay.isConfirming) && (
                    <ProcessingOverlay state={flowState} />
                )}

                {/* Success Modal */}
                <SuccessModal
                    isOpen={showSuccessModal}
                    onClose={() => {
                        setShowSuccessModal(false);
                        setFlowState({ step: 'idle', message: '' });
                    }}
                    type={successData.bankId ? 'borrow' : 'repay'}
                    data={successData}
                />
            </div>
        </div>
    );
}
